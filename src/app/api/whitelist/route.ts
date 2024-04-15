
import axios from "axios";
import { NextResponse } from "next/server";

export const revelidate = 0;
export async function GET(){
  const abiRequest =  await axios.get(process.env.NEXT_PUBLIC_WHITELIST_URL!);

  return NextResponse.json(abiRequest.data);
}
