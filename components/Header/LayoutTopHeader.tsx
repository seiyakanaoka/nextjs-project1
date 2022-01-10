import { useState } from "react"
import { NextPage } from "next"
import styles from '@/components/Header/LayoutTopHeader.module.scss'
import Modal from '@/components/Modal/Modal'

type Props = {
  title: string;
}

const LayoutTopHeader: NextPage<Props> = (props) => {
  const { title } = props
  const [isShow, setModal] = useState(false)
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{ title }</h1>
      <div className={styles.doubleCircle} onClick={openModal}></div>
      <div className={styles.trigger} id={styles.btn01}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Modal isShow={isShow} closeModal={closeModal} />
    </div>
  )
}

export default LayoutTopHeader