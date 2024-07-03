function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Export the randomFromArray function
module.exports = {
  randomFromArray: randomFromArray
};
