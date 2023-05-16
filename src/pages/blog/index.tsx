import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import { List, Skeleton, Divider, Spin } from 'antd';

import { getBlogLost } from '../../componets/fetch/index';
import styles from './index.module.less';

const config = {
  composition: 'blog',
  pageTitle: 'Blog',
};

export default function Blog({ }: any) {
  const [allPostsData, setAllPostsData] = useState([]);

  const [loading, setLoading] = useState(false);

  const isFirstLoad = useRef(true);

  const [pageInfo, setPageInfo] = useState({
    page: 1,
    pageSize: 20,
    total: 0
  })

  const getBlogList = useCallback(() => {
    if (isFirstLoad.current) {
      setLoading(true);
    }
    getBlogLost({ page: 1, pageSize: 10 }).then((res) => {
      isFirstLoad.current = false;
      setLoading(false);
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
      className={styles.root}
    >
      <Spin spinning={loading}>
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
              <List.Item key={item.email} className={styles.listItem}>
                <List.Item.Meta
                  title={<Link href={`/posts/${item.id}`} legacyBehavior>
                    <a className={styles.title}>{item.title}</a>
                  </Link>}
                  description={item.date}
                />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </Spin>
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
