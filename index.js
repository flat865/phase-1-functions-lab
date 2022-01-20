// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance < 42){
        return 42 - distance;
    }else {distance > 42}
    return distance - 42;
 }
 function distanceFromHqInFeet(feet){
    if (feet < 42){
    return (42 - feet) * 264
}else{feet > 42}
   return (feet - 42) * 264
}
function distanceTravelledInFeet(start, destination){
    if (start < destination){
    return (destination - start) * 264
    }else {start > destination}
    return (start - destination) * 264
}
function calculatesFarePrice(beginning,end){
    let blocks = Math.abs(end - beginning) * 264;
    if (blocks <= 400){
    console.log ('free sample');
    return 0
    }
      else if(401 <= blocks && blocks <= 2000){
    return (blocks - 400) * 0.02}
    else if (blocks >= 2001 && 2500 >= blocks){
        return 25
    }else{blocks > 2500 
        return 'cannot travel that far';
    }
        
    }