import React, { useEffect } from "react";
import { NextPage } from "next";
import UpdateModal from "@/components/partials/Modal/ModalUpdate/index";
import { useModal } from "@/components/hooks/Modal/useModal";
import { useCrud } from "@/components/hooks/Crud/index";
import { CSSTransition } from "react-transition-group";
import styles from "./detail.module.scss";
import DetailTrans from "@/assets/styles/Transition/DetailTransition.module.scss";
import { qualification } from "@/@types/List/qualification";

type Props = {
  qual: qualification;
  isDetail: boolean;
  closeDetail: () => void;
  updateQualification: (
    id: number,
    title: string,
    comment: string,
    done: string,
    pass: string
  ) => void;
  deleteQualification: (id: number) => void;
};

const Detail: NextPage<Props> = ({
  closeDetail,
  qual,
  isDetail,
  updateQualification,
  deleteQualification,
}) => {
  useEffect(() => {
    console.log("Detail");
    setForm(qual);
  });
  const { setForm } = useCrud();

  const { isShow, changeModal } = useModal();

  return (
    <>
      <CSSTransition
        classNames={DetailTrans}
        in={isDetail}
        timeout={500}
        unmountOnExit
      >
        <div className={styles["detail-page"]}>
          <UpdateModal
            qual={qual}
            isModalUpdate={isShow}
            closeModalUpdate={changeModal}
            updateQualification={updateQualification}
            closeDetail={closeDetail}
          />
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
                    ????????????: {qual.isDone ? "????????????" : "?????????"}
                  </p>
                </div>
                <div className={styles["qual-pass"]}>
                  <p className={styles["pass"]}>
                    ????????????: {qual.isPass ? "??????" : "?????????"}
                  </p>
                </div>
              </section>
            </div>
          </div>
          <div className={styles["actions"]}>
            <button
              className={`${styles["edit-btn"]} ${styles["-edit"]}`}
              onClick={changeModal}
            >
              ??????
            </button>
            <button
              className={`${styles["delete-btn"]} ${styles["-delete"]}`}
              onClick={() => deleteQualification(qual.id)}
            >
              ??????
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
