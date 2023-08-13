function outer(x) {
	return function (y) {
		return x + y;
	};
}

const createClosure = outer(10);

const closureReturn = createClosure(2);

console.log(closureReturn);
