import Image from "next/image";

import axios from "axios";
import { useState } from "react";

const url = "http://localhost:4000/posts/zolo@gmail.com";

export async function getStaticProps() {
  axios.get(url).then((res) => {
    console.log(res.data);
    return res.data;
  });
}

export default function Home() {
  return <div onClick={() => getStaticProps()}></div>;
}
