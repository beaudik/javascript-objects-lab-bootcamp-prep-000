var recipes = {};

function  updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    return Object.assign(object, {[key]: value});
}
function deleteFromObjectByKey(object, key){
  //const doSomething = (obj, prop) => {
  let res = Object.assign({}, object)
  delete res[key]
  return res
}
