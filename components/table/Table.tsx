import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../helpers/authHelper';
import { createTask } from '../../helpers/taskHelper';
import { RootState } from '../../store';
import styles from './styles/Table.module.scss';
import TableHeadItem from './tableHeadIteam/TableHeadItem';
import TableRow from './tableRow/TableRow';

interface Props {
  columns: any[];
}

const Table: React.FC<Props> = ({ columns }) => {
  const task = useSelector((state: RootState) => state.task);
  const [token, setToken] = useState('');
  const data = task.tasks;
  const dispatch = useDispatch();

  useEffect(() => {
    const getTok = getToken();
    setToken(getTok);
  }, [getToken]);

  const handleCreate = () => {
    createTask(dispatch, token);
  };

  return (
    <div className={styles.gridContainer}>
      <Button variant="contained" onClick={handleCreate}>
        Create new task
      </Button>
      {data.length == 0 ? (
        <Typography variant="h5">There are no tasks</Typography>
      ) : (
        <table>
          <thead>
            <tr>
              {columns.map((item, index) => (
                <TableHeadItem key={index} item={item} />
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                title={item.title}
                description={item.description}
                taskId={item.id}
                done={item.done}
                index={index}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
