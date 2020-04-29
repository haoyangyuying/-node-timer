function getCurrentTime() {
  const currentTime = new Date();
  return currentTime.toLocaleString();
}

exports.getCurrentTime = getCurrentTime;