import { isClient } from './isClient';
import EmployeesService from '../services/EmployeesService';
import OwnApiEmployeesService from '../services/OwnApiEmployeesService';

export const getService = () => (isClient ? new OwnApiEmployeesService() : new EmployeesService());
