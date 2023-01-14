import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/layouts/Layout';
import { ProjectNavbar } from '../components/navigation/ProjectNavbar';
import '../styles/styles.scss';

function MyApp({ Component, pageProps, router }: AppProps) {
  const { pathname } = useRouter();
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };
  // console.log(pathname);
  return (
    <Layout>
      {pathname.includes('/projects') && <ProjectNavbar />}
      <AnimatePresence mode={'wait'} initial={false}>
        {/* <motion.main
          key={router.route}
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }}
        > */}
        <Component {...pageProps} />
        {/* </motion.main> */}
        <Analytics />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
