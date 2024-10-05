import Contributors from '@/components/Contributors';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProgressBar from '@/components/ProgressBar';
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>Contributors</title>
      </Head><ProgressBar />
      <main
        className={`flex min-h-screen flex-col bg-white items-center justify-between ${inter.className}`}
      >

        <Navbar />
        <Contributors />
        <Footer />
      </main>
    </>
  )
}
