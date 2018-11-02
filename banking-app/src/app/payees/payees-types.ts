import { Address } from '../shared/Address';
import { Category } from '../categories/Category';

export enum PayeeViews {
  LIST,
  DETAIL
}

export interface SortCriteria {
  sortField?: string;
  ascending?: boolean;
}

export interface PayeeForm {
  id?: string;
  version?: number;
  payeeName?: string;
  categoryId?: string;
  address?: Address;
  image?: string;
  motto?: string;
  category?: Category;
  active?: boolean;
}

export interface PayeesSearchCriteria extends SortCriteria {
  payeeName?: string;
  categoryId?: string;
  address?: Address;
  image?: string;
  motto?: string;
  category?: Category;
  active?: boolean;
}
