import React, { useEffect } from "react";
import { NextPage } from "next";
import styles from "@/components/partials/Header/LayoutTopHeader.module.scss";

type Props = {
  title: string;
  openModal: () => void;
};

const LayoutTopHeader: NextPage<Props> = ({ title, openModal }) => {
  useEffect(() => {
    console.log("Header");
  });

  return (
    <>
      <div className={styles["header-page"]}>
        <div className={styles["title"]}>
          <p className={styles["header-title"]}>{title}</p>
        </div>
        <div className={styles["modal"]}>
          <button className={styles["modal-btn"]} onClick={openModal}>
            Content
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(
  LayoutTopHeader,
  (prev, next) => prev.title === next.title
);
