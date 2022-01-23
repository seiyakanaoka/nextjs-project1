import React, { useEffect } from "react";
import { NextPage } from "next";
import styles from "./listbody.module.scss";
import { qualification, qualificationList } from "@/type/List/qualification";

type Props = {
  apiResponse: qualificationList;
  openDetail: (item: qualification) => void;
};

const ListBody: NextPage<Props> = ({ apiResponse, openDetail }) => {
  useEffect(() => {
    console.log("ListBody");
  });

  return (
    <div className={styles["list-body"]}>
      <div className={styles["block-list"]}>
        {apiResponse.list.map((item, i) => (
          <div className={styles["blocks"]} key={i}>
            <div
              className={`${styles["qualification-content"]} ${
                !item.isDone
                  ? styles["-undone"]
                  : item.isPass
                  ? styles["-pass"]
                  : styles["-failure"]
              }`}
              onClick={() => openDetail(item)}
            >
              <p className={styles["title"]}>{item.title}</p>
              <p className={styles["content"]}>{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(
  ListBody,
  (prev, next) => prev.apiResponse === next.apiResponse
);
