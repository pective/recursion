function mergeSort(arr) {
	if (arr.length == 0 || arr.length == 1) return arr;

	let m = Math.floor(arr.length / 2);
	let leftSide = arr.slice(0, m);
	let rightSide = arr.slice(m, arr.length);


	let left = mergeSort(leftSide);
	let right = mergeSort(rightSide);

	return merge(left, right);
}

function merge(left, right) {
	let sortedArr = [];

	let [i, j] = [0, 0];
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			sortedArr.push(left[i]);
			i++;
		} else if (right[i] < left[i]) {
			sortedArr.push(right[j]);
			j++;
		} else {
			sortedArr.push(left[i], right[j]);
			i++;
			j++;
		}

	}

    if (left[i]) sortedArr.push(...left.slice(i));
    else if (right[j]) sortedArr.push(...right.slice(j));

    return sortedArr;
}

console.log(mergeSort([100,102,120,130,103]));