import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.main
          key={router.route}
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
