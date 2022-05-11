import 'reflect-metadata';
import { container, inject, injectable } from 'tsyringe';
import { DI_TOKEN_SERVICE } from './di/service.registerer';
import { PackageKitDbus } from './interface/packagekit-dbus.interface';
import { TransactionDbus } from './interface/transaction-dbus.interface';
import { Service } from './types/service';

@injectable()
export class InterfaceProvider {
    constructor(@inject(DI_TOKEN_SERVICE) private service: Service) {}

    getPackageKitInterface(): Promise<PackageKitDbus> {
        return new Promise<PackageKitDbus>((resolve, reject) => {
            this.service.getInterface<PackageKitDbus>(
                '/org/freedesktop/PackageKit',
                'org.freedesktop.PackageKit',
                (err, packageKit) => {
                    if (!err) {
                        resolve(packageKit);
                    } else {
                        reject(err);
                    }
                }
            );
        });
    }

    getTransactionInterface(path: string): Promise<TransactionDbus> {
        return new Promise<TransactionDbus>((resolve, reject) => {
            this.service.getInterface<TransactionDbus>(
                path,
                'org.freedesktop.PackageKit.Transaction',
                (err, packageKit) => {
                    if (!err) {
                        resolve(packageKit);
                    } else {
                        reject(err);
                    }
                }
            );
        });
    }

    static create(): InterfaceProvider {
        return container.resolve(InterfaceProvider);
    }
}
