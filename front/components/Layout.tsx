import React, { ComponentType, ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProp = {
  children: ReactNode[] | ReactNode;
};

export default function Layout({ children }: LayoutProp) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
