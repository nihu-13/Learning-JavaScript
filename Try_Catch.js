//try and catch -> try to run code, if it fails, catch it and print the error
try {
  console.log(myVar);
} catch (err) {
  console.log(err);
}
// finally -> always runs, whether or not the code ran successfully or not and if try or catch run half it wil run finally
try {
  console.log(myVar);
} catch (err) {
  console.log(err);
} finally {
  console.log('This is always printed');
}

//also we can create custom error messages
try {
  throw new Error('This is an error');
  //another way to write it
  //throw new errorname(message)

} catch (err) {
  console.log(err.name);
  console.log(err.message);
}