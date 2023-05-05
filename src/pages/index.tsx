import Head from 'next/head'
import Link from 'next/link'
import { Layout } from '../componets'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../../lib/posts';

export default function Home({ allPostsData }: any) {
  return (
    <Layout home title={'Home'}>
      <section className={utilStyles.headingMd}>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }: any) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} legacyBehavior><a>{ title}</a></Link>
             
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps () {
  const allPostsData: any = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
  
}