import { Service } from "./service";

export interface Bus {
    getService(id: string): Service;
}
