import Link from 'next/link';
// import useSWR from 'swr'
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../../lib/posts';

const config = {
  home: true,
  pageTitle: 'Home'
}

export default function Home({ allPostsData }: any) {
  return (
    <>
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
        <h3>
          <Link href={`/dashbord/overview`} legacyBehavior><a>{'overview'}</a></Link>
        </h3>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData: any = getSortedPostsData();
  return {
    props: {
      allPostsData,
      ...config
    }
  }
}