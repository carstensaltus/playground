import Animal from "./animal";

export default class Frog extends Animal {

    constructor () {
        super();
        this.setType("amphibia");
    }

    public jump (x: number, y: number, z: number) {
        console.log(`the frong is jumping ${x}, ${y}, ${z}`);
    }

}