import {IsIn, IsNotEmpty, IsNumberString, Length, Matches} from 'class-validator';
import {Currency} from './Currency';
import {PrivateKeyOrSignatureId} from './PrivateKeyOrSignatureId';

export class TransferSolanaSlp extends PrivateKeyOrSignatureId {

    @IsNotEmpty()
    @Length(44, 44)
    public to: string;

    @IsNotEmpty()
    @IsNumberString()
    @Matches(/^[+]?((\d+(\.\d*)?)|(\.\d+))$/)
    public amount: string;

    @IsNotEmpty()
    @IsIn([Currency.SOL])
    public currency?: Currency;

    @IsNotEmpty()
    @Length(44, 44)
    public contractAddress: string;

    @IsNotEmpty()
    @Length(44, 44)
    public from: string;
}
