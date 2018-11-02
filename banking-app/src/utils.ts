import { ParamMap } from '@angular/router';
import * as _ from 'lodash';

export function convertParamMapToObject( map: ParamMap ) {
  const obj = {};
  map.keys.forEach( key => {
    if (map.get(key)) {
      obj[ key ] = map.get( key );
    }
  }  );
  return obj;
}

export function logThis(thing) {
  console.log(`thing: ${thing}`);
  console.log(`_.isUndefined(thing): ${_.isUndefined(thing)}`);
  console.log(`_.isNull(thing): ${_.isNull(thing)}`);
  console.log(`_.isEmpty(thing): ${_.isEmpty(thing)}`);
  console.log(`_.isArray(thing): ${_.isArray(thing)}`);
  console.log(`_.isObject(thing): ${_.isObject(thing)}`);
}
