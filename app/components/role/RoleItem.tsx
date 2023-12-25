import { Role, roleAPI } from '@/lib/redux/services'
import React from 'react'

import styles from './roleItem.module.scss'

type RoleItemProps = {
  role: Role
}

export default function RoleItem({ role }: RoleItemProps) {
  const [deleteRole] = roleAPI.useDeleteRoleMutation()

  const handleDelete = async () => {
    await deleteRole(role)
  }

  return (
    <div className={styles.container}>
      <p>{role.name}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
