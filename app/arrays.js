exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i=0, arrlength=arr.length; i < arrlength; i++){
      if (arr[i] === item){
        return i;
       }
    }
return -1;
  },

  sum : function(arr) {
    var sum = 0;

    for(var i=0, arrlength=arr.length; i < arrlength; i++){
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {

  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;

  },

  truncate : function(arr) {
    arr.pop()
    return arr;

  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;

  },

  curtail : function(arr) {
    arr.shift(arr)
    return arr;

  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item)
    return arr;
  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {
    var occurance=[];

    for (var i = 0, arrlength=arr.length; i < arrlength; i++){
      if(arr[i] === target){
        occurance.push(i);
      }
    }
    return occurance;

  }
};
