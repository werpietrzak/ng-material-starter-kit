export interface NewEmployeeModel {
  name: string;
  age: string;
  salary: string;
}

export interface EmployeeModelFromAPI {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

export interface EmployeeModel {
  id: number;
  name: string;
  salary: number;
  age: number;
  img: string;
}

