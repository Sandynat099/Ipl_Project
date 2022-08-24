const csv=require('csvtojson')

async function EXTRARUNS(){


const deliveries=await csv().fromFile("deliveries.csv");
var map = {};
for(var obj of deliveries){

  if(parseInt(obj["match_id"])>=577 && parseInt(obj["match_id"])<=636){
    if(map[obj["bowling_team"]]){
  map[obj["bowling_team"]]+=parseInt(obj["extra_runs"])
  } else {
    map[obj["bowling_team"]]=parseInt(obj["extra_runs"])
  }
} 
} return map;
}

let runs=EXTRARUNS();

runs.then((data)=>{
console.log(data)
})
