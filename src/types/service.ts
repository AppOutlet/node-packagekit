export interface Service {
    getInterface<DbusInterface>(
        path: string,
        name: string,
        callback: (err: unknown, dbusInterface: DbusInterface) => void
    ): void;
}
