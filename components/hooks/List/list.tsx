import { useState } from "react";
import { qualification } from "@/type/List/qualification";
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

  const [id, setId] = useState(0);
  const addId = (): number => {
    setId(id + 1);
    return id;
  };

  return {
    id,
    qual,
    isShow,
    isDetail,
    isModalNew,
    addId,
    closeDetail,
    openDetail,
    changeModal,
    changeModalNew,
  };
};
