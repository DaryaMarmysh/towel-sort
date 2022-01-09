
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var res=[];
  for (var prop in matrix) {
    array = Array.from(matrix[prop]); 
    if(prop%2==0)
    {res=res.concat(array);}
    else
    {
    array=array.reverse();
    res=res.concat(array);
    }
    
  }
 return res;
}
