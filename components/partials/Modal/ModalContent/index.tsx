import React, { useEffect } from "react";
import Link from "next/link";
import { NextPage } from "next";
import { UseInput } from "@/components/hooks/List/list";
import ModalNew from "@/components/partials/Modal/ModalNew/index";
import { CSSTransition } from "react-transition-group";
import styles from "@/components/partials/Modal/ModalContent/index.module.scss";
import ModalTrans from "@/assets/styles/Transition/ModalTransition.module.scss";

type Props = {
  isShow: boolean;
  changeModal: () => void;
  addQualification: (
    title: string,
    comment: string,
    done: string,
    pass: string
  ) => void;
};

const ModalContent: NextPage<Props> = ({
  isShow,
  changeModal,
  addQualification,
}) => {
  useEffect(() => {
    console.log("ModalContent");
  });

  const { isModalNew, changeModalNew } = UseInput();

  return (
    <CSSTransition
      classNames={ModalTrans}
      in={isShow}
      timeout={500}
      unmountOnExit
    >
      <div className={styles["overlay"]}>
        <ModalNew
          isModalNew={isModalNew}
          closeModalContent={changeModal}
          closeModalNew={changeModalNew}
          addQualification={addQualification}
        />
        <div className={styles["modal-page"]}>
          <div className={styles["modal"]} onClick={(e) => e.stopPropagation()}>
            <div className={styles["modal-links"]}>
              <div className={styles["back"]}>
                <Link href="/">
                  <a id={styles["back-link"]}>Home</a>
                </Link>
              </div>
              <div className={styles["new"]} onClick={changeModalNew}>
                <button className={styles["new-btn"]}>New</button>
              </div>
              <div className={styles["close"]} onClick={changeModal}>
                <button className={styles["cancel-btn"]}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default React.memo(
  ModalContent,
  (prev, next) =>
    prev.addQualification === next.addQualification ||
    prev.isShow === next.isShow
);
