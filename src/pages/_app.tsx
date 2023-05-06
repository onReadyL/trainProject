import 'antd/dist/antd.less';
import '@/styles/custom.less'; // 这是一种直接修改类名的方案
import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

import { AdminLayout } from '../componets/index'

export default function App({ Component, pageProps }: AppProps) {
  const { pageTitle = 'undefined', home = false, ...restProps } = pageProps;
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
        <AdminLayout home={home}>
          <Component {...restProps} />
        </AdminLayout>
      </ConfigProvider>
    </>
  )
}
