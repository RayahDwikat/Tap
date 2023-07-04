var Duplicate = function(nums) {
    let data = new Set();
    for (let x of nums) {
        if (data.has(x)) {
            return true;
        }
        data.add(x);
    }
    return false;
};