import 'reflect-metadata';
import { container } from 'tsyringe';
import { InterfaceProvider } from './interface.provider';

const interfaceProvider = container.resolve(InterfaceProvider);

interfaceProvider
    .getPackageKitInterface()
    .then((packageKit) => {
        console.log('Success', packageKit);
    })
    .catch((err) => {
        console.error(err);
    });
