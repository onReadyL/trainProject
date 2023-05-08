import Link from 'next/link';
import { Card } from 'antd';
  
import utilStyles from '../../styles/utils.module.scss';
import { getSortedPostsData } from '../../../lib/posts';

const config = {
    composition: 'blog',
    pageTitle: 'Blog'
  }
export default function Blog({ allPostsData }: any) {
    return (
        <>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <div className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }: any) => (
                <Card className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`} legacyBehavior><a>{ title}</a></Link>
                  <br />
                  {date}
                </Card>
              ))}
            </div>
          </section>
        </>
      )
}

export async function getStaticProps() {
    // TODO: 分页 用：Json Function
    const allPostsData: any = getSortedPostsData();
    return {
      props: {
        allPostsData,
        ...config
      }
    }
  }