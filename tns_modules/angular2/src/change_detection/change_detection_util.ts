import {isPresent,
  isBlank,
  BaseException,
  Type} from 'angular2/src/facade/lang';
import {List,
  ListWrapper,
  MapWrapper,
  StringMapWrapper} from 'angular2/src/facade/collection';
import {ProtoRecord} from './proto_record';
import {ExpressionChangedAfterItHasBeenChecked} from './exceptions';
import {NO_CHANGE} from './pipes/pipe';
import {CHECK_ALWAYS,
  CHECK_ONCE,
  CHECKED,
  DETACHED,
  ON_PUSH} from './constants';
export var uninitialized = new Object();
export class SimpleChange {
  constructor(previousValue, currentValue) {
    this.previousValue = previousValue;
    this.currentValue = currentValue;
  }
}
Object.defineProperty(SimpleChange, "parameters", {get: function() {
    return [[assert.type.any], [assert.type.any]];
  }});
var _simpleChangesIndex = 0;
var _simpleChanges = [new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null)];
function _simpleChange(previousValue, currentValue) {
  var index = _simpleChangesIndex++ % 20;
  var s = _simpleChanges[index];
  s.previousValue = previousValue;
  s.currentValue = currentValue;
  return s;
}
export class ChangeDetectionUtil {
  static unitialized() {
    return uninitialized;
  }
  static arrayFn0() {
    return [];
  }
  static arrayFn1(a1) {
    return [a1];
  }
  static arrayFn2(a1, a2) {
    return [a1, a2];
  }
  static arrayFn3(a1, a2, a3) {
    return [a1, a2, a3];
  }
  static arrayFn4(a1, a2, a3, a4) {
    return [a1, a2, a3, a4];
  }
  static arrayFn5(a1, a2, a3, a4, a5) {
    return [a1, a2, a3, a4, a5];
  }
  static arrayFn6(a1, a2, a3, a4, a5, a6) {
    return [a1, a2, a3, a4, a5, a6];
  }
  static arrayFn7(a1, a2, a3, a4, a5, a6, a7) {
    return [a1, a2, a3, a4, a5, a6, a7];
  }
  static arrayFn8(a1, a2, a3, a4, a5, a6, a7, a8) {
    return [a1, a2, a3, a4, a5, a6, a7, a8];
  }
  static arrayFn9(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    return [a1, a2, a3, a4, a5, a6, a7, a8, a9];
  }
  static operation_negate(value) {
    return !value;
  }
  static operation_add(left, right) {
    return left + right;
  }
  static operation_subtract(left, right) {
    return left - right;
  }
  static operation_multiply(left, right) {
    return left * right;
  }
  static operation_divide(left, right) {
    return left / right;
  }
  static operation_remainder(left, right) {
    return left % right;
  }
  static operation_equals(left, right) {
    return left == right;
  }
  static operation_not_equals(left, right) {
    return left != right;
  }
  static operation_less_then(left, right) {
    return left < right;
  }
  static operation_greater_then(left, right) {
    return left > right;
  }
  static operation_less_or_equals_then(left, right) {
    return left <= right;
  }
  static operation_greater_or_equals_then(left, right) {
    return left >= right;
  }
  static operation_logical_and(left, right) {
    return left && right;
  }
  static operation_logical_or(left, right) {
    return left || right;
  }
  static cond(cond, trueVal, falseVal) {
    return cond ? trueVal : falseVal;
  }
  static mapFn(keys) {
    function buildMap(values) {
      var res = StringMapWrapper.create();
      for (var i = 0; i < keys.length; ++i) {
        StringMapWrapper.set(res, keys[i], values[i]);
      }
      return res;
    }
    switch (keys.length) {
      case 0:
        return () => [];
      case 1:
        return (a1) => buildMap([a1]);
      case 2:
        return (a1, a2) => buildMap([a1, a2]);
      case 3:
        return (a1, a2, a3) => buildMap([a1, a2, a3]);
      case 4:
        return (a1, a2, a3, a4) => buildMap([a1, a2, a3, a4]);
      case 5:
        return (a1, a2, a3, a4, a5) => buildMap([a1, a2, a3, a4, a5]);
      case 6:
        return (a1, a2, a3, a4, a5, a6) => buildMap([a1, a2, a3, a4, a5, a6]);
      case 7:
        return (a1, a2, a3, a4, a5, a6, a7) => buildMap([a1, a2, a3, a4, a5, a6, a7]);
      case 8:
        return (a1, a2, a3, a4, a5, a6, a7, a8) => buildMap([a1, a2, a3, a4, a5, a6, a7, a8]);
      case 9:
        return (a1, a2, a3, a4, a5, a6, a7, a8, a9) => buildMap([a1, a2, a3, a4, a5, a6, a7, a8, a9]);
      default:
        throw new BaseException(`Does not support literal maps with more than 9 elements`);
    }
  }
  static keyedAccess(obj, args) {
    return obj[args[0]];
  }
  static noChangeMarker(value) {
    return value === NO_CHANGE;
  }
  static throwOnChange(proto, change) {
    throw new ExpressionChangedAfterItHasBeenChecked(proto, change);
  }
  static changeDetectionMode(strategy) {
    return strategy == ON_PUSH ? CHECK_ONCE : CHECK_ALWAYS;
  }
  static simpleChange(previousValue, currentValue) {
    return _simpleChange(previousValue, currentValue);
  }
  static addChange(changes, bindingMemento, change) {
    if (isBlank(changes)) {
      changes = {};
    }
    changes[bindingMemento.propertyName] = change;
    return changes;
  }
}
Object.defineProperty(ChangeDetectionUtil.mapFn, "parameters", {get: function() {
    return [[List]];
  }});
Object.defineProperty(ChangeDetectionUtil.throwOnChange, "parameters", {get: function() {
    return [[ProtoRecord], []];
  }});
Object.defineProperty(ChangeDetectionUtil.changeDetectionMode, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(ChangeDetectionUtil.simpleChange, "parameters", {get: function() {
    return [[assert.type.any], [assert.type.any]];
  }});
//# sourceMappingURL=change_detection_util.js.map

//# sourceMappingURL=./change_detection_util.map