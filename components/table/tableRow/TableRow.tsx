import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/Table.module.scss';

interface Props {
  title: string;
  description: string;
}

const TableRow: React.FC<Props> = ({ title, description }) => {
  return (
    <tr>
      <td> {title}</td>
      <td> {description}</td>
      <td className={styles.actions}>
        <EditIcon />
        <DeleteIcon />
      </td>
    </tr>
  );
};

export default TableRow;
