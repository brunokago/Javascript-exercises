let longeststring = (words) => {
    var prefix = "";

    for (let i = 0; i < words[0].length; i++) {
        let comparison = words[0][i];

        for (let j = 1; j < words.length; j++) {
            if (words[j][i] !== comparison) {
                return prefix;
            }
        }

        prefix += comparison;
    }

    return prefix;
}

console.log(longeststring(['red', 'relue', 'rellow']));

