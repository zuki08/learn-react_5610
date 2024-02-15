// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import QupdateObj from './qcomps/updObjectsForm'
import UpdateObj from './components/updObjects'
import ShoppingCart from './qcomps/shoppingCart'
import QueueUpdate from './components/queueUpdates'
import Counter2 from './components/snapshot2'
import Counter from './components/snapshot'
import ThankYouCrash from './qcomps/thankYouCrash'
import StuckForm from './qcomps/stuckForm'
import Profile from './components/profile'

export default function Home() {
  return (
    <div className={styles.main}>
      <QupdateObj />
      <hr></hr>
      <UpdateObj />
      <hr></hr>
      <ShoppingCart />
      <hr></hr>
      <QueueUpdate />
      <hr></hr>
      <Counter2 />
      <hr></hr>
      <Counter />
      <hr></hr>
      <ThankYouCrash />
      <hr></hr>
      <StuckForm />
      <hr></hr>
      <Profile />
    </div>
  )
}
