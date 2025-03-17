function validAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    var str1Map = {};
    var str2Map = {};
    for (var _i = 0, str1_1 = str1; _i < str1_1.length; _i++) {
        var char = str1_1[_i];
        str1Map[char] = (str1Map[char] || 0) + 1;
    }
    for (var _a = 0, str2_1 = str2; _a < str2_1.length; _a++) {
        var char = str2_1[_a];
        str2Map[char] = (str2Map[char] || 0) + 1;
    }
    for (var key in str1Map) {
        if (!(key in str2Map)) {
            return false;
        }
        if (str1Map[key] !== str2Map[key]) {
            return false;
        }
    }
    return true;
}
validAnagrams('hello', 'world');
validAnagrams('restful', 'fluster');
validAnagrams('hello', 'world');
