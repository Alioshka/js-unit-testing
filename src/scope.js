'use strict';

function Scope() {
    this.$$watchers = [];
}

Scope.prototype.$watch = function(watchFn, listenerFn) {
    let watcher = {
        watchFn: watchFn,
        listenerFn: listenerFn,
        last: initWatchVal
    };
    this.$$watchers.push(watcher);
};

Scope.prototype.$digest = function() {
    let oldValue;
    let newValue;
    this.$$watchers.forEach(watcher =>{
        newValue = watcher.watchFn(this);
        oldValue = watcher.last;
        if (newValue !== oldValue){
            watcher.last = newValue;
            watcher.listenerFn(newValue, oldValue, this);
        }
    });

};

function initWatchVal() { }

module.exports = Scope;