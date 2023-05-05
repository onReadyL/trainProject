import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';
import utilStyles from '../../styles/utils.module.scss';

const name = 'LXB';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            src="/images/profile.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                            width={400}
                            height={400}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/" legacyBehavior>
                            <a>
                                <Image
                                    src="/images/profile.jpg"
                                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                    alt={name}
                                    width={400}
                                    height={400}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" legacyBehavior>
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/" legacyBehavior>
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
