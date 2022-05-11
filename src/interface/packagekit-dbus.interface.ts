export interface PackageKitDbus {
    CreateTransaction(callback: (err: unknown, transactionPath: string) => void): any;
}
