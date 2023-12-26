'use client'

import { useSelector } from '@/lib/redux'
import { roleAPI } from '@/lib/redux/services'
import { selectSelectedGroup } from '@/lib/redux/slices/selectedGroupSlice'

export default function RolesToGroupContainer() {
  const selectedGroup = useSelector(selectSelectedGroup)
  const { data: allRoles } = roleAPI.useFetchAllRolesQuery()

  return <div className='container'>Some cool text</div>
}
