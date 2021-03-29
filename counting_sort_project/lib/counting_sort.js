function countingSort(arr, max) {
    let counter = new Array(max + 1).fill(0);
    res = [];
    
    arr.forEach(num => {
        counter[num]++;
    })
    counter.forEach((num, idx) => {
        for(let i = num; i > 0; i--) {
            res.push(idx);
        }
    })
    return res;
    
}


module.exports = {
    countingSort
};