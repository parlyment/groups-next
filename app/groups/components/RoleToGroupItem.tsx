'use client'

import { Group, Role, RoleToGroup, roleToGroupAPI } from '@/lib/redux/services'

export type RoleToGroupItemProps = {
  group: Group
  role: Role
  roleToGroup?: RoleToGroup
}

export default function RoleToGroupItem({
  group,
  role,
  roleToGroup,
}: RoleToGroupItemProps) {
  const [createLink] = roleToGroupAPI.useCreateRoleToGroupMutation()
  const [deleteLink] = roleToGroupAPI.useDeleteRoleToGroupMutation()
  
  const handleClick = () => {
    if (roleToGroup) {
      deleteLink(roleToGroup)
    } else {
      createLink({ role_id: role.id, group_id: group.id } as RoleToGroup)
    }
  }

  return (
    <div className='container'>
      <input type='checkbox' checked={!!roleToGroup} onChange={handleClick} />
      <p>{role.name}</p>
    </div>
  )
}
