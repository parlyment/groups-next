import { Group, groupAPI } from '@/lib/redux/services'

import styles from './groupItem.module.scss'
import { useDispatch } from '@/lib/redux'
import { selectedGroupSlice } from '@/lib/redux/slices/selectedGroupSlice'

type GroupItemProps = {
  group: Group
  selected?: boolean
}

export default function GroupItem({ group, selected }: GroupItemProps) {
  const [deleteGroup] = groupAPI.useDeleteGroupMutation()
  const dispatch = useDispatch()

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation()

    dispatch(selectedGroupSlice.actions.update(undefined))
    await deleteGroup(group)
  }

  return (
    <div
      className={`${styles.container} ${selected && styles.selected}`}
      onClick={() => dispatch(selectedGroupSlice.actions.update(group))}
    >
      <p>{group.name}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
