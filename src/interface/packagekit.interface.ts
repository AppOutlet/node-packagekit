import { Transaction } from './transaction.interface';

export interface PackageKit {
    createTransaction(): Transaction;
}
