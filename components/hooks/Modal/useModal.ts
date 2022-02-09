import { useState } from "react";

export const useModal = () => {

  /** モーダルの開閉ステート */
  const [isShow, setModal] = useState<boolean>(false);

  /** モーダルの開閉 */
  const changeModal = () => setModal(!isShow);

  /** フォームモーダルの開閉ステート */
  const [isFormModal, setIsFormModal] = useState<boolean>(false);

  /** フォームモーダルの開閉 */
  const changeFormModal = () => setIsFormModal(!isFormModal);

  return {
    isShow,
    isFormModal,
    changeModal,
    changeFormModal,
  };
};
