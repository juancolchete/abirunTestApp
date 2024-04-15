"use client"
import {AbiSolver} from "/home/juanc/study/abirun/src/components/AbiSolver"

export default function Home() {
  return (
    <>
   <AbiSolver abiLink={"/api/abi"} whitelistEnabled={true} whitelistLink={"api/whitelist"}/>   
   </>
  )
}

