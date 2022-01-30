import { NextPage } from "next";
import styles from "./index.module.scss";

const SignUp: NextPage = () => {
  return (
    <div className={styles["signup-container"]}>
      <p className={styles["title"]}>Login</p>
      <div className={styles["actions"]}>
        <div className={styles["input-body"]}>
          <div className={styles["input-username"]}>
            <p className={styles["name"]}>UserName</p>
            <input
              type="text"
              name="username"
              className={styles["username"]}
              placeholder="Username"
            />
          </div>
          <div className={styles["input-password"]}>
            <p className={styles["pass"]}>Password</p>
            <input
              type="password"
              name="password"
              className={styles["password"]}
              placeholder="password"
            />
          </div>
          <input className={styles["submit"]} type="submit" value="Login" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
