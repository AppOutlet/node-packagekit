import { TransactionDbus } from './interface/transaction-dbus.interface';
import { Subject } from 'rxjs';
import { SearchFilter } from './search-filter.enum';

export class Transaction {
    readonly onDestroy = new Subject<Transaction>();

    private active = true;

    constructor(private transactionDbus: TransactionDbus, public path: string) {
        this.initSignalListeners();
    }

    private initSignalListeners(): void {
        this.registerDestroyListener();
    }

    // #region Methods
    searchNames(filter: SearchFilter, packages: string[]): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.transactionDbus.SearchNames(
                filter.valueOf(),
                packages,
                function (err) {
                    if (err) {
                        reject();
                    } else {
                        resolve();
                    }
                }
            );
        });
    }

    cancel(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.transactionDbus.Cancel((err) => {
                if (err) {
                    console.error('Cancel', err);
                    reject();
                } else {
                    console.log('cancel success');
                    resolve();
                }
            });
        });
    }

    // #endregion

    // #region Signals
    /**
     * This signal is sent when the transaction has been destroyed and is no longer available for use.
     */
    private registerDestroyListener(): void {
        this.transactionDbus.on('Destroy', () => {
            this.active = false;
            this.onDestroy.next(this);
            this.clearSubscriptions();
        });
    }

    /**
     *  This signal allows the backend to communicate packages to the session.
     *
     * If updating, as packages are updated then emit them to the screen. This allows a summary to be presented after the transaction.
     *
     * When returning results from a search always return installed before available for the same package name.
     */
    private registerPackageListener(): void {
        this.transactionDbus.on('Package', function () {
            console.log('packages', arguments);
        });
    }

    // #endregion

    // #region auxiliary methods
    private clearSubscriptions(): void {
        const observables = [this.onDestroy];

        observables.forEach((obs) => {
            obs.unsubscribe();
        });
    }

    // #endregion
}
