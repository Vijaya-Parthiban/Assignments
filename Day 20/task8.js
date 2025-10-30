function doTask(taskName, callback) {
  console.log(taskName + " is running...");
  callback();
}
function taskDone() {
  console.log("Task Complete");
}
doTask("Data Processing", taskDone);