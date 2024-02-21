// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ArrObj from './qcomps/arrObj';
import ArtistsRm from './qcomps/artistsRemoveArr'
import Profile from './components/profile'

export default function Home() {
  return (
    <div className={styles.main}>
        <ArrObj />
        <ArtistsRm />
        <Profile />
    </div>
  )
}
