import {CardProps} from "./Card.props";
import styles from './Card.module.css';
import {JSX} from "react";
import {Htag} from '../Htag/Htag';
import {P} from '../P/P';
import {Tag} from '../Tag/Tag';
import {Like} from '../Like/Like';
import {Link} from '../Link/Link';
import CardIcon from './Icard.svg';

export const Card = ({category, point, date, title, description, readTime, likeCount = 0, isLiked = false,}: CardProps): JSX.Element => {
    return (
        <div className={styles.card}>
            <div className={styles.topIcon}>
                <CardIcon className={styles.topIcon}/>
            </div>
            <div>
                <Tag color="black">{category}</Tag>
                <Tag color="grey">{point}</Tag>
                <Tag color="grey">{date}</Tag>
                <Like count={likeCount} isActive={isLiked}/>
            </div>
            <Htag tag="h1">{title}</Htag>
            <P size="s">{description} </P>
            <div className={styles.tagLink}>
                <Tag color="grey">{readTime}</Tag>
                <Link href="/about">Читать →</Link>
            </div>
        </div>
    );
};