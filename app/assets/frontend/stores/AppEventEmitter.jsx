// events library
import { EventEmitter } from 'events';

const CHANGE_EVENT = "CHANGE_EVENT";

class AppEventEmitter extends EventEmitter {
  // EventEmitter functions
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

export default AppEventEmitter;
