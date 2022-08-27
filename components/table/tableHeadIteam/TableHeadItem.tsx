import React from 'react';

interface Props {
  item: string;
}

const TableHeadItem: React.FC<Props> = ({ item }) => {
  return <th>{item}</th>;
};

export default TableHeadItem;
