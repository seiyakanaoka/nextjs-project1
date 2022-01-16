import { useState } from "react";
import { NextPage } from "next";
import styles from "@/components/partials/Header/LayoutTopHeader.module.scss";

type Props = {
  title: string;
  isModal: boolean;
  openModal: () => void;
};

const LayoutTopHeader: NextPage<Props> = (props) => {
  const { title, isModal, openModal } = props;

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

export default LayoutTopHeader;
