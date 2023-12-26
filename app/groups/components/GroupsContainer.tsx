'use client'

import { groupAPI } from '@/lib/redux/services'
import React from 'react'
import GroupItem from './GroupItem'

import styles from './groupsContainer.module.scss'
import { useSelector } from '@/lib/redux'
import { selectSelectedGroup } from '@/lib/redux/slices/selectedGroupSlice'
import CreateGroup from './CreateGroup'

export default function GroupsContainer() {
  const selectedGroup = useSelector(selectSelectedGroup)
  const { data: groups } = groupAPI.useFetchAllGroupsQuery()

  return (
    <div className={styles.container}>
      {groups
        ? groups.map((group) => (
            <GroupItem
              key={group.id}
              selected={group === selectedGroup}
              group={group}
            />
          ))
        : 'No roles'}
        <CreateGroup />
    </div>
  )
}
