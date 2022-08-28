import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/Navbar.module.scss';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { RootState } from '../../store';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const data = useSelector((state: RootState) => state.auth);
  const { user, error, loading, token } = data;
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.NavbarContainer}>
      <nav className={styles.menuToggle}>
        <input type="checkbox" onClick={handleClick} />
        {isClicked ? (
          <ClearIcon className={styles.menuIcon2} />
        ) : (
          <MenuIcon className={styles.menuIcon1} />
        )}
        <ul>
          <Link href="/home">Home</Link>
          {user.name ? (
            <Typography variant="body1" className={styles.userName}>
              {user.name}
            </Typography>
          ) : (
            <></>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
