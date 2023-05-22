import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import { Layout, Menu } from 'antd';

const { Sider, Content, Footer, Header } = Layout;

export default function Index({ children }: any) {
    const router = useRouter();
    const handleMenuClick = ({ item, key, keyPath, domEvent}: any) => {
        router.push(`/${key}`)
    }
    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>
                <Menu
                    mode="horizontal"
                    onClick={handleMenuClick}
                >
                    <Menu.Item key='blog'>BlOG</Menu.Item>
                    {/* <Menu.Item key='ablout'>关于我</Menu.Item> */}
                </Menu>
            </Header>
            <Layout>
                <Content className={styles.content}>
                    {children}
                </Content>
                {/* <Sider>sa</Sider> */}
            </Layout>
           
            <Footer>
                <div className={styles.backToHome}>
                    <Link href="/" legacyBehavior>
                        <a>← Back to Portal</a>
                    </Link>
                </div>
            </Footer>
        </Layout>
    );
}
