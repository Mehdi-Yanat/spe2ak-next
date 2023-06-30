"use client";
import MainContent from "@/components/mainContent";
import Navbar from "@/components/navbar";
import { getProfile } from "@/queryFn/queryFn";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Loading from "./loading";

export default function Home() {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: getProfile,
  });


  useEffect(() => {
    if ((data && !data.user)) {
      router.push("/login");
    }
  }, [data, router]);

  return (
    <>
      {data && data.user ? (
        <main className="relative flex overflow-hidden flex-col items-center justify-between min-h-screen  ">
          <MainContent />
          <Navbar />
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
}
