import { FC, MouseEvent, useEffect, memo } from "react";
import { auth } from "@/lib/firebase";
import styles from "./LayoutTopHeader.module.scss";

type Props = {
  title: string;
  openModal: () => void;
};

const LayoutTopHeader: FC<Props> = ({ title, openModal }) => {
  useEffect(() => {
    console.log("Header");
  });

  const { currentUser } = auth;

  const logout = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return auth.signOut();
  };

  return (
    <>
      <div className={styles["header-page"]}>
        <div className={styles["title"]}>
          <p className={styles["header-title"]}>{title}</p>
        </div>
        <div className={styles["content"]}>
          <div className={styles["user-info"]}>
            <span className={styles["coming"]}>お帰りなさい</span>
            <span className={styles["user"]}>
              {currentUser && currentUser.email}
            </span>
          </div>
          <button type="button" className={styles["action"]} onClick={logout}>
            Logout
          </button>
          <button className={styles["modal-btn"]} onClick={openModal}>
            Content
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(LayoutTopHeader, (prev, next) => prev.title === next.title);
