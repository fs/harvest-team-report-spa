import React from 'react';
import { Class } from '@babel/types';
import { Typography } from '@material-ui/core';
import { Employee, HomePageQuery } from '../config/types';
import Table from '../components/organisms/Table';
import DefaultTemplate from '../components/templates/DefaultTemplate';
import EmployeesService from '../services/EmployeesService';
import useEmployeesTable from '../hooks/useEmployeesTable';

const Home = ({ employees, week, year }: { employees: Employee[]; week: string; year: string }) => {
  const employeesTableData = useEmployeesTable(employees, week, year);
  return (
    <DefaultTemplate week={week} year={year}>
      {employees.length > 0 ? (
        <Table data={employeesTableData} />
      ) : (
        <Typography variant="h5" component="h1">
          No time tracked.
        </Typography>
      )}
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
