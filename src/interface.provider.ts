import { inject, injectable } from 'tsyringe';
import { DI_TOKEN_SERVICE } from './di/service.registerer';
import { PackageKit } from './interface/packagekit.interface';
import { Service } from './types/service';

@injectable()
export class InterfaceProvider {
    constructor(@inject(DI_TOKEN_SERVICE) private service: Service) {}

    getPackageKitInterface(): Promise<PackageKit> {
        return new Promise<PackageKit>((resolve, reject) => {
            const callback = (err: unknown, packageKit: PackageKit) => {
                if (!err) {
                    resolve(packageKit);
                } else {
                    reject(err);
                }
            };

            this.service.getInterface<PackageKit>(
                'org/freedesktop/PackageKit',
                'org.freedesktop.PackageKit',
                callback
            );
        });
    }
}
