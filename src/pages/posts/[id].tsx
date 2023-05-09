import { useRouter } from 'next/router';
import { GetStaticPaths } from 'next';
import { Spin } from 'antd';

import { Date } from '../../componets';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import utilStyles from '../../styles/utils.module.scss';

interface IPostdata {
    title: string,
    contentHtml: string,
    date: string,
    [key: string]: any
}

export default function Post({ postData }: { postData: IPostdata }) {

    const router = useRouter();
    if (router.isFallback) {
        return <Spin spinning />
    }

    return (
        <>
            <article>
                <h1 className={utilStyles.headingXl}>{postData?.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData?.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData?.contentHtml }} />
            </article>
        </>
    );
}
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: true, // 开启之后，请求未静态生成的页面，会在服务端再执行getStaticProps
    };
}

export const getStaticProps = async ({ params }: { params?: { [key: string]: string }}) => {
    const postData = await getPostData(params?.id);
    // 此方案开发环境太卡
    if (postData.status === 404) {
        return {
          redirect: {
            destination: '/blog',
            permanent: false,
          },
        }
      }
    return {
        props: {
            postData,
            pageTitle: postData.id,
            composition: 'blog',
        },
    };
}
