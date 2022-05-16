import { ClientInterface } from 'dbus-next';

export interface Transaction extends ClientInterface {
    Close(): Promise<void>;
}
