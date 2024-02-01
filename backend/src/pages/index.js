import Image from "next/image";

import axios from "axios";
import { LoginBox } from "@/components/login";
import { CreateUser } from "@/components/createUser";
import { useState } from "react";

export default function Home() {
  const [signUp, setSignUp] = useState(false);
  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <LoginBox setSignUp={signUp} />
      <p className="text-gray-500 text-m cursor-pointer top-0">
        Don't have an account?
      </p>
      <p
        className="text-green-500 text-m cursor-pointer top-0"
        onClick={handleSignUp}
      >
        Create user
      </p>
      <CreateUser displayCheck={!signUp} />
    </div>
  );
}
