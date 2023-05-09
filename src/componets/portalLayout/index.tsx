import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Layout, Avatar, Tag, Card, Space } from 'antd';
import Icon from '@ant-design/icons';

import styles from './index.module.less';
import { SKILLS_URL } from '@/componets/fetch/config';

const Index = ({ children }: any) => {
    const router = useRouter();
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch(SKILLS_URL).then(res => res.json()).then(res => {
            setSkills(res);
        })
    }, [])
    const linkTo = () => {
        router.push('/blog');
    }
    return (
        <Layout className={styles.layout}>
            <Card
                style={{ width: 400 }}
                cover={
                    <img
                        style={{ backgroundColor: '#2db7f5' }}
                        alt="hello"
                        src="/images/helloMonday.png"
                    />
                }
                actions={[
                    <Icon
                        onClick={linkTo}
                        title='博客'
                        component={() => {
                            return <Image src='images/blog.svg' alt='博客' width={16} height={16}/>
                        }} />,
                ]}
            >
                <Card.Meta
                    style={{ display: 'felx', alignItems: 'center'}}
                    avatar={<Avatar style={{ width: 60, height: 60 }} alt='头像' size='large' src="/images/iHaveGotIt.jpg" />}
                    description={
                        <>
                            <small>
                                世界上只有一种英雄主义，看清生活，热爱生活
                            </small>
                            <div>
                                {skills.map((item: any) => (
                                    <Tag key={item.skill} className={styles.tag} color={item?.bgColor}>{item.skill}</Tag>
                                ))}
                            </div>
                        </>
                    }
                />
            </Card>
            {children}
        </Layout>
    )
}

export default Index;