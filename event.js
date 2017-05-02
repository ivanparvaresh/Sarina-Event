var events=require('events');
module.exports = function (sarina) {

    sarina.factory("event",  function () {
        return new events.EventEmitter();
    });

}