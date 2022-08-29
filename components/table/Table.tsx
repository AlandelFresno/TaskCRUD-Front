import { Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './styles/Table.module.scss';
import TableHeadItem from './tableHeadIteam/TableHeadItem';
import TableRow from './tableRow/TableRow';

interface Props {
  columns: any[];
}

const Table: React.FC<Props> = ({ columns }) => {
  const task = useSelector((state: RootState) => state.task);
  const data = task.tasks;

  return (
    <div className={styles.gridContainer}>
      <Button variant="contained"> Create new task</Button>
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
