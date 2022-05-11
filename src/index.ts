import { InterfaceProvider } from './interface.provider';
import { PackageKit } from './packagekit';

async function teste() {
    try {
        console.log('getting interface');
        const packageKit = await PackageKit.create();
        const transaction = await packageKit.createTransaction();
        console.log('received', transaction);
    } catch (e) {
        console.error(e);
    }
}

teste().then();
