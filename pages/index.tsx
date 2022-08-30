import { Button, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from './styles/Welcome.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.welcomeContainer}>
          <Typography variant="h2">Welcome</Typography>
          <Typography variant="h4">to Trackmania</Typography>
          <Typography variant="subtitle1">
            A place where you can track your tasks, please log in or create a
            new account
          </Typography>
          <Typography variant="subtitle1"></Typography>
          <div className={styles.buttonsContainer}>
            <Button variant="contained">
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="contained" className={styles.registerButton}>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
        <footer className={styles.footer}>
          This is a non-comercial product
        </footer>
      </main>
    </>
  );
};

export default Home;
