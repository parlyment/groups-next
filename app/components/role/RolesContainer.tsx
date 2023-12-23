import { roleAPI } from '@/lib/redux/services'
import React from 'react'
import RoleItem from './RoleItem'

import styles from './rolesContainer.module.scss'

const RolesContainer = () => {
  const { data: roles } = roleAPI.useFetchAllRolesQuery()
  return (
    <div className={styles.container}>
      {roles && roles.map((role) => <RoleItem key={role.id} role={role} />)}
    </div>
  )
}

export default RolesContainer
