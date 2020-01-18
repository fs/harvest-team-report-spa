import React from 'react';
import { Class } from '@babel/types';
import Table from '../components/organisms/Table';
import DefaultTemplate from '../components/templates/DefaultTemplate';
import EmployeesService from '../services/EmployeesService';
import { Employee } from '../public/static/config/types/employee';
import { getEmployeesTableData } from '../public/static/utils/getTableData';

const Home = ({ employees }: { employees: Employee[] }) => {
  const employeesTableData = getEmployeesTableData(employees);
  return (
    <DefaultTemplate>
      <Table data={employeesTableData} />
    </DefaultTemplate>
  );
};

Home.getInitialProps = async (ctx: { apiService: Class }) => {
  const { apiService } = ctx;
  const employeesService = new EmployeesService(apiService);
  let employees: Employee[] = [];

  try {
    employees = await employeesService.retrieveAllEmployees();
  } catch (err) {
    console.error(err);
  }
  return { employees };
};

export default Home;
