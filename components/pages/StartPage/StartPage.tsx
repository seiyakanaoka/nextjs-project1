import type { NextPage } from "next";
import Link from "next/link";
import styles from "@/components/pages/StartPage/StartPage.module.scss";
import { useAuth } from "@/lib/AuthContext";
import { auth } from "@/lib/firebase";

const StartPage: NextPage = () => {
  const { currentUser } = useAuth();
  const logout = () => {
    return auth.signOut();
  };
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
        </div>
      </div>
    </>
  );
};

export default StartPage;
