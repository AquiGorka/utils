/*
Array Combinations
Extend array prototype to return all the combinations of its elements.
*/
Array.prototype.combinations = Array.prototype.combinations || function() {
	var isArray = function(o) { return (o instanceof Array) || (Object.prototype.toString.apply(o) === "[object Array]"); },
		combinations = function(args) {
			var n, inputArr = [], copyArr = [], results = [],
			subfunc = function(copies, prefix) {
				var i, myCopy = [], exprLen, currentChar = "", result = "";
				// if no prefix, set default to empty string
				if (typeof prefix === "undefined") {
					prefix = "";
				}
				// no copies, nothing to do... return
				if (!isArray(copies) || typeof copies[0] === "undefined") {
					return;
				}
				// remove first element from "copies" and store in "myCopy"
				myCopy = copies.splice(0, 1)[0];
				// store the number of characters to loop through
				exprLen = myCopy.length;
				for (i = 0; i < exprLen; i += 1) {
					currentChar = myCopy[i];
					result = prefix + currentChar;
					// if resulting string length is the number of characters of original string,
					// we have a result
					if (result.length === n) {
						results.push(result);
					}
					// if there are copies left,
					//   pass remaining copies (by value) and result (as new prefix)
					//   into subfunc (recursively)
					if (typeof copies[0] !== "undefined") {
						subfunc(copies.slice(0), result);
					}
				}
			};
			// for each character in original string
			//   create array (inputArr) which contains original string (converted to array of char)
			if (typeof args.str === "string") {
				inputArr = args.str.split("");
				for (n = 0; n < inputArr.length; n += 1) {
					copyArr.push(inputArr.slice(0));
				}
			}
			if (isArray(args.arr)) {
				for (n = 0; n < args.arr.length; n += 1) {
					copyArr.push(args.arr[n].split(""));
				}
			}
			// pass copyArr into sub-function for recursion
			subfunc(copyArr);
			return results;
		};
	return combinations({str: this.join('')});
};
//console.log(['a','b','c'].combinations());
