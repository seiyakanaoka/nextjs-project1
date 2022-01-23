import React, { useEffect } from "react";
import { NextPage } from "next";
import { CSSTransition } from "react-transition-group";
import styles from "@/components/partials/ListDetail/detail.module.scss";
import DetailTrans from "@/assets/styles/Transition/DetailTransition.module.scss";
import { qualification } from "@/type/List/qualification";

type Props = {
  qual: qualification;
  isDetail: boolean;
  closeDetail: () => void;
  deleteQualification: (id: number) => void;
};

const Detail: NextPage<Props> = ({
  closeDetail,
  qual,
  isDetail,
  deleteQualification,
}) => {
  useEffect(() => {
    console.log("Detail");
  });
  return (
    <>
      <CSSTransition
        classNames={DetailTrans}
        in={isDetail}
        timeout={500}
        unmountOnExit
      >
        <div className={styles["detail-page"]}>
          <button onClick={closeDetail} className={styles["close-btn"]}>
            <span className={styles["close"]}></span>
          </button>
          <p className={styles["header"]}>{qual.title}</p>
          <div className={styles["body"]}>
            <div className={styles["detail-body"]}>
              <section className={styles["content"]}>
                <div className={styles["qual-content"]}>
                  <p className={styles["content"]}>{qual.comment}</p>
                </div>
              </section>
              <section className={styles["bool"]}>
                <div className={styles["qual-done"]}>
                  <p className={styles["done"]}>
                    受験状況: {qual.isDone ? "受験済み" : "未受験"}
                  </p>
                </div>
                <div className={styles["qual-pass"]}>
                  <p className={styles["pass"]}>
                    受験結果: {qual.isPass ? "合格" : "不合格"}
                  </p>
                </div>
              </section>
            </div>
          </div>
          <div className={styles["actions"]}>
            <button
              className={`${styles["edit-btn"]} ${styles["-edit"]}`}
              onClick={() => deleteQualification(qual.id)}
            >
              編集
            </button>
            <button
              className={`${styles["delete-btn"]} ${styles["-delete"]}`}
              onClick={() => deleteQualification(qual.id)}
            >
              削除
            </button>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default React.memo(
  Detail,
  (prev, next) => prev.isDetail === next.isDetail
);
