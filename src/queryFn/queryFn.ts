import { login, signup } from "@/interfaces/interfaces";
import { getCookie } from "typescript-cookie";



export const getAllRooms = () => {
  let token;

  if (typeof window !== "undefined") {
    // Code executed on the client-side
    token = getCookie("auth-token");

    const dataList = fetch(process.env.NEXT_PUBLIC_API_URL + "/v1/api/rooms", {
      headers: {
        Authorization: token as string,
      },
      cache: "no-store",
    }).then((res) => res.json());

    return dataList;
  }
};

export const getProfile = () => {
  let token;

  if (typeof window !== "undefined") {
    // Code executed on the client-side
    token = getCookie("auth-token");
  }

  const dataList = fetch(
    process.env.NEXT_PUBLIC_API_URL + "/v1/api/users/profile",
    {
      headers: {
        Authorization: token as string,
      },
    }
  ).then((res) => res.json());

  return dataList;
};

export const submitFormSignup = async (data: signup) => {
  const res = fetch(process.env.NEXT_PUBLIC_API_URL + "/v1/api/users/create", {
    method: "POST",
    body: JSON.stringify({
      username: data.username,
      email: data.email,
      password: data.password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());

  const result: any = res.then((res) => res);

  return result;
};

export const submitFormLogin = async (data: login) => {
  const res = fetch(process.env.NEXT_PUBLIC_API_URL + "/v1/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());

  const result: any = res.then((res) => res);

  return result;
};
