import 'antd/dist/antd.css';
import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

import { CustomLayout } from '../componets/index'

export default function App({ Component, pageProps }: AppProps) {
  const { pageTitle = 'undefined', home = false, ...restProps } = pageProps;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={pageTitle} />
        <title>{pageTitle}</title>
      </Head>
      <ConfigProvider locale={zhCN}>
        <CustomLayout home={home}>
          <Component {...restProps} />
        </CustomLayout>
      </ConfigProvider>
    </>
  )
}
