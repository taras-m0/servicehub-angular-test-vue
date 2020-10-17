const listeners = { };

export function sendBroadcast(name, value) {
  if(window.localStorage){
    window.localStorage[`broadcast_${name}`] = JSON.stringify(value);
  }
}

export function addBroadcastListener(name, cb) {
  if(!listeners[`broadcast_${name}`]){
    listeners[`broadcast_${name}`] = [ cb ];
  }else {
    listeners[`broadcast_${name}`].push( cb );
  }
}

export function clearBroadcastListeners(name) {
  listeners[`broadcast_${name}`] = [ ];
}

window.addEventListener('storage', function(event) {
  Object.keys(listeners).filter((key) => (key == event.key)).forEach((key) => {
    listeners[event.key].forEach((cb) => {
      if( typeof cb == 'function') {
        cb(JSON.parse(window.localStorage[event.key]));
      }
    })
  })
});
