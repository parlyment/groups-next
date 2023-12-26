'use client'

import { useSelector } from '@/lib/redux'
import GroupsContainer from './components/GroupsContainer'
import RolesToGroupContainer from './components/RolesToGroupContainer'

import styles from './page.module.scss'
import { selectSelectedGroup } from '@/lib/redux/slices/selectedGroupSlice'

export default function Page() {
  const selectedGroup = useSelector(selectSelectedGroup)

  return (
    <div className={styles.container}>
      <GroupsContainer />
      {selectedGroup ? (
        <RolesToGroupContainer selectedGroup={selectedGroup} />
      ) : (
        'Select a group'
      )}
    </div>
  )
}
