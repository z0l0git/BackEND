import Image from "next/image";

import axios from "axios";
import { LoginBox } from "@/components/login";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <LoginBox />
    </div>
  );
}
