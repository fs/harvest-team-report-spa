export interface HomePageQuery {
  week?: string;
  year?: string;
}
export interface EmployeePageQuery extends HomePageQuery {
  id?: string;
}
