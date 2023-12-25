import RolesContainer from '../components/role/RolesContainer'
import CreateRole from './components/CreateRole'

import styles from './page.module.scss'

export default function Page() {
  return (
    <div className={styles.container}>
      <CreateRole />
      <RolesContainer />
    </div>
  )
}
