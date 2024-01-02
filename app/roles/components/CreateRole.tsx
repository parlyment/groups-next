'use client'

import React, { useState } from 'react'
import { Role, roleAPI } from '@/lib/redux/services'

export default function CreateRole() {
  const [name, setName] = useState('')
  const [createRole] = roleAPI.useCreateRoleMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await createRole({ name: name } as Role)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type='submit'>Create role</button>
    </form>
  )
}
