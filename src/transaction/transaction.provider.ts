import { inject, injectable } from 'tsyringe';
import { INJECTION_TOKEN_SYSTEM_BUS } from '../di/package-kit.register';
import { MessageBus } from 'dbus-next';
import { Transaction } from './transaction.interface';
import { PackagekitProvider } from '../packagekit/packagekit.provider';

@injectable()
export class TransactionProvider {
    private static readonly TRANSACTION_INTERFACE_NAME =
        'org.freedesktop.PackageKit.Transaction';

    constructor(@inject(INJECTION_TOKEN_SYSTEM_BUS) private bus: MessageBus) {}

    getTransaction(transactionPath: string): Promise<Transaction> {
        return this.bus
            .getProxyObject(
                PackagekitProvider.PACKAGE_KIT_OBJECT_NAME,
                transactionPath
            )
            .then((transactionProxyObject) =>
                transactionProxyObject.getInterface<Transaction>(
                    TransactionProvider.TRANSACTION_INTERFACE_NAME
                )
            );
    }
}
