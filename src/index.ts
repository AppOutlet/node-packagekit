import 'reflect-metadata';
import { container } from 'tsyringe';
import { PackagekitProvider } from './packagekit/packagekit.provider';
import { TransactionProvider } from './transaction/transaction.provider';

export function getPackageKitProvider(): PackagekitProvider {
    return container.resolve(PackagekitProvider);
}

export function getTransactionProvider(): TransactionProvider {
    return container.resolve(TransactionProvider);
}
