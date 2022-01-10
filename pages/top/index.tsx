import { NextPage } from "next"
import LayoutTopHeader from "@/components/Header/LayoutTopHeader"
import styles from "pages/top/index.module.scss"

const Top: NextPage = () => {
  return (
    <>
      <LayoutTopHeader title={'一覧'} />
      <div className={styles.block}>
        <div>
          <h3>AWS デベロッパーアソシエイト</h3>
        </div>
        <div>
          <h3>AWS ソリューションアーキテクト</h3>
        </div>
        <div>
          <h3>AWS アドミニストレーター</h3>
        </div>
      </div>
      <div className={styles.block}>
        <div>
          <h3>基本情報技術者</h3>
        </div>
      </div>
    </>
  )
};

export default Top;