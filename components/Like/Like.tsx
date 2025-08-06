'use client';
import {JSX, useState} from 'react';
import { LikeProps } from './Like.props';
import styles from './Like.module.css';
import cn from 'classnames';
import ArrowIcon from './like.svg'

export const Like = ({count: initialCount = 0,isActive: initialActive = false,className, ...props}: LikeProps): JSX.Element => {

    const [isLiked, setIsLiked] = useState(initialActive);
    const [count, setCount] = useState(initialCount);

    const handleClick = () => {
        setIsLiked(prevLiked => {
            const newLiked = !prevLiked;
            setCount(prevCount => newLiked ? prevCount + 1 : prevCount - 1);
            return newLiked;
        });
    };

    return (
        <button
            onClick={handleClick}
            className={cn(styles.like, className)}
            {...props}
        >
            <span className={cn(styles.count)}>
        {count}
      </span>
            <ArrowIcon className={cn(styles.icon, { [styles.Active]: isLiked })} />
        </button>
    );
};