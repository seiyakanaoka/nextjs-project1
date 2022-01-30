import { useState } from "react";
import { qualification } from "@/@types/List/qualification";
import { useCrud } from "@/components/hooks/Crud/index";

export const UseInput = () => {
  const { defaultQualification } = useCrud();

  /** 詳細モーダルの開閉ステート */
  const [isDetail, setDetail] = useState<boolean>(false);

  /** contentモーダルの開閉ステート */
  const [isShow, setModal] = useState<boolean>(false);

  /** 詳細画面の表示ステート */
  const [qual, setQual] = useState<qualification>(defaultQualification);

  /** contentモーダルの開閉 */
  const changeModal = () => setModal(!isShow);

  /** 詳細モーダルを閉じる */
  const closeDetail = () => {
    setDetail(false);
  };

  /** 詳細モーダルを開く */
  const openDetail = (item: qualification) => {
    setQual(item);
    setDetail(true);
  };

  /** 新規作成・編集モーダルを開閉ステート */
  const [isModalNew, setIsModalNew] = useState<boolean>(false);

  /** 新規作成・編集モーダルの開閉 */
  const changeModalNew = () => setIsModalNew(!isModalNew);

  const [isModalUpdate, setIsModalUpdate] = useState<boolean>(false);

  /** 新規作成・編集モーダルの開閉 */
  const changeModalUpdate = () => {
    setIsModalUpdate(!isModalUpdate);
  };

  return {
    qual,
    isShow,
    isDetail,
    isModalNew,
    isModalUpdate,
    closeDetail,
    openDetail,
    changeModal,
    changeModalNew,
    changeModalUpdate,
  };
};
