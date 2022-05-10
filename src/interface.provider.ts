import { inject, injectable } from 'tsyringe';
import { DI_TOKEN_SERVICE } from './di/service.registerer';
import { PackageKit } from './interface/packagekit.interface';
import { Transaction } from './interface/transaction.interface';
import { Service } from './types/service';

@injectable()
export class InterfaceProvider {
    constructor(@inject(DI_TOKEN_SERVICE) private service: Service) {}

    getPackageKitInterface(): Promise<PackageKit> {
        return new Promise<PackageKit>((resolve, reject) => {
            this.service.getInterface<PackageKit>(
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

    getTransactionInterface(path: string): Promise<Transaction> {
        return new Promise<PackageKit>((resolve, reject) => {
            this.service.getInterface<PackageKit>(
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
}
