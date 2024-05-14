// Задача 1
// Написать алгоритм мёржинга двух отсортированных массивов в отсортированный массив. Исходные массивы могут быть разного размера.

function merge(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

console.log(merge([2, 4, 7, 11], [1, 3, 4, 5, 8, 12]));  
console.log(merge([2, 4, 7, 11], [8, 12]));             

// Задача 2
// Решить эту задачу для трёх исходных массивов.

function mergeThree(arr1, arr2, arr3) {
    const merged = [];
    let i = 0, j = 0, k = 0;
    
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
            merged.push(arr1[i]);
            i++;
        } else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
            merged.push(arr2[j]);
            j++;
        } else {
            merged.push(arr3[k]);
            k++;
        }
    }
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length && k < arr3.length) {
        if (arr1[i] <= arr3[k]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr3[k]);
            k++;
        }
    }
    
    while (j < arr2.length && k < arr3.length) {
        if (arr2[j] <= arr3[k]) {
            merged.push(arr2[j]);
            j++;
        } else {
            merged.push(arr3[k]);
            k++;
        }
    }
    
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    
    while (k < arr3.length) {
        merged.push(arr3[k]);
        k++;
    }
    
    return merged;
}

console.log(mergeThree([2, 4, 7, 11], [8, 12], [4, 9, 11]));  