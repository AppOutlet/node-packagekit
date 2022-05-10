import { container } from 'tsyringe';
const dbus = require('dbus-native');
import { Service } from '../types/service';

export const DI_TOKEN_SERVICE = 'service';

container.register<Service>(DI_TOKEN_SERVICE, {
    useFactory: () => {
        const bus = dbus.systemBus();
        return bus.getService('org.freedesktop.PackageKit');
    },
});
