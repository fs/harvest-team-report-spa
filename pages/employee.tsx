import React from 'react';
import { Class } from '@babel/types';
import styled from 'styled-components';
import { EmployeeExtended, EmployeePageQuery } from '../public/static/config/types';
import { employeeExtended } from '../public/static/defaultConstants';
import DefaultTemplate from '../components/templates/DefaultTemplate';
import EmployeesService from '../services/EmployeesService';
import WeekInfo from '../components/organisms/WeekInfo';
import EmployeeCaption from '../components/molecules/EmployeeCaption';
import EmployeeAside from '../components/organisms/EmployeeAside';

const ContentWrapper = styled.main`
  margin-top: 16px;
`;

const EmployeePage = ({
  employee,
  week,
  year,
  id,
}: {
  employee: EmployeeExtended;
  week: string;
  year: string;
  id: string;
}) => {
  return (
    <DefaultTemplate>
      <WeekInfo week={week} year={year} id={id} />
      <ContentWrapper>
        <EmployeeCaption employee={employee} />
        <EmployeeAside employee={employee} />
      </ContentWrapper>
    </DefaultTemplate>
  );
};

EmployeePage.getInitialProps = async (ctx: { apiService: Class; query: EmployeePageQuery }) => {
  const { apiService, query } = ctx;
  const { week, year, id } = query;
  const employeesService = new EmployeesService(apiService);
  let employee: EmployeeExtended = { ...employeeExtended };

  try {
    // '0' is users parameter
    employee = await employeesService.retrieveEmployee(id || '0', week, year);
  } catch (err) {
    console.error(err);
  }
  return { employee, week, year, id };
};

export default EmployeePage;
