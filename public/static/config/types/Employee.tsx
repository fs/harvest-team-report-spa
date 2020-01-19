export interface Employee {
  name: string;
  capacity: number;
  hoursOnWeek: {
    total: number;
    billable: number;
    nonBillable: number;
  };
}
