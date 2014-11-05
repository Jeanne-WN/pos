function loop(times, callback){
  for(var i = 0; i < times; i++){
    callback.apply(null, Array.prototype.slice.call(arguments, 2));
  }
}
