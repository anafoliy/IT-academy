function deleteSpace(str = "      32/   te xt    23    ") {
    let first = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            first = i;
            break;
        }
    }
    let last = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== " ") {
            last = i;
            break;
        }
    }
    return `|${str.slice(first, last + 1)}|`;
}

console.log(deleteSpace());


//более короткий вариант, но мне кажется не эффективный так как в цикле каждый раз вызывается slice
function deleteSpace1(str = "      32/   te xt    23    ") {
    while (str.startsWith(" ")) {
        str = str.slice(1);
    }
    while (str.endsWith(" ")) {
        str = str.slice(0, -1);
    }
    return `|${str}|`;
}

