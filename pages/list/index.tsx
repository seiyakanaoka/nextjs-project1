import React, { useEffect } from "react";
import { NextPage } from "next";
import LayoutTopHeader from "@/components/partials/Header/LayoutTopHeader";
import Detail from "@/components/partials/ListDetail/detail";
import ModalContent from "@/components/partials/Modal/ModalContent";
import ListBody from "@/components/pages/List/listbody";
import NoContent from "@/components/partials/NoContent/nocontent";
import { CSSTransition } from "react-transition-group";
import styles from "pages/list/index.module.scss";
import { qualificationList } from "@/type/List/qualification";
import { UseInput } from "@/components/hooks/List/list";
import { useCrud } from "@/components/hooks/Crud/index";
import ModalTrans from "@/assets/styles/Transition/ModalTransition.module.scss";

const List: NextPage = () => {
  useEffect(() => {
    console.log("List");
  });
  const {
    id,
    qual,
    isShow,
    isDetail,
    addId,
    closeDetail,
    openDetail,
    changeModal,
  } = UseInput();

  const { resetForm, setNewQualificationList, newQualificationList } =
    useCrud();

  /** 資格の新規登録 */
  const addQualification = (
    title: string,
    comment: string,
    done: string,
    pass: string
  ) => {
    const newQualification = {
      id: addId(),
      title: title,
      comment: comment,
      isDone: done == "ok",
      isPass: pass == "ok",
    };
    const newList = [...newQualificationList.list, newQualification];
    setNewQualificationList({ ...newQualificationList, list: newList });
    resetForm();
  };

  /** 資格の削除 */
  const deleteQualification = (id: number) => {
    const newList = newQualificationList.list.filter((item) => item.id !== id);
    setNewQualificationList({ ...newQualificationList, list: newList });
    closeDetail();
  };

  const qualificationListApiResponse: qualificationList = {
    list: [
      {
        id: 1,
        title: "AWS デベロッパーアソシエイト",
        comment: "AWSのインフラ開発専門の資格",
        isDone: false,
        isPass: false,
      },
      {
        id: 2,
        title: "AWS ソリューションアーキテクト",
        comment: "AWSのインフラ構成専門の資格",
        isDone: true,
        isPass: true,
      },
      {
        id: 3,
        title: "AWS アドミニストレーター",
        comment: "AWSのインフラ運用専門の資格",
        isDone: false,
        isPass: false,
      },
      {
        id: 4,
        title: "基本情報技術者",
        comment: "ITの基礎に関する資格",
        isDone: false,
        isPass: false,
      },
      {
        id: 5,
        title: "AWS デベロッパーアソシエイト",
        comment: "AWSのインフラ開発専門の資格",
        isDone: false,
        isPass: false,
      },
    ],
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
          {newQualificationList.list.length ? (
            <ListBody
              openDetail={openDetail}
              apiResponse={newQualificationList}
            />
          ) : (
            <NoContent />
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(List);
