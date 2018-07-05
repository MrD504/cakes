export class Cake {
    id: number;
    name: string;
    comment: string;
    imageUrl: string;
    yumFactor: number;

    constructor(values?: CakeInterface) {
        Object.assign(this, values);
    }
}

export interface CakeInterface {
    id?: number;
    name?: string;
    comment?: string;
    imageUrl?: string;
    yumFactor?: number;
}