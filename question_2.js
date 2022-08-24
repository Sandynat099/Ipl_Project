let matches = require('./matches.json');

function matchesWon(year){
    let winners = {};
    for (var obj of matches){
      if (obj["season"] == year){
        if(winners[obj["winner"]]) {
          winners[obj["winner"]] += 1;
        } else {
          winners[obj["winner"]] = 1;
      }
    }
    
  } return winners;
}


for (var x=2008 ; x<=2017; x=x+1){
  var winners= matchesWon(x);
  console.log(x)
  console.log(winners);
}
