export interface Employee {
  name: string;
  id: number;
  capacity: number;
  avatarURL: string;
  archived: boolean;
  hoursOnWeek: {
    total: number;
    billable: number;
    nonBillable: number;
  };
}
