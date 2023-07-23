import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((data) => json(data))
        .then((value) => JSON.parse(value))
        .then((saving) => resolve(saving))
        .catch((error) => reject(new Error('Failed to load game saving')));
    });
  }
}
