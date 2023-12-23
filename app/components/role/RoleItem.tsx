import { Role } from '@/lib/redux/services'
import React from 'react'

import styles from './roleItem.module.scss'

type RoleItemProps = {
    role: Role
}

export default function RoleItem ({role}: RoleItemProps) {
  return (
    <div>{role.name}</div>
  )
}
