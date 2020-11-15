import React from 'react';
import styled, { css } from 'styled-components';
import { EmployeeExtended, EmployeePageQuery } from 'config/types';
import DefaultTemplate from 'components/templates/DefaultTemplate';
import EmployeeCaption from 'components/molecules/EmployeeCaption';
import EmployeeAside from 'components/organisms/EmployeeAside';
import ListByDays from 'components/organisms/ListByDays';
import { getService, isClient } from 'utils';

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
  if (isClient) {
    console.log(window.location);
  }
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

EmployeePage.getInitialProps = async (ctx: { query: EmployeePageQuery }) => {
  const { query } = ctx;
  const { week, year, id } = query;
  const employeesService = getService();
  const employee = await employeesService.retrieveEmployee(id || '0', week, year);
  return { employee, week, year, id };
};

export default EmployeePage;
