import { NextPage } from "next";
import styles from "@/components/partials/ListDetail/detail.module.scss";
import { qualifications } from "@/type/ListDetail/qualification";

type Props = {
  qual: qualifications;
  isDetail: boolean;
  closeDetail: () => void;
};

const Detail: NextPage<Props> = (props) => {
  const { isDetail, closeDetail, qual } = props;
  if (isDetail) {
    return (
      <>
        <div className={styles["detail-page"]}>
          <div className={styles["header"]}>
            <div className={styles["close-btn"]}>
              <button onClick={closeDetail}>閉じる</button>
            </div>
            <div className={styles["detail-header"]}>
              <p className={styles["title"]}>{qual.title}</p>
            </div>
          </div>
          <div className={styles["body"]}>
            <div className={styles["detail-body"]}>
              <section className={styles["content"]}>
                <div className={styles["qual-content"]}>
                  <p className={styles["content"]}>{qual.content}</p>
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
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Detail;
