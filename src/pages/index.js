// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Component from './qcomps/menuBar'
// import Component from './components/button'
// import Component from './qcomps/recipes'
import Component from './qcomps/list_keys_id'
// import Component from './components/list_keys'

export default function Home() {
  return (
    <div className={styles.main}>
        <Component />
    </div>
  )
}
