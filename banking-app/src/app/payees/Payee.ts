import { Address } from '../shared/Address';
import { Category } from '../categories/Category';

export interface Payee {
  id: string;
  version: number;
  payeeName: string;
  categoryId: string;
  image?: string;
  motto?: string;
  active: boolean;
  address: Address;
  category?: Category;
}
