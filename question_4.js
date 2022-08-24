const csv=require('csvtojson');
async function ECONOMY(){


const deliveries=await csv().fromFile("deliveries.csv");
var map = {};
    var bowler=[];
    for(var obj of deliveries){
      if(parseInt(obj["match_id"])>=518 && parseInt(obj["match_id"])<=576){
        if(bowler.includes(obj["bowler"])){
        } else {
            bowler.push(obj["bowler"]);
        }   
        }
    }
 var list = [];
for(var i=0; i<bowler.length; i++){
    var bowl = bowler[i];
    var over =0;
    var count =0;
    for(var obj of deliveries){
        if(parseInt(obj["match_id"])>=518 && parseInt(obj["match_id"])<=576){
            if(obj["bowler"] == bowl){
            if(parseInt(obj.over)!=over){
                over = obj.over;
                count++;
            }else{
                over+=1
            }
        }
    }

}   
list.push(count);
} 
var total = [];
for(var obj of deliveries){
  if(parseInt(obj["match_id"])>=518 && parseInt(obj["match_id"])<=576){
    if(total[obj["bowler"]]){
  total[obj["bowler"]]+=parseInt(obj["total_runs"])
  } else {
    total[obj["bowler"]]=parseInt(obj["total_runs"])
  }
} 
}
var x=0;
for(let key in total){
     total[key]=(total[key]/list[x]).toFixed(2);
     x++;
    
}
let economy = Object.keys(total).map(function(key) {
    return [key, total[key]];
  }).sort(function(a, b){ return a[1] - b[1]; });

return economy
}

let runs=ECONOMY();
runs.then((data)=>{
    for(let i=0;i<10;i++){
        console.log(data[i])
    }
})