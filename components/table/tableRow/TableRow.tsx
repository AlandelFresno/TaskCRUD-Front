import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  title: string;
  description: string;
}

const TableRow: React.FC<Props> = ({ title, description }) => {
  return (
    <tr>
      <td> {title}</td>
      <td> {description}</td>
      <td>
        <EditIcon />
        <DeleteIcon />
      </td>
    </tr>
  );
};

export default TableRow;
