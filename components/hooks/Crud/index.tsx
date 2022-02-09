import { useState } from "react";
import { defaultData } from "constants/DefaultData";
import { qualification, qualificationList } from "@/@types/List/qualification";

export const useCrud = () => {
  const { defaultQualification, defaultQualificationList } = defaultData();

  /** IDの自動振分 */
  const [id, setId] = useState<number>(6);
  const addId = (): number => {
    setId(id + 1);
    return id;
  };

  /** 資格情報リストのステート */
  const [newQualificationList, setNewQualificationList] =
    useState<qualificationList>(defaultQualificationList);

  /** 受験・未受験 */
  const [isDone, setIsDone] = useState<string>("");
  const changeDone = (done: string) => {
    setIsDone(done);
  };

  /** 合格・不合格 */
  const [isPass, setIsPass] = useState<string>("");
  const changePass = (pass: string) => {
    console.log(isPass);
    setIsPass(pass);
  };

  /** 資格名 */
  const [title, setTitle] = useState<string>("");
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTitle(e.target.value);
    console.log("title", title);
  };

  /** 資格コメント（内容） */
  const [comment, setComment] = useState<string>("");
  const changeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  /** テキストフォームを空にする */
  const resetForm = () => {
    setTitle("");
    setComment("");
    setIsDone("");
    setIsPass("");
  };

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

  /** 資格の更新 */
  const updateQualification = (
    id: number,
    title: string,
    comment: string,
    done: string,
    pass: string
  ) => {
    console.log("id: ", id);
    const newItem = {
      id: id,
      title: title,
      comment: comment,
      isDone: done === "ok",
      isPass: pass === "ok",
    };
    const newList = newQualificationList.list.map((item) => {
      if (item.id === id) {
        return newItem;
      }
      return item;
    });
    setNewQualificationList({ ...newQualificationList, list: newList });
    resetForm();
  };

  /** 編集モーダル描画時、フォームに値を表示する */
  const setForm = (qual: qualification) => {
    setTitle(qual.title);
    setComment(qual.comment);
    setIsDone(qual.isDone ? "ok" : "");
    setIsPass(qual.isPass ? "ok" : "");
  };

  return {
    defaultQualification,
    defaultQualificationList,
    isDone,
    isPass,
    title,
    comment,
    newQualificationList,
    addQualification,
    updateQualification,
    setNewQualificationList,
    changeDone,
    changePass,
    changeTitle,
    setTitle,
    changeComment,
    resetForm,
    setForm,
  };
};
