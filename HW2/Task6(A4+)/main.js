let str = "Q w?erT.yеьhЪё(yt;)  !  re:w,q-";

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[\s-.,;?:!)(]/g, '').replaceAll('ё', 'е').replaceAll('ъ', 'ь');
    if (str.length <= 1) {
        return true;
    } else if (str[0] === str[str.length - 1] && str.length > 1) {
        str = str.slice(1, str.length - 1);
    } else {
        return false;
    }
    return isPalindrome(str);
}

console.log(isPalindrome(str));