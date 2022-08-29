import { Typography } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import styles from './styles/Custom404.module.scss';

const Custom404 = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.titlesContainer}>
        <Typography variant="h2">404</Typography>
        <Typography variant="subtitle1">Page not found</Typography>
      </div>
    </div>
  );
};

export default Custom404;
