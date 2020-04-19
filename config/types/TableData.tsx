import { ReactNode } from 'react';

export interface TableData {
  header: string[];
  rows: (string | number | ReactNode)[][];
}
