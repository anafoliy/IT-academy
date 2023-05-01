function isPalindrome(str = "Q w?erT.yеьЪё(yt;)  !  re:w,q-") {
    str = str.toLowerCase().replace(/[\s-.,;?:!)(]/g, '').replaceAll('ё','е').replaceAll('ъ','ь');
    const len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome());