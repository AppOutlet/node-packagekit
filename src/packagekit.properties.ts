import { ClientInterface, Variant } from 'dbus-next';
import { PackagekitProvider } from './packagekit.provider';

export class PackageKitProperties {
    constructor(private propertiesInterface: ClientInterface) {}

    getVersionMajor(): Promise<number> {
        return this.propertiesInterface
            .Get(PackagekitProvider.PACKAGE_KIT_INTERFACE_NAME, 'VersionMajor')
            .then((variant: Variant<number>) => variant.value);
    }
}
