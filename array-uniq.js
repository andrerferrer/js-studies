// Uniq with array#filter
const uniq = (array) => {
  return array.filter((element, index, self) => {
    return self.indexOf(element) === index;
  });
};

// Uniq with hashes
const uniqPlus = (array) => {
  const hash = {};
  return array.filter((element) => {
    // return hash[element] ? false : (hash[element] = true);
    // Refactor to make it eslint-friendly
    if (hash[element]) return false;

    hash[element] = true;
    return true;
  });
};

// This is ugly but faster
const uniqFromScratch = (array) => {
	const length = array.length
	const result = []
	let lastInputedPosition = 0
	const seenItems = {}

	for (let i = 0; i < length; i++) {
		const item = array[i]
		if (!seenItems[item]) {
			result[lastInputedPosition] = item
			lastInputedPosition++
			seenItems[item] = true
		}
	}

	return result
}

// These are ES6 beauties
const uniqWithSet = array => Array.from(new Set(array));
const uniqWithSetSexier = array => [...new Set(array)];

const text = "banana da terra banana da água"
const array = text.split(" ")

const allOfThemWork =   uniqWithSetSexier(array) && 
						uniqWithSet(array) && 
						uniqFromScratch(array) && 
						uniqPlus(array) && 
						uniq(array)

console.log( allOfThemWork ? "they all work!" : "not all of them work" )