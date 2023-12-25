import { Group, groupAPI } from '@/lib/redux/services'

import styles from './groupItem.module.scss'

type GroupItemProps = {
  group: Group
}

export default function GroupItem({ group }: GroupItemProps) {
  const [deleteGroup] = groupAPI.useDeleteGroupMutation()

  const handleDelete = async () => {
    await deleteGroup(group)
  }

  return (
    <div className={styles.container}>
      <p>{group.name}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
