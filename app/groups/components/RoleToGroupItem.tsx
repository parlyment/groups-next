'use client'

import { Group, Role } from '@/lib/redux/services'

export type RoleToGroupItemProps = {
    group: Group
    role: Role,
    isSelected?: boolean
}

export default function RoleToGroupItem(props: RoleToGroupItemProps) {


  return <div className='container'>
    <input />
    <p>{props.role.name}</p>
  </div>
}
