function isAlice(findName) {
    if (!findName) return false;

    return findName.gender === 'female' && findName.name.toLowerCase() === 'alice';
}

function hasAlice(nameList) {
    if (!Array.isArray(nameList)) return false;

    for (let i = 0; i < nameList.length; i++) {
        const findName = nameList[i];
        if (isAlice(findName)) return true;
    }

    // forEach
    // let findNameflag = true;
    // nameList.forEach(findName => {
    //     if (!isAlice(findName)) {
    //         findNameflag = false;
    //     }
    // });

    // return findNameflag;

    // find
    // return Boolean(nameList.find(findName => isAlice(findName)));
    // return Boolean(nameList.find(isAlice));

    // findIndex
    // return nameList.findIndex(isAlice) >= 0;

    // return nameList.filter(isAlice).length > 0;
    return false;
}



const nameList = [
    { id: 1, name: 'Bob', gender: 'male' },
    { id: 2, name: 'Gaga', gender: 'female' },
    { id: 3, name: 'Alice', gender: 'female' },
];

hasAlice(nameList);