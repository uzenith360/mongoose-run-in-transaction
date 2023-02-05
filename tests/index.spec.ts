import 'mocha';
import { assert } from 'chai';

import {MongooseRunInTransaction, TransactionCallback} from '../src/index';

describe('MongooseDB Run In Transaction', () => {
    it('should be a method', () => {
        assert.isFunction(MongooseRunInTransaction);
    });
});