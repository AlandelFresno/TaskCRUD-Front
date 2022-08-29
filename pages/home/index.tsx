import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import fetchAPI from '../../axios/axios';
import Navbar from '../../components/Navbar/Navbar';
import Table from '../../components/table/Table';
import { getToken } from '../../helpers/authHelper';
import { RootState } from '../../store';

import styles from './styles/Home.module.scss';

const index = () => {
  const columns = ['Title', 'Desciption', 'actions'];
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState({data: []});
  const auth = useSelector((state: RootState) => state.auth);
  
  useEffect(() => {
    setLoading(true);
    const token = getToken(auth);
    const getTasks = async () => {
      const data = await fetchAPI({
        method: 'get',
        url: '/task',
        headers: {
          Authorization:
            `Bearer ` +
            token,
        },
      });
      setRows(data)
    };
    getTasks();
    setLoading(false);
  }, []);

  console.log(rows)

  return (
    <div className={styles.homeContainer}>
      <Navbar />
      {loading ? (
        <Typography variant="h4"> loading </Typography>
      ) : (
        <Table data={rows.data} columns={columns} />
      )}
    </div>
  );
};

export default index;
