"use client"

import { ethers } from "ethers";
import RACEABI from "@/../public/ABIS/RACEABI.json";
import WLDABI from "@/../public/ABIS/WLD.json";
import {  useEffect, useState } from "react";


export default function Meme() {
    const provider = new ethers.JsonRpcProvider(
        "https://worldchain-mainnet.g.alchemy.com/public"
      );
    const raceAddress = "0xaAC1FE8B6391E74f0DEd8336aD27DB903375C4FE";
    const wldAddress = "0x2cFc85d8E48F8EAB294be644d9E25C3030863003";
    const FIRST_RACE_TIMESTAMP = new Date("2025-01-09T02:54:13.000Z");

    const raceContract = new ethers.Contract(raceAddress, RACEABI, provider);
    const wldContract = new ethers.Contract(wldAddress, WLDABI, provider);

    const [totalRace, setTotalRace] = useState(0);
    const [wldRaceBalance, setWldRaceBalance] = useState(0);
    const [timeSinceFirst, setTimeSinceFirst] = useState("");
    const [averagePerHour, setAveragePerHour] = useState(0);


    async function data() {
      const currentRace = await raceContract.currentRace();
      const totalRaceFixed = (currentRace).toString() - 15;
      setTotalRace((currentRace).toString() - 15);
      const balance = await wldContract.balanceOf(raceAddress);
      setWldRaceBalance((balance).toString());
      
      // Calculate time since first race
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - FIRST_RACE_TIMESTAMP.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setTimeSinceFirst(`${diffDays}d ${diffHours}h`);

      // Calculate average races per hour
      const totalHours = diffTime / (1000 * 60 * 60);
      const average = Number((totalRaceFixed / totalHours).toFixed(2));
      setAveragePerHour(average);
  }


    useEffect(() => {
      data();
    }, []);

  return (
    <div className="">
        <h1 className="text-4xl font-bold text-center mb-8">Meme Race</h1>
        <p className="text-2xl font-bold text-center">Total Race: {totalRace}</p>
        <p className="text-2xl font-bold text-center">WLD Race Balance: {ethers.formatEther(wldRaceBalance)} $WLD</p>
        <p className="text-2xl font-bold text-center">Time Since First Race: {timeSinceFirst}</p>
        <p className="text-2xl font-bold text-center">Average Races/Hour: {averagePerHour}</p>
        
    </div>
  )
}

