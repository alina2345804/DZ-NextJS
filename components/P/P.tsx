import {PProps} from "./P.props";
import styles from './P.module.css';
import {JSX} from "react";
import {Open_Sans} from "next/font/google";
import cn from 'classnames';

const openSans = Open_Sans({
    subsets: ['cyrillic', 'latin'],
});

export const P = ({size = 'm', children, className, ...props}: PProps): JSX.Element => {
    return (
        <p
            className={cn(openSans.className, styles.p, className, {
                [styles.m]: size == 'm',
                [styles.s]: size == 's',
            })}
            {...props}
        >
            {children}
        </p>
    );
};