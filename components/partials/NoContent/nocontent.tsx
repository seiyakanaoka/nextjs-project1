import React, { useEffect } from "react";
import { NextPage } from "next";
import styles from "./nocontent.module.scss";

const NoContent: NextPage = () => {
  useEffect(() => {
    console.log("NoContent");
  });
  return (
    <div className={styles["no-content"]}>
      <p className={styles["warn"]}>※資格の登録をしてください</p>
    </div>
  );
};

export default React.memo(NoContent);
