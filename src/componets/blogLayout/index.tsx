import Link from 'next/link';
import styles from './index.module.scss';
import { Layout, Button } from 'antd';

const { Sider, Content, Footer, Header } = Layout;
export default function Index({ children }: any) {
    return (
        <Layout className={styles.layout}>
            <Content>{children}</Content>
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
