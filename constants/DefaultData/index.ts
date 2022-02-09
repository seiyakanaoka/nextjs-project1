import { qualification, qualificationList } from "@/@types/List/qualification";

export const defaultData = () => {
  /** CRUDの初期値 */
  const defaultQualification: qualification = {
    id: 0,
    title: "",
    comment: "",
    isDone: false,
    isPass: false,
  };

  /** 資格リストの初期値 */
  const defaultQualificationList: qualificationList = {
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

  return { defaultQualification, defaultQualificationList }
};
