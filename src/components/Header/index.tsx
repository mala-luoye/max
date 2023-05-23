import type { FC } from "react"
import { GithubOutlined } from "@ant-design/icons"
import styles from "./styles.module.scss"

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles["left-box"]}>
        <img src={require("@/assets/img/logo.png")} alt="logo" />
        <span>MAX Geek Toolkit</span>
      </div>
      <div className={styles["right-box"]}>
        <a href="https://github.com/mala-luoye/max">
          <GithubOutlined style={{ fontSize: "28px" }} />
        </a>
      </div>
    </div>
  )
}

export default Header
