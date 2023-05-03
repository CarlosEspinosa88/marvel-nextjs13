import Link from "next/link"
import { Repository } from '../types'
import { getCharacters } from '@utils/getCharacters'
import SearchBox from "@components/SearchBox"
import BoxCardLink from '@components/BoxCardLink'
import styles from './page.module.css'

export const metadata = {
  title: 'Marvel app',
  description: 'The best finder of Marvel characters'
};

export default async function Page() {
  const { data, status, code }: Repository = await getCharacters()

  return (
    <div className={styles.main_container}>
      <h1 className={styles.title}>
        Marvel Hero Finder
      </h1> 
      <SearchBox />
      {status === 'Ok' && code === 200 ? (
        <BoxCardLink results={data.results} />
      ) : (
        <h1>Unexpected error!</h1>
      )}
    </div>
  )
}