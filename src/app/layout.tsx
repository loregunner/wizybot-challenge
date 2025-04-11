"use client";

import { ReactNode, Suspense } from "react";
import "./globals.css";


//Styles
import Loading from "./loading";
import StyledComponentsRegistry from "@/config/register";

interface IProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <head>
        <title>ChatBot</title>
      </head>
      <body className="layout" translate="no" suppressHydrationWarning={true}>
          <Suspense fallback={<Loading />}>
              <StyledComponentsRegistry>
                <div>{children}</div>
              </StyledComponentsRegistry>
          </Suspense>
      </body>
    </html>
  );
}
