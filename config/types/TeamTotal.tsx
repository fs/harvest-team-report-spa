export interface TeamTotal {
  capacity: number;
  hoursOnWeek: {
    total: number;
    billable: number;
    nonBillable: number;
  };
  withArchived: boolean;
}
