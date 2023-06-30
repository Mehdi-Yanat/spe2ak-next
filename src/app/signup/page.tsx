"use client";
import { IGenericErrorResponse, signup } from "@/interfaces/interfaces";
import { submitFormSignup } from "@/queryFn/queryFn";
import React, { FormEvent, useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

export default function Signup() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate, isLoading } = useMutation(
    async (formValues: signup) => {
      if (formValues.password !== formValues.confirmPassword)
        return toast.warning("Password don't match confirm password");
      const response = await submitFormSignup(formValues);
      if ("success" in response && !response.success)
        throw new Error(response.message);
      return response;
    },
    {
      onSuccess({ statusCode, message }) {
        if (Array.isArray(message)) {
          setTimeout(() => {
            message.map((el) => toast.warning(el));
          }, 0);
        } else {
          setTimeout(
            () =>
              statusCode === 201 ? toast.success(message) : toast.warn(message),
            0
          );
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

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-black-700 ">
          Sign up
        </h1>
        <form onSubmit={onSubmit} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              name="username"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(event) =>
                setFormValues((values) => {
                  return {
                    ...values,
                    username: event.target.value,
                  };
                })
              }
            />
          </div>
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
          <div className="mb-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(event) =>
                setFormValues((values) => {
                  return {
                    ...values,
                    confirmPassword: event.target.value,
                  };
                })
              }
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-black-600 focus:outline-none focus:bg-black-600">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
