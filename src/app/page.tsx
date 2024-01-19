'use client'
import Image from 'next/image'
import styles from './page.module.css'
import DemoForm from "@/components/Form";


export default function Home() {
  return (
    <main className={styles.main}>
      <DemoForm />
    </main>
  )
}
