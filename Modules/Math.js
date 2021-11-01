/* Named Exports allows to create Functions where are multiple Values exporting from a Module */
export const add = function(n1, n2) {
    return n1 + n2;
}

export const subtract = function(n1, n2) {
    return n1 - n2;
}

export const multiply = function(n1, n2) {
    return n1 * n2;
}

export const divide = function(n1, n2) {
    return n1 / n2;
}

export const PI = 3.141;

const nameOfLibrary = "Math.js";

export default nameOfLibrary;