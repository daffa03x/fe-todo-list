import Link from "next/link";
import React from "react";

const SignLink = ({ account, sign, href }) => {
  return (
    <div className="text-center mt-6">
      <p className="text-sm text-gray-600">
        {account}{" "}
        <Link href={href} className="font-medium text-indigo-600 hover:text-indigo-500">
          {sign}
        </Link>
      </p>
    </div>
  );
};

export default SignLink;
