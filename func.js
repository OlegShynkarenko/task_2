function timeOfRide(obj, location, distance) {
  let time = obj.topSpeed / distance;
  console.log(`If you will ride ${obj.topSpeed} kilometers per hour on your 
    ${obj.color} ${obj.brand} ${obj.model} constantly you'll reach 
    ${location} in ${time.toFixed(2)} h.`);
}

export { timeOfRide };
