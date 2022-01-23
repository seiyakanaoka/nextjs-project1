import { useState } from "react";
import { qualification, qualificationList } from "@/type/List/qualification";

export const useCrud = () => {
  /** CRUDの初期値 */
  const defaultQualification: qualification = {
    title: "",
    comment: "",
    isDone: false,
    isPass: false,
  };

  /** 資格リストの初期値 */
  const defaultQualificationList: qualificationList = { list: [] };

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
    setIsPass(pass);
  };

  /** 資格名 */
  const [title, setTitle] = useState<string>("");
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  /** 資格コメント（内容） */
  const [comment, setComment] = useState<string>("");
  const changeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const resetForm = () => {
    setTitle("");
    setComment("");
    setIsDone("");
    setIsPass("");
  };

  return {
    defaultQualification,
    defaultQualificationList,
    isDone,
    isPass,
    title,
    comment,
    newQualificationList,
    setNewQualificationList,
    changeDone,
    changePass,
    changeTitle,
    setTitle,
    changeComment,
    resetForm,
  };
};
