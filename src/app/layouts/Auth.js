import React from "react";
import HeadAuth from "../components/HeadAuth";
import SignLink from "../components/SignLink";

const Auth = ({ children, deskripsi, account, sign, href }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <HeadAuth deskripsi={deskripsi} />
        {children}
        {/* Sign Up Link */}
        <SignLink account={account} sign={sign} href={href} />
      </div>
    </div>
  );
};

export default Auth;
