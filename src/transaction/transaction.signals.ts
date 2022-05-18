import { Subject } from 'rxjs';
import { Transaction } from './transaction.interface';

export class TransactionSignals {
    details = new Subject<unknown>();
    package = new Subject<unknown>();

    constructor(private transaction: Transaction) {
        this.setupSignals();
    }

    private setupSignals() {
        this.transaction.on('Details', (...args: unknown[]) => {
            this.details.next(args);
        });

        this.transaction.on('Package', (...args: unknown[]) => {
            this.package.next(args);
        });
    }
}

export interface PackageDetail {
    parentId: string;
    catId: string;
    name: string;
    summary: string;
    icon: string;
}
