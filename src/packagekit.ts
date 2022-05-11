import { container, injectable } from 'tsyringe';
import { InterfaceProvider } from './interface.provider';
import { PackageKitDbus } from './interface/packagekit-dbus.interface';

export class PackageKit {
    static create(): Promise<PackageKit> {
        const interfaceProvider = InterfaceProvider.create();
        return interfaceProvider
            .getPackageKitInterface()
            .then((packageKitDBus) => new PackageKit(packageKitDBus));
    }

    constructor(private packageKitDbus: PackageKitDbus) {}

    createTransaction(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.packageKitDbus.CreateTransaction((err, transactionPath) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(transactionPath);
                }
            });
        });
    }
}
