module.exports = function reverse (n) {
  if(n<0){
      n*=-1;
  }
  var splitString = n.toString().split(""); 

 
  var reverseArray = splitString.reverse();


  
  var joinArray = reverseArray.join(""); 


  return joinArray; 
}
