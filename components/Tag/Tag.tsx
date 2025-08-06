import { TagProps } from "./Tag.props";
import styles from './Tag.module.css';
import { JSX } from "react";
import {Open_Sans} from "next/font/google";
import cn from 'classnames';

const openSans = Open_Sans({
    subsets: ['cyrillic', 'latin'],
});


export const Tag = ({ size = 's', children, color, className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(openSans.className, styles.tag, className, {
            [styles.s]: size === 's',
            [styles.grey]: color === 'grey',
            [styles.black]: color === 'black',
        })}
        {...props}
        >
              <>{children}</>
        </div>
       
    )
}