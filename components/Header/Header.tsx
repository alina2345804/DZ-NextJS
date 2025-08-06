import {HeaderProps} from './Header.props';
import styles from './Header.module.css';
import {JSX} from 'react';
import Gitlogo from './Gitlogo.svg';
import {Link} from '../Link/Link';
import cn from 'classnames';

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    return (
        <header className={cn(styles.header, className)} {...props}>
            <p className={styles.title}>.my_blog</p>
            <Link href="https://github.com/alina2345804" className={styles.gitLink} target="_blank"
                  rel="noopener noreferrer" aria-label=" ссылка на GitHub">
                <Gitlogo className={styles.gitLogo}></Gitlogo>
            </Link>
        </header>
    );
};
