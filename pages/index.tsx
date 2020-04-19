import React from 'react';
import { Class } from '@babel/types';
import { Employee, HomePageQuery } from '../config/types';
import Table from '../components/organisms/Table';
import DefaultTemplate from '../components/templates/DefaultTemplate';
import EmployeesService from '../services/EmployeesService';
import useEmployeesTable from '../hooks/useEmployeesTable';
import WeekInfo from '../components/organisms/WeekInfo';

const Home = ({ employees, week, year }: { employees: Employee[]; week: string; year: string }) => {
  const employeesTableData = useEmployeesTable(employees, week, year);
  return (
    <DefaultTemplate>
      <WeekInfo week={week} year={year} />
      <Table data={employeesTableData} />
    </DefaultTemplate>
  );
};

Home.getInitialProps = async (ctx: { apiService: Class; query: HomePageQuery }) => {
  const { apiService, query } = ctx;
  const { week, year } = query;
  const employeesService = new EmployeesService(apiService);
  const employees = (await employeesService.retrieveAllEmployees(week, year)) || [];
  return { employees, week, year };
};

export default Home;
