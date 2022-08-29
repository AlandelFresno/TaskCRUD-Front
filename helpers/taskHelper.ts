import Swal from 'sweetalert2';
import fetchAPI from '../axios/axios';
import { editOneTask, removeOneTask } from '../slices/taskSlice';

// fetchAPI options
// {
//   method: 'post',
//   url: '/auth/login',
//   data: {
//     email: userData.email,
//     password: userData.password,
//   },
// }

export const editTask = async (
  dispatch: Function,
  task: { title: string; description: string; id: number },
  token: string,
  index: number
) => {
  console.log(task);

  await Swal.fire({
    title: 'Multiple inputs',
    html:
      `<input value='${task.title}' id="swal-input1" class="swal2-input">` +
      `<input value='${task.description}' id="swal-input2" class="swal2-input">`,
    focusConfirm: false,
    toast: true,
    showCancelButton: true,
    preConfirm: () => {
      return [
        (<HTMLInputElement>document.getElementById('swal-input1')).value,
        (<HTMLInputElement>document.getElementById('swal-input2')).value,
      ];
    },
  }).then(async (value) => {
    const {value: valueData} = value
    if (value.isConfirmed) {
      try {
        await fetchAPI({
          method: 'put',
          url: `/task/${task.id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: {
            title: valueData ? valueData[0] : task.title,
            description: valueData ? valueData[1] : task.description,
          },
        });
        Swal.fire({
          title: 'Edited succesfully',
          icon: 'success',
          toast: true,
          buttonsStyling: true,
        }).then(() => {
          dispatch(editOneTask({ index, valueData }));
        });
      } catch (error) {
        Swal.fire({
          title: 'Error while editing',
          icon: 'error',
          toast: true,
          timer: 3000,
          timerProgressBar: true,
          buttonsStyling: true,
        });
      }
    }
  });
};

export const deleteTask = async (
  dispatch: Function,
  token: string,
  taskId: number
) => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to undo this action',
    icon: 'warning',
    showCancelButton: true,
    toast: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonColor: '#cc0000',
  }).then(async (value) => {
    if (value.isConfirmed) {
      try {
        await fetchAPI({
          method: 'delete',
          url: `/task/${taskId}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire({
          title: 'Deleted succesfully',
          icon: 'success',
          toast: true,
          timer: 3000,
          timerProgressBar: true,
          position: 'top-start',
          buttonsStyling: true,
        }).then(() => {
          dispatch(removeOneTask({taskId}));
        });
      } catch (error) {
        Swal.fire({
          title: 'An error occurred while deleting',
          icon: 'error',
          toast: true,
          timer: 3000,
          timerProgressBar: true,
          buttonsStyling: true,
        });
      }
    }
  });
};
