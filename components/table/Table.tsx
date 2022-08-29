import { Button, Typography } from '@mui/material';
import React from 'react';
import styles from './styles/Table.module.scss';
import TableHeadItem from './tableHeadIteam/TableHeadItem';
import TableRow from './tableRow/TableRow';

interface Props {
  data: any[];
  columns: any[];
}

const Table: React.FC<Props> = ({ data, columns }) => {

  console.log(data)

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
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
