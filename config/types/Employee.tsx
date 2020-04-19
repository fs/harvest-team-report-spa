export interface Employee {
  name: string;
  id: number;
  capacity: number;
  avatarURL: string;
  hoursOnWeek: {
    total: number;
    billable: number;
    nonBillable: number;
  };
}
