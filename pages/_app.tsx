import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { auth } from "@/lib/firebase";
import AuthProvider from "@/lib/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(
    () => {
      auth.onAuthStateChanged((user) => {
        !user && router.push("/login");
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
