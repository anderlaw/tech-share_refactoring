import styles from './style.module.css'
import MainLayout from '../../components/layout/index'

const _index = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        Hello,world!
      </div>
    </MainLayout>
  )
}

export default _index