import { useRouter } from 'next/router';
import { Layout, Avatar, Button } from 'antd';

import styles from './index.module.less';

const Index = ({ children } : any) => {
    const router = useRouter();
    const linkTo = () => {
        router.push('/blog');
    }
    return (
        <Layout className={styles.layout}>
            <Avatar style={{ width: 100, height: 100 }} alt='头像' size='large' src="/images/iHaveGotIt.jpg" />
            <small>
                世界上只有一种英雄主义，看清生活，热爱生活
            </small>
            <code>Hello world!</code>
            <div>技术栈：React+antd+小程序+Next</div>
            <div>讨厌却无法拒绝的事：写css</div>
            <Button onClick={linkTo}>个人博客</Button>
            {children}
        </Layout>
    )
}

export default Index;