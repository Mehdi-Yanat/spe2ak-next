"use client";
import { IGenericErrorResponse, login } from "@/interfaces/interfaces";
import { getProfile, submitFormLogin } from "@/queryFn/queryFn";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { Cookies } from "typescript-cookie";

export default function Page() {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: getProfile,
  });

  const router = useRouter();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const { mutate, isLoading } = useMutation(
    async (formValues: login) => {
      const response = await submitFormLogin(formValues);
      if ("success" in response && !response.success)
        throw new Error(response.message);
      return response;
    },
    {
      onSuccess({ statusCode, message, token }) {
        if (token) {
          Cookies.set("auth-token", token);
        }

        if (Array.isArray(message)) {
          setTimeout(() => {
            message.map((el) => toast.warning(el));
          }, 0);
        } else {
          setTimeout(
            () =>
              statusCode === 200 ? toast.success(message) : toast.warn(message),
            0
          );
        }
        if (statusCode === 200) {
          router.push("/");
        }
      },
      onError(error: IGenericErrorResponse) {
        setTimeout(() => toast(error.message, { type: "error" }), 0);
      },
    }
  );

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    mutate(formValues);
  };

  useEffect(() => {
    if (data && data.user) {
      router.push("/");
    }
  }, [data, router]);

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black-700 ">
          Sign in
        </h1>
        <form onSubmit={onSubmit} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(event) =>
                setFormValues((values) => {
                  return {
                    ...values,
                    email: event.target.value,
                  };
                })
              }
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(event) =>
                setFormValues((values) => {
                  return {
                    ...values,
                    password: event.target.value,
                  };
                })
              }
            />
          </div>
          <a href="#" className="text-xs text-black-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-black-600 focus:outline-none focus:bg-black-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {"Don't have an account?"}
          <a href="#" className="font-medium text-black-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
