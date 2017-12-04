export default class Animal {

    private _name: string;
    private _type: string;
    public description: string;

    constructor () {
        // 
    }

    /**
     * NOTE a getter function for name to access
     * the name property easier.
     */
    public getName (): string {
        return this._name;
    }

    public setName (name: string): void {
        this._name = name;
    }

    public getType (): string {
        return this._type;
    }

    

    /**
     * NOTE "Protected" methods can only be accessed
     * from child classes.
     * 
     * @param type 
     */
    protected setType (type: string): void {
        this._type = type;
    }

}