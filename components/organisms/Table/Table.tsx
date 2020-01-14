import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const TableMaterial = () => {
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
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employees</TableCell>
            <TableCell>Total Hours</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Capacity</TableCell>
            <TableCell>Billable Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, i) => (
            <TableRow key={i}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.hoursOnWeek.total}</TableCell>
              <TableCell>-</TableCell>
              <TableCell>{employee.capacity}</TableCell>
              <TableCell>{employee.hoursOnWeek.billable}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableMaterial;
