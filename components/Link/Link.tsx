import NextLink from "next/link";
import {LinkProps} from "./Link.props";
import styles from './Link.module.css';
import {JSX} from "react";
import {Open_Sans} from "next/font/google";
import cn from 'classnames';

const openSans = Open_Sans({
    subsets: ['cyrillic', 'latin'],
});

export const Link = ({children, href, className, ...props}: LinkProps): JSX.Element => {
    return (
        <NextLink
            href={href} className={cn(openSans.className, styles.link, className)}
            {...props}
        >
            {children}
        </NextLink>
    );
};