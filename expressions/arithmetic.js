import Expression from "../abstract/expression.js";

class Arithmetic extends Expression {
    constructor(line, column, left, right, op){
        super(line, column);
        this.left = left;
        this.right = right;
        this.op = op;
    }

    execute(env) {
        console.log("Expresion aritmetica");
    }
}

export default Arithmetic;