"use client"
import {AbiSolver} from "abirun"

export default function Home() {
  return (
    <>
   <AbiSolver abiLink={"/api/abi"} whitelistEnabled={true} whitelistLink={"api/whitelist"}/>   
   </>
  )
}

