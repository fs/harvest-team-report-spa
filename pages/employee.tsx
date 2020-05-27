import React from 'react';
import { Class } from '@babel/types';
import styled, { css } from 'styled-components';
import { EmployeeExtended, EmployeePageQuery } from '../config/types';
import { employeeExtended } from '../public/defaultConstants';
import DefaultTemplate from '../components/templates/DefaultTemplate';
import EmployeesService from '../services/EmployeesService';
import EmployeeCaption from '../components/molecules/EmployeeCaption';
import EmployeeAside from '../components/organisms/EmployeeAside';
import ListByDays from '../components/organisms/ListByDays';

const ContentWrapper = styled.main(
  ({ theme: { breakpoints, down } }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    margin-top: 16px;
    grid-gap: 16px;
    ${down(breakpoints.sm)} {
      grid-template-columns: auto;
    }
  `,
);

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
  const { weekByDays } = employee;
  return (
    <DefaultTemplate week={week} year={year} id={id}>
      <ContentWrapper>
        <EmployeeCaption employee={employee} />
        <EmployeeAside employee={employee} />
        <ListByDays weekByDays={weekByDays} />
      </ContentWrapper>
    </DefaultTemplate>
  );
};

EmployeePage.getInitialProps = async (ctx: { apiService: Class; query: EmployeePageQuery }) => {
  const { apiService, query } = ctx;
  const { week, year, id } = query;
  const employeesService = new EmployeesService(apiService);
  let employee: EmployeeExtended = { ...employeeExtended };

  employee = await employeesService.retrieveEmployee(id || '0', week, year);
  return { employee, week, year, id };
};

export default EmployeePage;
