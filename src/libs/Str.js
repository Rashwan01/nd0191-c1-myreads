export default class Str {
    static str;

    constructor(str) {
        this.str = str;
    }

    static of(str) {
        return new Str(str);
    }

    headline() {
     return    this.str.toUpperCase().replace("", " ");
    }

}