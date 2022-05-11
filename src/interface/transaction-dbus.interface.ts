export interface TransactionDbus {
    on(eventName: string, callback: (...args: any) => void): void;
}
