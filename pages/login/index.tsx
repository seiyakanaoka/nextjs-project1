import { NextPage } from "next";
import { ChangeEvent, MouseEvent, useState, useEffect } from "react";
import Link from "next/Link";
import { useRouter } from "next/router";
import { auth } from "@/lib/firebase";
import styles from "./index.module.scss";

const Index: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");

  useEffect(
    () => {
      auth.onAuthStateChanged((user) => {
        user && router.push("/list");
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const login = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, passwd);
      router.push("/list");
    } catch (err: unknown) {
      console.log("エラー発生: ", err);
      alert("情報が間違っています。もう一度入力してください");
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>, formKind: string) => {
    if (formKind === "email") {
      setEmail(e.target.value);
    } else {
      setPasswd(e.target.value);
    }
  };

  return (
    <>
      <div className={styles["login-container"]}>
        <div className={styles["container"]}>
          <div className={styles["login-header"]}>
            <p className={styles["login"]}>Login</p>
            <Link href="/signup">
              <a className={styles["signup"]}>SignUp</a>
            </Link>
          </div>
          <div className={styles["actions"]}>
            <div className={styles["input-body"]}>
              <div className={styles["input-email"]}>
                <p className={styles["name"]}>Email</p>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => onChange(e, "email")}
                  className={styles["email"]}
                  placeholder="Email"
                />
              </div>
              <div className={styles["input-password"]}>
                <p className={styles["pass"]}>Password</p>
                <input
                  type="password"
                  value={passwd}
                  onChange={(e) => onChange(e, "passwd")}
                  className={styles["password"]}
                  placeholder="Password"
                />
              </div>
              <button
                type="button"
                className={styles["submit"]}
                onClick={login}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
