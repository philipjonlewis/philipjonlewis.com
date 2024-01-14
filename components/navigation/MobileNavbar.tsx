import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import {
  HomeIcon,
  AtSymbolIcon,
  FolderOpenIcon,
  MailOpenIcon,
} from '@heroicons/react/outline'
const MobileNavbar = () => {
  const router = useRouter()
  const { asPath } = useRouter()
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }
  return (
    <div className=' mobile-navbar'>
      <div className='container navbar-proper'>
        {' '}
        <Link href='/'>
          <motion.a
            variants={item}
            className={
              router.pathname == '/'
                ? 'mobile-active-navlink'
                : 'mobile-nav-link'
            }
          >
            <HomeIcon className='mobile-icon' />
            <p>Home</p>
          </motion.a>
        </Link>
        {/* <Link href="/about">
          <motion.a
            variants={item}
            className={
              router.pathname.includes("/about")
                ? "mobile-active-navlink"
                : "mobile-nav-link"
            }
          >
            <AtSymbolIcon className="mobile-icon" />
            <p>About</p>
          </motion.a>
        </Link> */}
        {/* <Link href="/projects">
          <motion.a
            variants={item}
            className={
              router.pathname.includes("/projects")
                ? "mobile-active-navlink"
                : "mobile-nav-link"
            }
          >
            <FolderOpenIcon className="mobile-icon" />
            <p>Projects</p>
          </motion.a>
        </Link> */}
        <Link href='/contact'>
          <motion.a
            variants={item}
            className={
              router.pathname.includes('/contact')
                ? 'mobile-active-navlink'
                : 'mobile-nav-link'
            }
          >
            <MailOpenIcon className='mobile-icon' />
            <p>Contact</p>
          </motion.a>
        </Link>
      </div>
    </div>
  )
}

export default MobileNavbar
