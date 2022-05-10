import 'reflect-metadata';
import { container } from 'tsyringe';
import { InterfaceProvider } from './interface.provider';

const interfaceProvider = container.resolve(InterfaceProvider);

async function teste() {
    try {
        console.log('getting interface');
        const e = await interfaceProvider.getPackageKitInterface();
        const t = e.createTransaction();
        console.log('received', t);
    } catch (e) {
        console.error(e);
    }
}

teste().then();

setTimeout(()=>{}, 10000)