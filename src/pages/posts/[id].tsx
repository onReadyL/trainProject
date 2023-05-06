import { withRouter, useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { Date } from '../../componets';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import utilStyles from '../../styles/utils.module.scss';

export default function Post({ postData }: { postData: any }) {
    const params = useRouter();
    return (
        <>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </>
    );
}
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false, // 谨慎使用fallback：true/blocking
    };
}

export const getStaticProps = async ({ params }: { params?: { id: string }}) => {
    const postData = await getPostData(params?.id);
    return {
        props: {
            postData,
            pageTitle: postData.id,
        },
    };
}
