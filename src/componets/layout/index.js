import Link from 'next/link';
import styles from './index.module.scss';
import { Layout, Button } from 'antd';

const { Sider, Content, Footer, Header } = Layout;
export default function Index({ children, home }) {
    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>Silder</Sider>
                <Layout>
                    <Content>{children}</Content>
                </Layout>
            </Layout>
            <Footer>
                {!home && (
                    <div className={styles.backToHome}>
                        <Button>asa</Button>
                        <Link href="/" legacyBehavior>
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </Footer>
        </Layout>
    );
}
