import { Address } from '../shared/Address';

export interface Person {
  firstName: string;
  lastName: string;
  dateOfBirth: string | Date;
  gender: string;
  id: string;
  address: Address;
  version: number;
}
