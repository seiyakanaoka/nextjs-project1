import { useState } from "react";
import { qualification } from "@/@types/List/qualification";
import { defaultData } from "constants/DefaultData";
import { useCrud } from "@/components/hooks/Crud/index";

export const useListDetail = () => {
  const { defaultQualification } = defaultData();
  /** 詳細モーダルの開閉ステート */
  const [isDetail, setDetail] = useState<boolean>(false);

  /** 詳細モーダルを閉じる */
  const closeDetail = () => {
    setDetail(false);
  };

  /** 詳細画面の表示ステート */
  const [qual, setQual] = useState<qualification>(defaultQualification);

  /** 詳細モーダルを開く */
  const openDetail = (item: qualification) => {
    setQual(item);
    setDetail(true);
  };

  return { qual, isDetail, openDetail, closeDetail }
}