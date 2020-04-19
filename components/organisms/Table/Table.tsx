import React, { ReactNode } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { TableData } from '../../../config/types';

const TableMaterial = ({ data }: { data: TableData }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {data.header.map((cell: string | number, i: number) => (
              <TableCell key={`tableHeaderCell_${i}`}>{cell}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.rows.map((employee: (string | number | ReactNode)[], i: number) => (
            <TableRow key={i}>
              {employee.map((cell: string | number | ReactNode, j: number) => (
                <TableCell key={`tableRowCell_${i}_${j}`}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableMaterial;
