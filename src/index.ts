import 'reflect-metadata';
import { container } from 'tsyringe';
import { PackagekitProvider } from './packagekit.provider';
import { TransactionProvider } from './transaction.provider';

export function getPackageKitProvider(): PackagekitProvider {
    return container.resolve(PackagekitProvider);
}

export function getTransactionProvider(): TransactionProvider {
    return container.resolve(TransactionProvider);
}
