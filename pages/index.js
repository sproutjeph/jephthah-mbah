import Head from 'next/head';
import About from '../components/About';
import Hero from '../components/header/Hero';
import Layout from '../components/layout/Layout';
import Sidebar from '../components/layout/Sidebar';
import { useGlobalContext } from '../store/context';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import TopLink from '../components/ui/TopLink';
export default function Home() {
  const { isOpen, scrollPosition } = useGlobalContext();
  return (
    <>
      <Head>
        <title>Jephthah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Projects />
      <Contact />
      <About />
      {isOpen && <Sidebar />}
      {scrollPosition > 700 && <TopLink />}
    </>
  );
}
