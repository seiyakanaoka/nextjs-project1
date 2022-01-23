import React, { useEffect } from "react";
import { NextPage } from "next";
import { useCrud } from "@/components/hooks/Crud/index";
import { CSSTransition } from "react-transition-group";
import styles from "./index.module.scss";
import ModalTrans from "@/assets/styles/Transition/ModalTransition.module.scss";

type Props = {
  isModalNew: boolean;
  closeModalNew: () => void;
  addQualification: (
    title: string,
    comment: string,
    done: string,
    pass: string
  ) => void;
  closeModalContent: () => void;
};

const ModalNew: NextPage<Props> = ({
  isModalNew,
  closeModalNew,
  addQualification,
  closeModalContent,
}) => {
  useEffect(() => {
    console.log("ModalNew");
  });
  const {
    isDone,
    isPass,
    title,
    comment,
    changeDone,
    changePass,
    changeTitle,
    changeComment,
    resetForm,
  } = useCrud();

  /**
   * 新規資格情報をリストに追加
   * @param obj qualification
   * @returns void
   */
  const insertQualification = () => {
    addQualification(title, comment, isDone, isPass);
    resetForm();
    closeModalNew();
    closeModalContent();
  };

  return (
    <CSSTransition
      classNames={ModalTrans}
      in={isModalNew}
      timeout={500}
      unmountOnExit
    >
      <div className={styles["overlay"]}>
        <div className={styles["modal-page"]}>
          <div className={styles["modal"]}>
            <div className={styles["header"]}>
              <p className={styles["header-title"]}>新規作成</p>
              <button onClick={closeModalNew} className={styles["close-btn"]}>
                <span className={styles["close"]}></span>
              </button>
            </div>
            <div className={styles["form"]}>
              <div className={styles["modal-form"]}>
                <input
                  value={title}
                  type="text"
                  name="title"
                  className={styles["title"]}
                  placeholder="Name"
                  onChange={(e) => changeTitle(e)}
                />
                <div className={styles["border"]}></div>
                <input
                  value={comment}
                  type="textarea"
                  name="comment"
                  className={styles["comment"]}
                  placeholder="Comment"
                  onChange={(e) => changeComment(e)}
                />
                <span className={styles["border"]}></span>
                <div className={styles["done-form"]}>
                  <p className={styles["title"]}>受験状況</p>
                  <div className={styles["done-content"]}>
                    <label
                      className={`${styles["select"]} ${styles["-ok"]} ${
                        isDone === "ok" && styles["-okactive"]
                      }`}
                      onClick={() => changeDone("ok")}
                    >
                      受験済
                    </label>
                    <input
                      type="radio"
                      name="isDone"
                      className={styles["done"]}
                    />
                    <label
                      className={`${styles["select"]} ${styles["-no"]} ${
                        (isDone === "" || isDone === "no") &&
                        styles["-noactive"]
                      }`}
                      onClick={() => changeDone("no")}
                    >
                      未受験
                    </label>
                    <input
                      type="radio"
                      name="isDone"
                      className={styles["done"]}
                      checked={isDone === "no"}
                    />
                  </div>
                </div>
                <div className={styles["pass-form"]}>
                  <p className={styles["title"]}>受験結果</p>
                  <div className={styles["pass-content"]}>
                    <label
                      className={`${styles["select"]} ${styles["-ok"]} ${
                        isPass === "ok" && styles["-okactive"]
                      }`}
                    >
                      <input
                        type="radio"
                        name="isPass"
                        className={styles["pass"]}
                        onClick={() => changePass("ok")}
                      />
                      合格
                    </label>
                    <label
                      className={`${styles["select"]} ${styles["-out"]} ${
                        (isPass === "" || isPass === "out") &&
                        styles["-outactive"]
                      }`}
                    >
                      <input
                        type="radio"
                        name="isPass"
                        className={styles["pass"]}
                        onClick={() => changePass("out")}
                      />
                      不合格
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["action"]}>
              <button
                className={`${styles["submit-btn"]} ${
                  title !== "" && comment !== "" && styles["-active"]
                }`}
                disabled={title === "" || comment === ""}
                onClick={insertQualification}
              >
                追加
              </button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ModalNew;
