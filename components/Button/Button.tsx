'use client'

import {ButtonProps} from "./Button.props";
import styles from './Button.module.css';
import {JSX, useState} from "react";
import Like from "./ButtonLike.svg";
import Circle from "./Circle.svg";

import cn from 'classnames';

export const Button = ({isActive = false, ...props}: ButtonProps): JSX.Element => {

    const [active, setActive] = useState<boolean>(isActive);

    const handleClick = () => {
        setActive(prev => !prev);
    };

    return (
        <button onClick={handleClick} className={cn(styles.button, {[styles.active]: active})}
                {...props}
        >
            <div className={styles.svgContainer}>
                <Circle className={styles.bg}/>
                <Like className={styles.like}/>
            </div>
        </button>
    )
};