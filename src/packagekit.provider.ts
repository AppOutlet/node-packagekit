import { inject, injectable } from 'tsyringe';
import { INJECTION_TOKEN_SYSTEM_BUS } from './di/package-kit.register';
import { MessageBus } from 'dbus-next';
import { PackageKit } from './interface/packagekit.interface';

@injectable()
export class PackagekitProvider {
    static readonly PACKAGE_KIT_OBJECT_NAME = 'org.freedesktop.PackageKit';
    private static readonly PACKAGE_KIT_INTERFACE_NAME =
        'org.freedesktop.PackageKit';
    private static readonly PACKAGE_KIT_OBJECT_PATH =
        '/org/freedesktop/PackageKit';

    constructor(@inject(INJECTION_TOKEN_SYSTEM_BUS) private bus: MessageBus) {}

    getPackageKit(): Promise<PackageKit> {
        return this.bus
            .getProxyObject(
                PackagekitProvider.PACKAGE_KIT_OBJECT_NAME,
                PackagekitProvider.PACKAGE_KIT_OBJECT_PATH
            )
            .then((packageKitProxyObject) =>
                packageKitProxyObject.getInterface<PackageKit>(
                    PackagekitProvider.PACKAGE_KIT_INTERFACE_NAME
                )
            );
    }
}
