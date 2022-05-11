import { TransactionDbus } from './interface/transaction-dbus.interface';
import { Subject } from 'rxjs';

export class Transaction {
    readonly onDestroy = new Subject<Transaction>();
    private active = true;

    constructor(private transactionDbus: TransactionDbus, public path: string) {
        this.initSignalListeners();
    }

    private initSignalListeners(): void {
        this.initOnDestroyListener();
    }

    private initOnDestroyListener(): void {
        this.transactionDbus.on('Destroy', () => {
            this.active = false;
            this.onDestroy.next(this);
            this.clearSubscriptions();
        });
    }

    private clearSubscriptions() {

        const observables = [this.onDestroy];

        observables.forEach((obs) => {
            obs.unsubscribe();
        });
    }
}
