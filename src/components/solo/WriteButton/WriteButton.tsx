import Image from "next/image"

import Button from "@/components/common/Button/Button"
import IMG_URL from '../../../../public/write.png'
import styles from './WriteButton.module.css'

const WriteButton = () => {
  return (
    <>
      <Button className={styles.WriteButton} >
        <Image src={IMG_URL} width={20} height={20} alt='' />
      </Button>
    </>
  )
}
export default WriteButton