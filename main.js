//返回数列的最小值
//递归方法
let min = (number) => {
    if (number.length > 2) {
        return min([number[0], min(number.slice(1))]);
    } else {
        return Math.min.apply(null, number);
    }
};
//循环方法
// let minCycle = (number) => {
//     return number[minIndexCycle(number)];
// };

//选择排序
//递归方法
let minIndex = (number) => number.indexOf(min(number));

//递归方法
let sort = (number) => {
    if (number.length > 2) {
        let index = minIndex(number);
        let min = number[index];
        number.splice(index, 1);
        return [min].concat(sort(number));
    } else {
        return number[0] < number[1] ? number : number.reverse();
    }
};

//选择排序
//循环方法
let minIndexCycle = (number) => {
    let minIndex = 0;
    for (let i = 1; i < number.length; i++) {
        if (number[i] < number[minIndex])
            minIndex = i;
    }
    return minIndex;
};

let swap = (number, a, b) => {
    number[a] = number[a] ^ number[b];
    number[b] = number[a] ^ number[b];
    number[a] = number[a] ^ number[b];
    return number;
}

//循环方法
let sortCycle = (number) => {
    for (let i = 0; i < number.length - 1; i++) {
        console.log("------");
        console.log(`i:${i}`);
        // let tempNumber = number.slice(i);
        // let minIndex = minIndexCycle(tempNumber) + i;
        // 第i项及之前数列都是排好序的，只用考虑第i项之后的数列排序
        // minIndexCycle(tempNumber)得到的是剔除前i项排好序数列之后的新数组中，最小数在该数组中的下标
        // 由于新数组下标是重新从零开始的，要找到此最小数在number中对应的下标。应该加i。
        let minIndex = minIndexCycle(number.slice(i)) + i;
        console.log(`minIndex:${minIndex}`);
        console.log(`min:${number[minIndex]}`);
        //找到number中最小数字的下标，然后将其与当前下标的数字交换位置
        if (minIndex != i)
            swap(number, minIndex, i);
        console.log(`number:[${number}]`);
    }
    return number;
};
