"use client";
import { getProfile } from "@/queryFn/queryFn";
import React from "react";
import { useQuery } from "react-query";

export default function Profile() {

  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  console.log('====================================');
  console.log(data);
  console.log('====================================');

  return <div></div>;
}
