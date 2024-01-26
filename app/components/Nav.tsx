'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import styles from '../styles/layout.module.css'

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/users' ? styles.active : ''
        }`}
        href="/users"
      >
        Users
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/roles' ? styles.active : ''
        }`}
        href="/roles"
      >
        Roles
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/groups' ? styles.active : ''
        }`}
        href="/groups"
      >
        Groups
      </Link>
    </nav>
  )
}
