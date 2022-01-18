import { useState } from "react";
import { qualifications } from "@/type/ListDetail/qualification";

export const UseInput = () => {
  const [isDetail, setDetail] = useState<boolean>(false);
  const [isShow, setModal] = useState<boolean>(false);
  const [qual, setQual] = useState<qualifications>({
    // TODO: kanaoka とりあえずの初期値
    id: 0,
    title: "",
    content: "",
    isDone: false,
    isPass: false,
  });

  const changeModal = () => setModal(!isShow);
  const closeDetail = () => {
    setDetail(false);
  };
  const openDetail = (item: qualifications) => {
    setQual(item);
    setDetail(true);
  };

  return {
    qual,
    isShow,
    isDetail,
    closeDetail,
    openDetail,
    changeModal,
  };
};
