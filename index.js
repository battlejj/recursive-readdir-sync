var fs = require('fs')
  , p = require('path')
  ;

// how to know when you are done?
function recursiveReaddirSync(path, excludeFolders) {
  var list = []
    , files = fs.readdirSync(path)
    , stats
    ;

  files.forEach(function (file) {
    stats = fs.lstatSync(p.join(path, file));
    if (stats.isDirectory()) {
      if (IsArray(excludeFolders) && isObjInArray(file, excludeFolders))
        return;
      list = list.concat(recursiveReaddirSync(p.join(path, file), excludeFolders));
    } else {
      list.push(p.join(path, file));
    }
  });

  return list;
}

function IsArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function isObjInArray(obj, array) {
  var index = array.indexOf(obj);
  if (index === -1)
    return false;
  return true;
}

module.exports = recursiveReaddirSync;
