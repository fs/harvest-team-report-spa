export interface Employee {
  name: string;
  capacity: number;
  avatarURL: string;
  hoursOnWeek: {
    total: number;
    billable: number;
    nonBillable: number;
  };
}
