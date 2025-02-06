import { Button } from '@mui/material';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>React + Tailwind + MUI</h2>
      <p className={styles.description}>
        This card combines Tailwind utilities, MUI components, and custom styles with CSS Modules.
      </p>

      <Button variant="contained" color="primary" className="text-red-400">
        MUI Button
      </Button>

      <button className={styles.customButton}>Custom Styled Button</button>
    </div>
  );
};

export default Card;