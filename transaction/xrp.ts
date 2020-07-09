import BigNumber from 'bignumber.js';
import {validateOrReject} from 'class-validator';
import {RippleAPI} from 'ripple-lib';
import {Payment} from 'ripple-lib/dist/npm/transaction/payment';
import {xrpBroadcast, xrpGetAccountInfo, xrpGetFee} from '../blockchain';
import {TransferXrp} from '../model';

export const sendXrpTransaction = async (body: TransferXrp) => {
    return xrpBroadcast(await prepareXrpSignedTransaction(body));
};

export const prepareXrpSignedTransaction = async (body: TransferXrp) => {
    await validateOrReject(body);
    const {
        fromAccount,
        fromSecret,
        to,
        amount,
        fee,
        sourceTag,
        destinationTag,
    } = body;

    const f = fee ? fee : new BigNumber((await xrpGetFee()).drops.base_fee).dividedBy(1000000).toString();
    const payment: Payment = {
        source: {
            address: fromAccount,
            maxAmount: {
                currency: 'XRP',
                value: amount,
            },
            tag: sourceTag,
        },
        destination: {
            address: to,
            amount: {
                currency: 'XRP',
                value: amount,
            },
            tag: destinationTag,
        },
    };
    const accountInfo = await xrpGetAccountInfo(fromAccount);
    const sequence = accountInfo.account_data.Sequence;
    const maxLedgerVersion = accountInfo.ledger_current_index + 5;
    const rippleAPI = new RippleAPI();
    const prepared = await rippleAPI.preparePayment(fromAccount, payment, {
        fee: f,
        sequence,
        maxLedgerVersion,
    });
    const signed = await rippleAPI.sign(prepared.txJSON, fromSecret);
    return signed.signedTransaction;
};

// TODO: add support for ModifyAccount and TrustLine