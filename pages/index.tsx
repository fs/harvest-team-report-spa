import React from 'react';
import { Class } from '@babel/types';
import { Employee } from '../public/static/config/types/Employee';
import { HomePageQuery } from '../public/static/config/types/Queries';
import Table from '../components/organisms/Table';
import DefaultTemplate from '../components/templates/DefaultTemplate';
import EmployeesService from '../services/EmployeesService';
import { getEmployeesTableData } from '../public/static/utils/getTableData';
import WeekInfo from '../components/organisms/WeekInfo';

const Home = ({ employees, query }: { employees: Employee[]; query: HomePageQuery }) => {
  const employeesTableData = getEmployeesTableData(employees);
  return (
    <DefaultTemplate>
      <WeekInfo query={query} />
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
