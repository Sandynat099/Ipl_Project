let matches = require('./matches.json');

var matchCount = {};

for (var obj of matches){
    if (matchCount[obj["season"]]) {
        matchCount[obj["season"]] += 1;
    } else {
        matchCount[obj["season"]] = 1;
    }
} console.log(matchCount);
