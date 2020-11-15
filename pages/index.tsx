import React from 'react';
import { Typography } from '@material-ui/core';
import { Employee, HomePageQuery, TeamTotal } from 'config/types';
import Table from 'components/organisms/Table';
import DefaultTemplate from 'components/templates/DefaultTemplate';
import useEmployeesTable from 'hooks/useEmployeesTable';
import AllEmployeesTotal from 'components/organisms/AllEmployeesTotal';
import { teamTotalEmpty } from 'public/defaultConstants';
import { getService } from 'utils';

const Home = ({
  teamTotal,
  employees,
  week,
  year,
}: {
  teamTotal: TeamTotal;
  employees: Employee[];
  week: string;
  year: string;
}) => {
  const employeesTableData = useEmployeesTable(employees, week, year);
  return (
    <DefaultTemplate week={week} year={year}>
      {employees.length > 0 ? (
        <>
          <AllEmployeesTotal teamTotal={teamTotal} />
          <Table data={employeesTableData} />
        </>
      ) : (
        <Typography variant="h5" component="h1">
          No time tracked.
        </Typography>
      )}
    </DefaultTemplate>
  );
};

Home.getInitialProps = async (ctx: { query: HomePageQuery }) => {
  const { query } = ctx;
  const { week, year } = query;
  const employeesService = getService();
  const { employees, teamTotal } = (await employeesService.retrieveAllEmployees(week, year)) || {
    employees: [],
    teamTotal: teamTotalEmpty,
  };
  return { teamTotal, employees, week, year };
};

export default Home;
