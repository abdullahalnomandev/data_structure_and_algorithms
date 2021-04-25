let exampleArray = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

const target = 3;

const binarySearch = (numbers, target) => {

    let start = 0;
    let end = exampleArray.length - 1;

    while (start <= end) {


        let mid = Math.floor((start + end) / 2);
        if (exampleArray[mid] === target) {
            console.log("item form position", mid);
            return mid;
        }
        if (numbers[mid] < target) {

            start = mid + 1;
        }
        if (numbers[mid] > target) {

            end = mid - 1;
        }
    }
    return -1;

}

const index = binarySearch(exampleArray, target)

console.log(index);

