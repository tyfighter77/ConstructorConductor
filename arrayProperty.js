//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.

// String.prototype.reverse = function(){
//   return this.reverse();
// };

String.prototype.reverse = function(){
  var backwards = [];
  for (var i = this.length - 1; i >= 0; i--){
    backwards.push(this[i]);
  }
  return backwards.join("");
};
