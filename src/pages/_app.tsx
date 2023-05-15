import 'antd/dist/antd.less';
import '@/styles/custom.less'; // 这是一种直接修改类名的方案
import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { Analytics } from '@vercel/analytics/react'

import { BlogLayout, Portal } from '../componets/index';

export default function App({ Component, pageProps }: AppProps) {
  const { pageTitle = 'Blog', composition = 'blog', skills = [], ...restProps } = pageProps;
  const router = useRouter()

  // useEffect(() => {
  //   const handleRouteChange = (url: any, { shallow }: { shallow?: boolean }) => {
  //     // 在这里可以做路由级的权限验证
  //     // 参考：https://www.nextjs.cn/docs/api-reference/next/router
  //     if (url !== '/404') {
  //       // router.push('/404'); 
  //     }
  //   }

  //   router.events.on('routeChangeStart', handleRouteChange)

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange)
  //   }
  // }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Next+Antd"
        />
        <meta name="og:title" content={pageTitle} />
        <title>{pageTitle}</title>
      </Head>
      <ConfigProvider locale={zhCN}>
        {composition === 'portal' && (
          <Portal skills={skills} />
        )}
        {composition === 'blog' && (
          <BlogLayout>
            <Component {...restProps} />
          </BlogLayout>
        )}
      </ConfigProvider>
      <Analytics />
    </>
  )
}
