import { Person } from '../people/Person';
import { AccountType } from './AccountType';
import { HasId } from './HasId';

export interface Account extends HasId {
  id: string;
  personId: string;
  accountTypeId: string;
  startingBalance: number;
  person: Person;
  accountType: AccountType;
  accountName: string;
}
