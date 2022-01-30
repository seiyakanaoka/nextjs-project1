import type { NextPage } from "next";
import Link from "next/link";
import styles from "@/components/pages/StartPage/StartPage.module.scss";
import { useAuth } from "@/lib/AuthContext";

const StartPage: NextPage = () => {
  const { currentUser, login, logout } = useAuth();
  return (
    <>
      <div className={styles["start-page"]}>
        <div className={styles["header"]}>
          <div className={styles["page-header"]}>
            <p className={styles["title"]}>Welcome to Project!</p>
          </div>
        </div>
        <div className={styles["body"]}>
          <div className={styles["start-content"]}>
            <p className={styles["content"]}>
              start project, please press this Link
            </p>
          </div>
          <div className={styles["top-link"]}>
            <p className={styles["start"]}>
              <Link href="/list">
                <a>start</a>
              </Link>
            </p>
          </div>
          <div>
            {!currentUser && <button onClick={login}>ログイン</button>}
            {currentUser && (
              <div>
                <p>{currentUser.email} でログイン</p>
                <button onClick={logout}>ログアウト</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StartPage;
