/*
Problem
  input  - NUMBER of switches
  output - ARRAY of light numbers that are on

  - You're given a number of light switches, n
  - all lights are initially off
  - do n repetitions,
    for i from 1 to n (inclusive)
      - toggle every i'th switch
  - return an array with the number of the switches that are on    
Examples
  - input => 3 
  - initial state => off, off, off
  - round 1       => on, on, on
  - round 2       => on, off, on
  - round 3       => on, off, off
Data Structure
  - object containing light switches
Algorithm
  1. given a lightsCount 
  2. create an lightsObject with keys from 1 to lightsCount (inclusive) with values of false
     - create an empty object (lightsObject)
     - from n = 1 until lightscount (inclusive)
      - lightsObject[n] = false
  3. loop from n = 1 until lightsCount (inclusive)
  4. toggleEveryNthLight(lightsObject, n, lightsCount)
    - lightNumber = n
    - from lightNumber <= lightsCount
      - lightsObject[lightNumber] = !lightsObject[lightNumber]
      - increment lightNumber by n
  5. turnedOnLights = []    
  6. loop over lightsObject, for every lightNum
    - if lightsObject[lightNum] is on
      - push the Number(lightNumber) into turnedOnLights
  7. return the turnedOnLights    

Questions
  - no input?
  - non positive integer input? (0, -1, 5.5)
*/

function lightsOn(lightsCount) {
  let lights = createLights(lightsCount);
  for (let n = 1; n <= lightsCount; n += 1) {
    toggleNthLight(lights, n, lightsCount);
  }
  let onLigths = turnedOnLights(lights);
  return onLigths;
}

function createLights(count) {
  let lights = {};
  for (let lightNumber = 1; lightNumber <= count; lightNumber += 1) {
    lights[lightNumber] = false;
  }
  return lights;
}

function toggleNthLight(lights, n, lightsCount) {
  let lightNumber = n;
  while (lightNumber <= lightsCount) {
    lights[lightNumber] = !lights[lightNumber];
    lightNumber += n;
  }
}

function turnedOnLights(lights) {
  let onLigths = [];
  for (lightNum in lights) {
    if (lights[lightNum]) {
      onLigths.push(Number(lightNum));
    }
  }
  return onLigths;
}

console.log(lightsOn(100));