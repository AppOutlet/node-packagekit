import { InjectionToken } from 'tsyringe';
import { container } from 'tsyringe';
import { MessageBus, systemBus } from 'dbus-next';

export const INJECTION_TOKEN_SYSTEM_BUS: InjectionToken<string> =
    'node.bus.system';

container.register<MessageBus>(INJECTION_TOKEN_SYSTEM_BUS, {
    useValue: systemBus(),
});
