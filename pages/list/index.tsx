import { NextPage } from "next";
import { useState } from "react";
import LayoutTopHeader from "@/components/partials/Header/LayoutTopHeader";
import Detail from "@/components/partials/ListDetail/detail";
import Modal from "@/components/partials/Modal/Modal";
import { CSSTransition } from "react-transition-group";
import styles from "pages/list/index.module.scss";
import { qualificationList } from "@/type/List/qualificationList";
import { UseInput } from "@/components/hooks/List/list";
import trans from "pages/list/transition.module.scss";

const List: NextPage = () => {
  const { qual, isShow, isDetail, closeDetail, openDetail, changeModal } =
    UseInput();

  const [is, setIs] = useState(false);
  console.log(is);

  const qualificationListApiResponse: qualificationList = {
    list: [
      {
        id: 1,
        title: "AWS デベロッパーアソシエイト",
        content: "AWSのインフラ開発専門の資格",
        isDone: false,
        isPass: false,
      },
      {
        id: 2,
        title: "AWS ソリューションアーキテクト",
        content: "AWSのインフラ構成専門の資格",
        isDone: true,
        isPass: true,
      },
      {
        id: 3,
        title: "AWS アドミニストレーター",
        content: "AWSのインフラ運用専門の資格",
        isDone: false,
        isPass: false,
      },
      {
        id: 4,
        title: "基本情報技術者",
        content: "ITの基礎に関する資格",
        isDone: false,
        isPass: false,
      },
      {
        id: 1,
        title: "AWS デベロッパーアソシエイト",
        content: "AWSのインフラ開発専門の資格",
        isDone: false,
        isPass: false,
      },
    ],
  };

  return (
    <>
      <CSSTransition classNames={trans} in={isShow} timeout={200} unmountOnExit>
        <div className={styles["overlay"]}>
          <Modal changeModal={changeModal} />
        </div>
      </CSSTransition>

      <CSSTransition
        classNames={trans}
        in={isDetail}
        timeout={800}
        unmountOnExit
      >
        <div className={styles["overlay"]}>
          <Detail qual={qual} isDetail={isDetail} closeDetail={closeDetail} />
        </div>
      </CSSTransition>
      <div className={`${styles["list-page"]}`}>
        <div className={styles["header"]}>
          <div className={styles["list-header"]}>
            <LayoutTopHeader
              title={"List"}
              isModal={isShow}
              openModal={changeModal}
            />
          </div>
        </div>
        <div className={styles["body"]}>
          <div className={styles["list-body"]}>
            <section className={styles["block"]}>
              <div className={styles["block-list"]}>
                {qualificationListApiResponse.list.map((item, i) => (
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
                      <p className={styles["content"]}>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
