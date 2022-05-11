import { inject, injectable } from 'tsyringe';
import { InterfaceProvider } from './interface.provider';
import { Transaction } from './transaction';

@injectable()
export class TransactionProvider {
    private transactionCache: any = {};

    constructor(private interfaceProvider: InterfaceProvider) {}

    getTransaction(transactionPath: string): Promise<Transaction> {
        if (this.transactionCache[transactionPath]) {
            return Promise.resolve(this.transactionCache[transactionPath]);
        }

        return this.interfaceProvider
            .getTransactionInterface(transactionPath)
            .then((transactionDbus) => {
                const transaction = new Transaction(
                    transactionDbus,
                    transactionPath
                );
                this.handleNewCreatedTransactions(transactionPath, transaction);
                return transaction;
            });
    }

    private handleNewCreatedTransactions(
        transactionPath: string,
        transaction: Transaction
    ): void {
        this.transactionCache[transactionPath] = transaction;
        transaction.onDestroy.subscribe((transaction) => {
            this.transactionCache[transaction.path] = null;
        });
    }
}
