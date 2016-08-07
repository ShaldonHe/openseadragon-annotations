import test from 'ava';
import types from '../constants/actionTypes';
import modes from '../constants/modes';
import leaveCanvas from './leaveCanvas';
import sinon from 'sinon';
import { fakeFactory } from '../utils/test';

const Dispatcher = fakeFactory.getDispatcher();
const Store = fakeFactory.getStore();

test.afterEach(t => {
  fakeFactory.resetDispatcher(Dispatcher);
  fakeFactory.resetStore(Store);
});

test('should stop drawing', t => {
  Store.getMode.returns(modes.DRAW);
  leaveCanvas(Dispatcher, Store);
  t.true(Dispatcher.dispatch.firstCall.calledWith({
    type: types.ACTIVITY_UPDATE,
    inProgress: false,
  }));
});
