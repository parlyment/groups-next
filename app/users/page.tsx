'use client'

import { useEffect} from 'react'
import { useDispatch, useSelector } from '@/lib/redux'

import { selectUsers } from '@/lib/redux/slices/usersSlice/selectors'
import { fetchUsers, User } from '@/lib/redux/slices/usersSlice/usersSlice'
import { deleteUsersOnServer} from '@/lib/redux/slices/usersSlice/usersSlice'

import styles from '@/app/users/page.module.scss'

export default function Page() {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className={styles.container}>
      {users &&
        users.map((user: User) => (
          <div key={user.id}>{user.name}</div>
        ))}
      <button onClick={() => dispatch(deleteUsersOnServer())}>blow em up</button>
    </div>
  )
}