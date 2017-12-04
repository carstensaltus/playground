/**
 * https://www.youtube.com/watch?v=1Q4I63-hKcY&t=74s
 * 
 * Step 1: What (Abstraction) what do i need
 * Step 2: How
 * Step 3: Make complicated methods private (Encapsulation) bringing down complication
 */

export default class User {

    //---------------------------------------------------
    // ENCAPSULATION
    // Hiding all my properties
    //---------------------------------------------------

    private _id: number;
    private _name: string;
    private _username: string;
    private _age: number;
    private _gender: string;
    private _emails: string[];
    private _createdAt: Date;
    private _updatedAt: Date;
    private _options: UserOptions;

    //---------------------------------------------------
    // CONSTRUCTOR
    // Prepare the classes default state
    //---------------------------------------------------
 
    constructor (params: UserParams, options?: UserOptions) {
        this._username = params.username;
        this._createdAt = this.now();
        this.update();
        this.generateId();
        this._emails = [];

        if (params.name) {
            this._name = params.name;
        }

        if (params.gender) {
            this._gender = params.gender;
        }

        if (params.age) {
            this._age = params.age;
        }

        if (params.emails) {
            params.emails.forEach((email) => {
                this.addEmail(email);
            });
        }

        this._options = {
            validateEmail: options.validateEmail || true 
        };
    }
    
    //---------------------------------------------------
    // ABSTRACTION
    // only expose what i need by functions
    //---------------------------------------------------

    public getId (): number {
        return this._id;
    }

    public getName (): string {
        return this._name;
    }

    public getUsername (): string {
        return this._username;
    }

    public getAge (): number {
        return this._age;
    }

    public getEmails (): string[] {
        return this._emails;
    }

    public getGender (): string {
        return this._gender;
    }

    public getCreatedAt (): Date {
        return this._createdAt;
    }

    public getUpdatedAt (): Date {
        return this._updatedAt;
    }

    //---------------------------------------------------
    // public MUTATORS: mutates the properties of the object
    //---------------------------------------------------


    // SHOULD SET FUNCTIONS RETURN SOMETHING??
    public setName (name: string): void {
        this._name = name;
        this.update();
    }

    public setAge (age: number): void {
        this._age = age;
        this.update();
    }

    public addEmail (email: string): boolean {
        if (this._options.validateEmail && !this.isEmail(email)) {
            return false;
        }
        
        this._emails.push(email.toLowerCase().trim());
        this.update();
        return true;
    }

    public deleteEmail (email: string): number {
        const index = this._emails.indexOf(email);

        if (index === -1) {
            return index;
        }

        this._emails.splice(index, 1);
    }

    //---------------------------------------------------
    // internal/private MUTATOR methods
    //---------------------------------------------------

    private isEmail (email: string) {
        return typeof email === "string";
    }

    private update (): void {
        this._updatedAt = this.now();
    }

    private now (): Date {
        return new Date();
    }

    private randomNumber (start: number = 1, end:number = 10): number {
        return Math.floor((Math.random() * end) + start);
    }

    private generateId (): void {
        this._id = Date.now() + this.randomNumber(0, 4);
    }
}

export enum GENDER {
    Female = "female",
    Male = "male"
}

export interface UserParams {
    id?: number;
    name?: undefined|string;
    username: string;
    gender?: "male"|"female";
    emails?: string[];
    age?: number;
}

export interface UserOptions {
    validateEmail: boolean;
}