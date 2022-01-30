import React, { useEffect } from "react";
import { NextPage } from "next";
import LayoutTopHeader from "@/components/partials/Header/LayoutTopHeader";
import Detail from "@/components/partials/ListDetail/detail";
import ModalContent from "@/components/partials/Modal/ModalContent";
import ListBody from "@/components/pages/List/listbody";
import NoContent from "@/components/partials/NoContent/nocontent";
import { CSSTransition } from "react-transition-group";
import styles from "pages/list/index.module.scss";
import { UseInput } from "@/components/hooks/List/list";
import { useCrud } from "@/components/hooks/Crud/index";
import ModalTrans from "@/assets/styles/Transition/ModalTransition.module.scss";

const List: NextPage = () => {
  useEffect(() => {
    console.log("List");
  });
  const { qual, isShow, isDetail, closeDetail, openDetail, changeModal } =
    UseInput();

  const {
    setNewQualificationList,
    addQualification,
    updateQualification,
    newQualificationList,
  } = useCrud();

  /** 資格の削除 */
  const deleteQualification = (id: number) => {
    const newList = newQualificationList.list.filter((item) => item.id !== id);
    setNewQualificationList({ ...newQualificationList, list: newList });
    closeDetail();
  };

  return (
    <>
      <ModalContent
        isShow={isShow}
        changeModal={changeModal}
        addQualification={addQualification}
      />
      <Detail
        qual={qual}
        isDetail={isDetail}
        closeDetail={closeDetail}
        updateQualification={updateQualification}
        deleteQualification={deleteQualification}
      />
      <CSSTransition
        classNames={ModalTrans}
        in={isDetail}
        timeout={500}
        unmountOnExit
      >
        <div className={styles["overlay"]}></div>
      </CSSTransition>
      <div className={`${styles["list-page"]}`}>
        <div className={styles["header"]}>
          <LayoutTopHeader title={"List"} openModal={changeModal} />
        </div>
        <div className={styles["body"]}>
          {newQualificationList && newQualificationList.list.length ? (
            <ListBody
              openDetail={openDetail}
              apiResponse={newQualificationList}
            />
          ) : (
            <div>
              <NoContent />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(List);
