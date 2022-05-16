import { ClientInterface, systemBus } from 'dbus-next';

const bus = systemBus();

interface PackageKit extends ClientInterface {
    CreateTransaction(): Promise<string>;
}

async function testing() {
    const packageKitObj = await bus.getProxyObject(
        'org.freedesktop.PackageKit',
        '/org/freedesktop/PackageKit'
    );

    const packageKitInterface: ClientInterface =
        await packageKitObj.getInterface('org.freedesktop.PackageKit');

    const packageKit = packageKitInterface as PackageKit;

    const transactionPath = await packageKit.CreateTransaction();

    console.log('Transaction created', transactionPath);

    const transactionObj = await bus.getProxyObject(
        'org.freedesktop.PackageKit',
        transactionPath
    );

    const transactionInterface = await transactionObj.getInterface(
        'org.freedesktop.PackageKit.Transaction'
    );

    transactionInterface.on(
        'Package',
        (info: number, packageId: string, summary: string) => {
            const [packageName, version, arch, repo] = packageId.split(';');
            console.log('Package response', packageId);
            // transactionInterface.GetDetails([packageId]);
        }
    );

    transactionInterface.on('Details', function () {
        console.log('Details response', arguments);
    });

    // krita;1:5.0.2+dfsg-1build1;amd64;ubuntu-jammy-universe
    // await transactionInterface.GetPackages(0);
    // await transactionInterface.SearchNames(0, ['krita']);
    await transactionInterface.GetDetails([
        'krita;1:5.0.2+dfsg-1build1;amd64;ubuntu-jammy-universe',
    ]);
}

testing();
