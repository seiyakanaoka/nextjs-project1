import Link from 'next/link'
import { NextPage } from "next";
import styles from '@/components/Modal/Modal.module.scss'

type Props = {
  isShow: boolean
  closeModal: () => void;
}

const Modal: NextPage<Props> = (props) => {
  const { isShow, closeModal } = props
  if (isShow) {
    return (
        <>
          <div className={styles.window}></div>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <Link href="/"><a className={styles.back}>Home</a></Link>
            <div id={styles.close} onClick={closeModal}>Cancel</div>
          </div>
        </>
      )
  } else {
    return null
  }
}

export default Modal