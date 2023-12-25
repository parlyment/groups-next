'use client'

import { roleAPI } from '@/lib/redux/services'
import React from 'react'
import RoleItem from './RoleItem'

import styles from './rolesContainer.module.scss'

export default function RolesContainer() {
  const { data: roles } = roleAPI.useFetchAllRolesQuery()

  return (
    <div className={styles.container}>
      {roles
        ? roles.map((role) => <RoleItem key={role.id} role={role} />)
        : 'No data'}
    </div>
  )
}
