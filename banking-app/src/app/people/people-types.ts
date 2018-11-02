import { Address } from '../shared/Address';

export interface SortCriteria {
  sortField?: string;
  ascending?: boolean;
}

export interface PersonForm {
  id?: string;
  version?: number;
  firstName?: string;
  lastName?: string;
  address?: Address;
  gender?: string;
  dateOfBirth?: string;
}

export interface PeopleSearchCriteria extends SortCriteria {
  id?: string;
  version?: number;
  firstName?: string;
  lastName?: string;
  address?: Address;
  gender?: string;
  dateOfBirth?: string;
}
