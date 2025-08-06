import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';
import { JSX, useState } from "react";
import cn from 'classnames';


export const Button = ({ isActive = false, ...props}: ButtonProps): JSX.Element => {

  const [active, setActive] = useState<boolean>(isActive)

    return (
      <button onClick={() => setActive(x => !x)}
      className={cn(styles.button, { [styles.active]: active})}
      {...props}
      >
        <div className={styles.svgContainer}>
          <></>
        </div>

      </button>
       
    )
}