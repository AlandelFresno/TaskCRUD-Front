import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/Table.module.scss';
import { deleteTask, editTask, taskIsDone } from '../../../helpers/taskHelper';
import { useDispatch } from 'react-redux';
import { getToken } from '../../../helpers/authHelper';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Swal from 'sweetalert2';

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
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const userToken = getToken();
    setToken(userToken);
  }, []);

  const handleEdit = () => {
    const task = { title, description, id: taskId };
    editTask(dispatch, task, token, index);
  };
  const handleDelete = () => {
    deleteTask(dispatch, token, taskId);
  };

  const handleInputClick = () => {
    Swal.fire({
      title: 'Do you want to change the completion status?',
      icon: 'warning',
      iconColor: '#cc0000',
      showCancelButton: true,
      toast: true,
      confirmButtonText: 'Yes',
      cancelButtonColor: '#cc0000',
    }).then((value) => {
      if (value.isConfirmed) {
        setIsDone(!isDone);
        if (!isDone) {
          taskIsDone(dispatch, true, token, taskId);
        } else {
          taskIsDone(dispatch, false, token, taskId);
        }
      }
    });
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
        {isDone ? (
          <CheckBoxIcon className={styles.actions} onClick={handleInputClick} />
        ) : (
          <CheckBoxOutlineBlankIcon
            className={styles.actions}
            onClick={handleInputClick}
          />
        )}
      </td>
    </tr>
  );
};

export default TableRow;
