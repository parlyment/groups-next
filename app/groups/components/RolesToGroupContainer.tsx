'use client'

import { Group, roleAPI, roleToGroupAPI } from '@/lib/redux/services'
import RoleToGroupItem from './RoleToGroupItem'

export type RolesToGroupContainerProps = {
  selectedGroup: Group
}

export default function RolesToGroupContainer({
  selectedGroup,
}: RolesToGroupContainerProps) {
  const { data: allRoles } = roleAPI.useFetchAllRolesQuery()
  const { data: rolesForGroup } = roleToGroupAPI.useFetchAllRolesToGroupQuery(
    selectedGroup.id
  )

  return (
    <div className='container'>
      {allRoles &&
        allRoles.map((item) => (
          <RoleToGroupItem
            key={item.id}
            group={selectedGroup}
            role={item}
            roleToGroup={rolesForGroup?.find((r) => r.role_id === item.id)}
          />
        ))}
    </div>
  )
}
