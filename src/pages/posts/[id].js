import { withRouter, useRouter } from 'next/router';
import { Date } from '../../componets';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import utilStyles from '../../styles/utils.module.scss';

export default function Post({ postData }) {
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

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
            pageTitle: postData.id,
        },
    };
}
