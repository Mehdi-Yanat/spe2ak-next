import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import RoomBox from "./roomBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { getAllRooms } from "@/queryFn/queryFn";
import { useQuery } from "react-query";
import { AddCircle } from "@mui/icons-material";

export default function Navbar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(true);

  const closeNavBar = () => {
    setIsNavBarOpen((value) => !value);
  };
  const { data } = useQuery({ queryKey: ["rooms"], queryFn: getAllRooms });

  return (
    <>
      {isNavBarOpen ? (
        <div
          className={`w-[100%] mt-10 translate-y-[${
            isNavBarOpen ? "0%" : "100%"
          }] h-[200px] border-t rounded-t-[50px]`}
        >
          <div className="flex  items-center justify-center ">
            <IconButton onClick={closeNavBar}>
              <ArrowBackIosIcon className="text-white rotate-[-90deg] " />
            </IconButton>
          </div>

          <div className=" h-[80%]   flex items-center justify-center p-5 ">
            <IconButton className="custom-prev-button ">
              <ArrowBackIosIcon className="text-white " />
            </IconButton>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={5}
              slidesPerView={4}
              navigation={{
                prevEl: ".custom-prev-button",
                nextEl: ".custom-next-button",
              }}
              loop
              className="flex w-full"
            >
              {data && data.data && data.data.length ? (
                data.data.map((el: any) => (
                  <SwiperSlide key={el._id}>
                    <RoomBox data={el} />
                  </SwiperSlide>
                ))
              ) : (
                <div className="flex items-center justify-center  w-full text-white">
                  <p>No room was found</p>
                </div>
              )}
              <IconButton className="border">
                <AddCircle className="text-white" />
              </IconButton>
            </Swiper>
            <IconButton className="custom-next-button  ">
              <ArrowForwardIosIcon className="text-white " />
            </IconButton>
          </div>
        </div>
      ) : (
        <div>
          <IconButton onClick={closeNavBar}>
            <ArrowBackIosIcon className="text-white rotate-90 " />
          </IconButton>
        </div>
      )}
    </>
  );
}
