let years = [1996, 200, 1568, 1991, 2008, 2020];

function getGenZ(birthYear) {
    if (birthYear > 1996) {
        console.log(birthYear);
    }
}

const genZ = years.filter(birthYear => getGenZ(birthYear));