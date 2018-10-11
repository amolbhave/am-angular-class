import { Category } from '../categories/Category';
import { Address } from '../shared/Address';

export interface Payee {
    payeeName: string;
    id: string;
    address: Address;
    categoryId: string | number;
    image?: string;
    motto?: string;
    version: number;
    active: boolean;
    category?: Category;
}
