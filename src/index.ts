import { PackageKit } from './packagekit';
import { container } from 'tsyringe';
import { TransactionProvider } from './transaction.provider';
import { SearchFilter } from './search-filter.enum';

async function teste() {
    try {
        console.log('getting interface');
        const packageKit = await PackageKit.create();
        const transactionPath = await packageKit.createTransaction();
        const transactionProvider = container.resolve(TransactionProvider);
        const transaction = await transactionProvider.getTransaction(
            transactionPath
        );
        await transaction.cancel();
    } catch (e) {
        console.error(e);
    }
}

teste().then();
