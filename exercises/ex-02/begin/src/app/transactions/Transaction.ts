import TxTypes from './TxTypes';
import { Category } from '../categories/Category';
import { Person } from '../people/Person';
import { Account } from '../shared/Account';
import { HasId } from '../shared/HasId';

export interface Transaction extends HasId {
  id: string;
  payeeId: string;
  personId: string;
  categoryId: string;
  accountId: string;
  txType: TxTypes | string;
  txDate: string;
  amount: number;
  payee?: {[key: string]: any};
  category?: Category;
  person?: Person;
  account?: Account;
  txTypeName?: string;
  version: number;
  cleared?: boolean;
}
