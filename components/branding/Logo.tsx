import { LightningBoltIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { annotate, annotationGroup } from 'rough-notation'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const Logo = () => {
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3 } },
  }

  return (
    <Link href='/'>
      <motion.span
        initial='hidden'
        animate='visible'
        variants={logoVariants}
        className='text-sm font-semibold cursor-pointer '
      >
        Philip Lewis
      </motion.span>
    </Link>
  )
}

export default Logo
