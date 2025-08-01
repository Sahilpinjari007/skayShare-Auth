import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <main className="grow flex justify-center items-center box-border">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
