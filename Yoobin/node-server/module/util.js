const fs = require('fs');


const filePath = './data';

/**
 * get data
 * 
 * get data from "../data"
 * 
 * data has just 3 lines
 * 
 * 1. power
 * 2. rotation
 * 3. timer
 * 
 * @param {string} type
 * @return {string} data of type
 */

function getData(type) {
  const types = ['power', 'rotation', 'timer', 'powerAuto', 'rotateAuto']

  const data = fs.readFileSync(filePath, 'utf8');
  const lines = data.split('\n');
  const index = types.indexOf(type);

  return lines[index];
}

/**
 * set data
 * 
 * set data to "../data"
 * 
 * data has just 3 lines
 * 
 * 1. power
 * 2. rotation
 * 3. timer
 */

function setData(type, value) {
  const types = ['power', 'rotation', 'timer']

  const data = fs.readFileSync(filePath, 'utf8');
  const lines = data.split('\n');
  const index = types.indexOf(type);
  lines[index] = value;
  const newData = lines.join('\n');
  fs.writeFileSync(filePath, newData);
}


function runProcess(type, mode) {

}

module.exports = {
  getData,
  setData,
};