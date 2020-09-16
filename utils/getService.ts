import EmployeesService from 'services/EmployeesService';
import OwnApiEmployeesService from 'services/OwnApiEmployeesService';
import { isClient } from './isClient';

export const getService = () => (isClient ? new OwnApiEmployeesService() : new EmployeesService());
