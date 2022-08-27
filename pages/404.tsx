import { Typography } from '@mui/material';
import styles from './styles/Custom404.module.scss';

const Custom404 = () => {
  return (
    <div className={styles.main}>
      <Typography variant="h2">404</Typography>
      <Typography variant="subtitle1">Page not found</Typography>
    </div>
  );
};

export default Custom404;
