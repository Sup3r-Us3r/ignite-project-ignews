import Image from 'next/image';

import { ActiveLink } from '../../components/ActiveLink';
import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div  className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          alt="Logo"
          height={50}
          width={100}
        />

        <nav>
          <ActiveLink
            activeClassName={styles.active}
            href="/"
          >
            <a>Home</a>
          </ActiveLink>
          <ActiveLink
            activeClassName={styles.active}
            href="/posts"
          >
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}