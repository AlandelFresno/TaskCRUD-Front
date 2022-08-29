import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/Table.module.scss';
import { deleteTask, editTask } from '../../../helpers/taskHelper';
import { useDispatch } from 'react-redux';
import { getToken } from '../../../helpers/authHelper';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

interface Props {
  title: string;
  description: string;
  taskId: number;
  done: boolean;
  index: number;
}

const TableRow: React.FC<Props> = ({
  title,
  description,
  taskId,
  done,
  index,
}) => {
  const [isDone, setIsDone] = useState(done);
  const dispatch = useDispatch();
  const userToken = getToken();

  const handleEdit = () => {
    const task = { title, description, id: taskId };
    editTask(dispatch, task, userToken, index);
  };
  const handleDelete = () => {
    deleteTask(dispatch, userToken, taskId);
  };

  const handleInputClick = () => {
    setIsDone(!isDone);
  };

  return (
    <tr>
      <td className={isDone ? styles.completed : styles.notCompleted}>
        {title}
      </td>
      <td className={isDone ? styles.completed : styles.notCompleted}>
        {description}
      </td>
      <td className={styles.actionsContainer}>
        <EditIcon className={styles.actions} onClick={handleEdit} />
        <DeleteIcon className={styles.actions} onClick={handleDelete} />
        {isDone ? <CheckBoxIcon  className={styles.actions} onClick={handleInputClick}/> : <CheckBoxOutlineBlankIcon className={styles.actions} onClick={handleInputClick}/>}
      </td>
    </tr>
  );
};

export default TableRow;
