import { NextPage } from "next";
import SignUp from "@/components/pages/Signup/index";
import styles from "./signup.module.scss";

const Index: NextPage = () => {
  return (
    <>
      <div className={styles["signup-container"]}>
        <SignUp />
      </div>
    </>
  );
};

export default Index;
