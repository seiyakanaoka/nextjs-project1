import Link from "next/link";
import { NextPage } from "next";
import styles from "@/components/partials/Modal/Modal.module.scss";

type Props = {
  changeModal: () => void;
};

const Modal: NextPage<Props> = (props) => {
  const { changeModal } = props;
  return (
    <div className={styles["modal-page"]}>
      <div className={styles["modal"]} onClick={(e) => e.stopPropagation()}>
        <div className={styles["modal-links"]}>
          <div className={styles["back"]}>
            <Link href="/">
              <a id={styles["back-link"]}>Home</a>
            </Link>
          </div>
          <div className={styles["close"]} onClick={changeModal}>
            <button className={styles["cancel-btn"]}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
