import { ClientInterface } from 'dbus-next';

export interface Transaction extends ClientInterface {
    Close(): Promise<void>;

    SearchNames(filter: number, values: string[]): Promise<void>;

    GetPackages(filter: number): Promise<void>;
}

export enum TransactionSignal {
    PACKAGE = 'Package',
}

export enum PackageInfo {
    INSTALLED = 1,
    AVAILABLE = 2,
}

export enum SearchNamesFilter {}
