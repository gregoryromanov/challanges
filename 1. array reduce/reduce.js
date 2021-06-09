Array.prototype.my_reduce = function(f, acc) {
	if(!!this.length) acc = acc ? acc += this[0] : this[0];
	for(let i = 1; i < this.length; i++) acc = f(acc, this[i], i, this);
	return acc;
}

console.log([1, 2, 3, 4].my_reduce((acc, n) => acc + n));
console.log([1, 2, 3, 4].my_reduce((acc, n) => acc + n, 0));
console.log([].my_reduce((acc, n) => acc + n, 0));
