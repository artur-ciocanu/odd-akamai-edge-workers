// All these are required to ensure everything runs smoothly
// in an Akamai EdgeWorker
var window = {};
var TextDecoder = function() {};
var setTimeout = function(callback) { callback(); };
