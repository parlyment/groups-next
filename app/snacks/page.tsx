'use client'

import { useGetSnacksQuery, useAddSnackMutation, useDeleteSnackMutation } from '@/lib/redux/services'
import { useState } from 'react'

import styles from './snacks.module.scss'
export default function Page() {
  const {data = [], isLoading} = useGetSnacksQuery('10')
  const [addItem, {isError}] = useAddSnackMutation()
  const [deleteItem] = useDeleteSnackMutation()
  const [snackName, setSnackName] = useState('')
  const handleAddSnack = async () => {
    if(snackName) {
      await addItem({id: (data[data.length - 1].id + 1), name: snackName})
      setSnackName('')
    }
  }
  const handleDeleteSnack = async (id: number) => await deleteItem(id).unwrap()

  if(isLoading) return `Loading...`

  return (
    <div className={styles.container}>
      <input type='text' value={snackName} onChange={(e) => setSnackName(e.target.value)} />
      <button onClick={handleAddSnack}>Add snack</button>
    <ul>
      {data.map(e => {
        return (
          <div className={styles.snack}>
            <li key={e.id}>{e.name}</li>
            <button onClick={() => handleDeleteSnack(e.id)}>X</button>
          </div>
        )
      })}
    </ul>
    </div>
  )
}