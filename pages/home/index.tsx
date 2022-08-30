import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchAPI from '../../axios/axios';
import Navbar from '../../components/Navbar/Navbar';
import Table from '../../components/table/Table';
import { getToken } from '../../helpers/authHelper';
import { saveAllTasks } from '../../slices/taskSlice';

import styles from './styles/Home.module.scss';

const index = () => {
  const dispatch = useDispatch();
  const columns = ['Title', 'Desciption', 'actions'];
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const token = getToken();
    const getTasks = async () => {
      const data = await fetchAPI({
        method: 'get',
        url: '/task',
        headers: {
          Authorization: `Bearer ` + token,
        },
      });
      dispatch(saveAllTasks(data.data));
    };
    getTasks();
    setLoading(false);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Navbar />
      {loading ? (
        <Typography variant="h4"> loading </Typography>
      ) : (
        <Table columns={columns} />
      )}
    </div>
  );
};

export default index;
