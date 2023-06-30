"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
//import queryClient from "../store";

export default function RQProvider({ children }: { children: ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
