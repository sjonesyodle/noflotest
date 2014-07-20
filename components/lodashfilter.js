var noflo = require('noflo');
var _     = require('lodash');

exports.getComponent = function () {
  var c = new noflo.Component();

  c.inPorts.add('in', function (event, payload) {
    var firstProp;
    if (event !== 'data') {
      return;
    }
    
    payload = JSON.parse(payload);
    
    firstProp = (
    	payload[
          _.keys(
              payload
          )[0]
        ]
    )
    // Do something with the packet, then
    c.outPorts.out.send(firstProp);
  });
  c.outPorts.add('out');
  return c;
};