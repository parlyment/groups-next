'use client'

import { groupAPI } from '@/lib/redux/services'
import React from 'react'
import GroupItem from './GroupItem'

import styles from './groupsContainer.module.scss'

export default function GroupsContainer() {
  const { data: groups } = groupAPI.useFetchAllGroupsQuery()
  return (
    <div className={styles.container}>
      {groups
        ? groups.map((group) => <GroupItem key={group.id} group={group} />)
        : 'No roles'}
    </div>
  )
}
