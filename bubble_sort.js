
const numbers = [23, 43, 5, 43, 54, 23, 11];

function bubbleSort(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            if(array[j] > array[j+1]){

                const temp = array[j]
                array[j]=array[j+1];
                array[j+1]=temp
            }

        }

    }

    return array;
}

const sorted = bubbleSort(numbers)

console.log(sorted);