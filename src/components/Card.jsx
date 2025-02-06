import { Button } from '@mui/material';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>React + Tailwind + MUI</h2>
      <p className={styles.description}>
        This card combines Tailwind utilities, MUI components, and custom styles with CSS Modules.
      </p>

      {/* MUI Button with Tailwind */}
      <Button variant="contained" color="secondary" className="m-4">
        MUI Button
      </Button>

      {/* Custom CSS Module Button */}
      <button className={styles.customButton}>Custom Styled Button</button>
    </div>
  );
};

export default Card;