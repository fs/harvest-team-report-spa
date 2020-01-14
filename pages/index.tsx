import React from 'react';
import Table from '../components/organisms/Table';
import DefaultTemplate from '../components/templates/DefaultTemplate';

const Home = () => {
  const employees = [
    {
      name: 'Renas Sitdikov',
      capacity: 40,
      hoursOnWeek: {
        total: 42,
        billable: 36,
        nonBillable: 6,
      },
    },
    {
      name: 'Elon Musk',
      capacity: 160,
      hoursOnWeek: {
        total: 200,
        billable: 200,
        nonBillable: 0,
      },
    },
  ];
  return (
    <DefaultTemplate>
      <Table />
    </DefaultTemplate>
  );
};

export default Home;
