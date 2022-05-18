import { ClientInterface } from 'dbus-next';

export interface Transaction extends ClientInterface {
    GetDetails(packageIds: string[]): Promise<void>;

    Close(): Promise<void>;

    SearchNames(filter: number, values: string[]): Promise<void>;

    GetPackages(filter: number): Promise<void>;

    SearchNames(filter: number, packages: string[]): Promise<string>;
}

export enum PackageInfo {
    INSTALLED = 1,
    AVAILABLE = 2,
}

export enum SearchNamesFilter {}
