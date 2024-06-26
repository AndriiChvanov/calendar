"use server"

import { schedulesApi } from "@/api/Schedules"
import React from "react"
import Main from "@/components/Main"

async function getData() {
  const res = await schedulesApi.getSchedules()

  return res.schedules
}

export default async function Home() {
  const data = await getData()
  return <Main data={data} />
}
