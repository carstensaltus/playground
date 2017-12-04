
export default class User {

    private name: string;
    private age: number;
    private createdAt: Date;
    private updatedAt: Date;

    constructor () {
        const date = new Date();
        this.createdAt = date;
        this.updatedAt = date;
    }

    public setName (name: string): void {
        this.name = name;
        this.updatedAt = new Date();
    }

    public getName (): string {
        return this.name;
    }

    public setAge (age: number): void {
        this.age = age;
        this.updatedAt = new Date();
    }

    public getAge (): number {
        return this.age;
    }

}