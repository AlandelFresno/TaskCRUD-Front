import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import Link from 'next/link';
import styles from './styles/Navbar.module.scss';
import { useState } from 'react';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

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
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
