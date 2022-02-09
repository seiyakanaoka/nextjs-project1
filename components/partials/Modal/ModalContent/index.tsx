import { FC, useEffect, memo } from "react";
import { useModal } from "@/components/hooks/Modal/useModal";
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

const ModalContent: FC<Props> = ({ isShow, changeModal, addQualification }) => {
  useEffect(() => {
    console.log("ModalContent");
  });

  const { isFormModal, changeFormModal } = useModal();

  return (
    <CSSTransition
      classNames={ModalTrans}
      in={isShow}
      timeout={500}
      unmountOnExit
    >
      <div className={styles["overlay"]}>
        <ModalNew
          isModalNew={isFormModal}
          closeModalContent={changeModal}
          closeModalNew={changeFormModal}
          addQualification={addQualification}
        />
        <div className={styles["modal-page"]}>
          <div className={styles["modal"]} onClick={(e) => e.stopPropagation()}>
            <div className={styles["modal-links"]}>
              <div className={styles["new"]} onClick={changeFormModal}>
                <button className={styles["new-btn"]}>新規登録</button>
              </div>
              <div className={styles["close"]} onClick={changeModal}>
                <button className={styles["cancel-btn"]}>戻る</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default memo(
  ModalContent,
  (prev, next) =>
    prev.addQualification === next.addQualification ||
    prev.isShow === next.isShow
);
