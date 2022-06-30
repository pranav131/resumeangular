export class Professional {
    id: number;
    title: string;
    company: string;
    year: number;
    isCurrentlyworking: boolean;
    des: string;

    constructor() {
        this.id = null;
        this.title = ' ';
        this.company = ' ';
        this.year = 0;
        this.isCurrentlyworking = false;
        this.des = '';
    }
}
