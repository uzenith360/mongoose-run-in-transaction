import { ClientSession } from 'mongoose';

type TransactionCallback = (session: ClientSession) => Promise<void>;

export {
    TransactionCallback
};
