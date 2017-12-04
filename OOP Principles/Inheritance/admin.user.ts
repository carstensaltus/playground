import User, { GENDER, UserOptions, UserParams } from "../../classes/user";

export { GENDER, UserOptions, UserParams };

export default class AdminUser extends User {

    private _roles: string[];

    constructor (params: UserParams, options?: UserOptions) {
        super(params, options);
        this._roles = ["AdminUser", "ClientUser"];
    }

    public getRoles(): string[] {
        return this._roles;
    }

}