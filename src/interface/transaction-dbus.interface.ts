export interface TransactionDbus {
    SearchNames(
        filter: number,
        values: string[],
        callback: (err: unknown, args: unknown) => void
    ): void;

    SearchDetails(
        filter: number,
        values: string[],
        callback: (err: unknown, args: unknown) => void
    ): void;

    Cancel(callback: (err: unknown) => void): void;

    on(eventName: string, callback: (args: unknown) => void): void;
}
