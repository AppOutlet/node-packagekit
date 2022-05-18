import { inject, injectable } from 'tsyringe';
import { INJECTION_TOKEN_SYSTEM_BUS } from './di/package-kit.register';
import { ClientInterface, MessageBus, ProxyObject } from 'dbus-next';
import { PackageKit } from './interface/packagekit.interface';
import { PackageKitProperties } from './packagekit.properties';

@injectable()
export class PackagekitProvider {
    static readonly PACKAGE_KIT_OBJECT_NAME = 'org.freedesktop.PackageKit';
    static readonly PACKAGE_KIT_INTERFACE_NAME = 'org.freedesktop.PackageKit';
    private static readonly PACKAGE_KIT_OBJECT_PATH =
        '/org/freedesktop/PackageKit';
    private static readonly DBUS_PROPERTIES_INTERFACE_NAME =
        'org.freedesktop.DBus.Properties';

    constructor(@inject(INJECTION_TOKEN_SYSTEM_BUS) private bus: MessageBus) {}

    getPackageKit(): Promise<PackageKit> {
        return this.getProxyObject().then((packageKitProxyObject) =>
            packageKitProxyObject.getInterface<PackageKit>(
                PackagekitProvider.PACKAGE_KIT_INTERFACE_NAME
            )
        );
    }

    getProperties(): Promise<PackageKitProperties> {
        return this.getProxyObject()
            .then((proxyObject) =>
                proxyObject.getInterface(
                    PackagekitProvider.DBUS_PROPERTIES_INTERFACE_NAME
                )
            )
            .then(
                (propertiesInterface) =>
                    new PackageKitProperties(propertiesInterface)
            );
    }

    private getProxyObject(): Promise<ProxyObject> {
        return this.bus.getProxyObject(
            PackagekitProvider.PACKAGE_KIT_OBJECT_NAME,
            PackagekitProvider.PACKAGE_KIT_OBJECT_PATH
        );
    }
}
