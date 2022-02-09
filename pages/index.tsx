import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { auth } from "@/lib/firebase";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(
    () => {
      auth.onAuthStateChanged((user) => {
        user && router.push("/list");
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <>
      <div>index</div>
    </>
  );
};

export default Home;
