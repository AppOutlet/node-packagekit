import { ClientInterface, Variant } from 'dbus-next';
import { PackagekitProvider } from './packagekit.provider';

export class PackageKitProperties {
    constructor(private propertiesInterface: ClientInterface) {}

    private getProperty<T>(propertyName: string): Promise<T> {
        return this.propertiesInterface
            .Get(PackagekitProvider.PACKAGE_KIT_INTERFACE_NAME, propertyName)
            .then((variant: Variant<T>) => variant.value);
    }

    getVersionMajor(): Promise<number> {
        return this.getProperty('VersionMajor');
    }

    getVersionMinor(): Promise<number> {
        return this.getProperty('VersionMinor');
    }

    getVersionMicro(): Promise<number> {
        return this.getProperty('VersionMicro');
    }

    getDistroId(): Promise<DistroId> {
        return this.getProperty<string>('DistroId').then((distroId) => {
            const [distro, version, arch] = distroId.split(';');

            return {
                distro,
                version,
                arch,
            };
        });
    }
}

interface DistroId {
    distro: string;
    version: string;
    arch: string;
}
