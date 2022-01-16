import type { NextPage } from "next";
import Link from "next/link";
import styles from "@/components/partials/StartPage/StartPage.module.scss";

const StartPage: NextPage = () => {
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
