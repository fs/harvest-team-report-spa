import React, { ReactNode } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
  Card,
  CardContent,
} from '@material-ui/core';
import { TableData } from 'config/types';
import theme from 'public/styles/theme';

const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.colors.backGround,
    },
  },
}))(TableRow);

const TableMaterial = ({ data }: { data: TableData }) => {
  return (
    <Card>
      <CardContent>
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
                <StyledTableRow key={i}>
                  {employee.map((cell: string | number | ReactNode, j: number) => (
                    <TableCell key={`tableRowCell_${i}_${j}`}>{cell}</TableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default TableMaterial;
