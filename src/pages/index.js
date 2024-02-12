// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import StuckForm from './qcomps/stuckForm'
import PersonData from './components/stateObj'
import CompState from './qcomps/state'
import MenuBar from './qcomps/menuBar'
import Button from './components/button'
import Recipe from './qcomps/recipes'
import ListKey from './qcomps/list_keys_id'

export default function Home() {
  return (
    <div className={styles.main}>
      <StuckForm />
      <PersonData />
      <CompState />
      <MenuBar />
      <Button />
      <Recipe />
      <ListKey />
    </div>
  )
}
