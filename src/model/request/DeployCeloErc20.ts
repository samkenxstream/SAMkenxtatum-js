import {
    IsIn,
    IsNotEmpty,
    IsNumberString,
    IsOptional,
    IsUUID,
    Length,
    Matches,
    Max,
    MaxLength,
    Min,
    Validate,
    ValidateIf,
} from 'class-validator';
import {SignatureIdValidator} from '../validation/SignatureIdValidator';
import {Currency} from './Currency';

export class DeployCeloErc20 {

    @IsNotEmpty()
    @Length(1, 100)
    @Matches(/^[a-zA-Z0-9_]+$/)
    public name: string;

    @IsNotEmpty()
    @Length(1, 30)
    public symbol: string;

    @IsNotEmpty()
    @Length(42, 42)
    public address: string;

    @IsNotEmpty()
    @IsNumberString()
    @MaxLength(38)
    @Matches(/^[+]?((\d+(\.\d*)?)|(\.\d+))$/)
    public supply: string;

    @Min(1)
    @Max(30)
    public digits: number;

    @ValidateIf(o => (o.fromPrivateKey && o.signatureId) || !o.signatureId)
    @Validate(SignatureIdValidator)
    @IsNotEmpty()
    @Length(66, 66)
    public fromPrivateKey: string;

    @IsOptional()
    @Min(0)
    public nonce?: number;

    @IsNotEmpty()
    @IsIn([Currency.CELO, Currency.CUSD])
    public feeCurrency: Currency;

    @ValidateIf(o => (o.fromPrivateKey && o.signatureId) || !o.fromPrivateKey)
    @Validate(SignatureIdValidator)
    @Length(36, 36)
    @IsUUID('4')
    @IsNotEmpty()
    public signatureId?: string;
}
