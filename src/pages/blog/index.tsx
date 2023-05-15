import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import { List, Skeleton, Divider } from 'antd';
import { getBlogLost } from '../../componets/fetch/index';

const config = {
  composition: 'blog',
  pageTitle: 'Blog',
};

export default function Blog({ }: any) {
  const [allPostsData, setAllPostsData] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    pageSize: 20,
    total: 0
  })

  const getBlogList = useCallback(() => {
    getBlogLost({ page: 1, pageSize: 10 }).then((res) => {
      const { total } = res;
      setPageInfo((prev) => ({ ...prev, total }))
      setAllPostsData(res.list);
    });
  }, [])

  useEffect(() => {
    getBlogList()
  }, [getBlogList]);

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={allPostsData.length}
        next={() => {
          debugger
        }}
        hasMore={allPostsData.length < pageInfo.total}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={allPostsData}
          renderItem={(item: any) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                  title={<Link href={`/posts/${item.id}`} legacyBehavior>
                    <a>{item.title}</a>
                  </Link>}
                  description={item.date}
                />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      ...config,
    },
  };
}
