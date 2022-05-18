import { ClientInterface } from 'dbus-next';

export interface PackageKit extends ClientInterface {
    CreateTransaction(): Promise<string>;
}
