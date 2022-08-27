import Navbar from '../../components/Navbar/Navbar';
import Table from '../../components/table/Table';

import styles from './styles/Home.module.scss';

const index = () => {
  const columns = ['Title', 'Desciption', 'actions'];
  const rows = [
    { id: 1, title: 'Task1', description: 'task one' },
    { id: 2, title: 'Task2', description: 'task two' },
    { id: 3, title: 'Task3', description: 'task three' },
    { id: 4, title: 'Task4', description: 'task four' },
    { id: 5, title: 'Task5', description: 'task five' },
    { id: 6, title: 'Task6', description: 'task six' },
    { id: 7, title: 'Task7', description: 'task seven' },
    { id: 8, title: 'Task8', description: 'task eight' },
  ];

  return (
    <>
      <Navbar />
      <Table data={rows} columns={columns} />
    </>
  );
};

export default index;
