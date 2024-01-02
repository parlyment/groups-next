'use client'

import { Group, groupAPI } from '@/lib/redux/services'
import React, { useState } from 'react'

export default function CreateGroup() {
  const [name, setName] = useState('')
  const [createGroup] = groupAPI.useCreateGroupMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await createGroup({ name: name } as Group)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type='submit'>Create group</button>
    </form>
  )
}
