export class DogAPI {
    public message: any;
    public status: string;
    public errorCode: number;

    constructor(message: {}, status: string, errorCode?: number) {
        this.message = message;
        this.status = status || '';
        this.errorCode = errorCode || 0;
    }
}
