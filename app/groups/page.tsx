import GroupsContainer from './components/GroupsContainer'
import RolesToGroupContainer from './components/RolesToGroupContainer'

import styles from './page.module.scss'

export default function Page() {
  return (
    <div className={styles.container}>
      <GroupsContainer />
      <RolesToGroupContainer />
    </div>
  )
}
