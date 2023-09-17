// Function to divide JSON data into arrays by class (Alcohol)
export function divideByClass(jsonData) {
    const myArr = [];

    jsonData.forEach((item) => {
        // Parse 'Alcohol' property as an integer
        let x = (parseInt(item['Alcohol']));
        
        while (x > myArr.length) {
            // If 'x' is greater than the current array length, push empty arrays to fill the gap
            myArr.push([]);
        }

        // Add the current item to the appropriate class array based on 'x'
        myArr[x - 1].push(item);
    });

    console.log(myArr); // Log the result for debugging
    return myArr;
}

// Function to add a 'Gamma' property to JSON data
export function addGammaProperty(jsonData) {
    const newArr = jsonData.map((item) => {
        // Calculate 'Gamma' based on the formula and round it to 2 decimal places
        const gamma = item['Ash'] * item['Hue'] / item['Magnesium'];
        return { ...item, 'Gamma': parseFloat(gamma.toFixed(2)) }
    })
    return newArr;
}

// Function to find the mean of a specified property in an array
export function findMean(property, arr) {
    const sum = arr.reduce((acc, num) => acc + Number(num[property]), 0);
    const result = sum / arr.length;
    return parseFloat(result.toFixed(3))
}

// Function to find the median of a specified property in an array
export function findMedian(property, arr) {
    // Sort the array based on the specified property
    arr.sort((a, b) => a[property] - b[property]);

    const middle = Math.floor(arr.length / 2);
    let result;

    if (arr.length % 2 === 0) {
        // If the array length is even, calculate the median accordingly
        result = (arr[middle - 1][property] + arr[middle][property]) / 2;
    } else {
        // If the array length is odd, the median is the middle value
        result = arr[middle][property];
    }

    return parseFloat(result.toFixed(3))
}

// Function to find the mode of a specified property in an array
export function findMode(property, arr) {
    const frequencyMap = new Map();
    let maxFrequency = 0;
    let mode = [];

    for (const num of arr) {
        if (!frequencyMap.has(num[property])) {
            // If the property value is not in the map, add it with a frequency of 1
            frequencyMap.set(num[property], 1);
        } else {
            // If the property value is in the map, increment its frequency
            frequencyMap.set(num[property], frequencyMap.get(num[property]) + 1);
        }

        if (frequencyMap.get(num[property]) > maxFrequency) {
            // If the current frequency is greater than the maximum frequency, update the mode
            maxFrequency = frequencyMap.get(num[property]);
            mode = [num[property]];
        } else if (frequencyMap.get(num[property]) === maxFrequency) {
            // If the current frequency is equal to the maximum frequency, add it to the mode
            mode.push(num[property]);
        }
    }

    if (mode.length === arr.length) {
        // If all values have the same frequency, return an empty array as the mode
        return [];
    }

    return parseFloat(mode[0].toFixed(3))
}
