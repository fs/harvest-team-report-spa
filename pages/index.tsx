import React from 'react';
import { Class } from '@babel/types';
import Table from '../components/organisms/Table';
import DefaultTemplate from '../components/templates/DefaultTemplate';
import EmployeesService from '../services/EmployeesService';
import { getEmployeesTableData } from '../public/static/utils/getTableData';
import { Employee } from '../public/static/config/types/Employee';
import { HomePageQuery } from '../public/static/config/types/Queries';

const Home = ({ employees, query }: { employees: Employee[]; query: HomePageQuery }) => {
  const employeesTableData = getEmployeesTableData(employees);
  const { week, year } = query;
  return (
    <DefaultTemplate>
      <Table data={employeesTableData} />
    </DefaultTemplate>
  );
};

Home.getInitialProps = async (ctx: { apiService: Class; query: HomePageQuery }) => {
  const { apiService, query } = ctx;
  const employeesService = new EmployeesService(apiService);
  let employees: Employee[] = [];

  try {
    employees = await employeesService.retrieveAllEmployees();
  } catch (err) {
    console.error(err);
  }
  return { employees, query };
};

export default Home;
