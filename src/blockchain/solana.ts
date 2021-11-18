import BigNumber from 'bignumber.js'
import {get, post} from '../connector/tatum'
import {SolanaBlock, SolanaTx, TransactionHash} from '../model'

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/solanaBroadcast" target="_blank">Tatum API documentation</a>
 */
export const solanaBroadcast = async (txData: string, signatureId?: string): Promise<TransactionHash> =>
    post(`/v3/solana/broadcast`, {txData, signatureId})

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/solanaGetCurrentBlock" target="_blank">Tatum API documentation</a>
 */
export const solanaGetCurrentBlock = async (): Promise<number> =>
    get(`/v3/solana/block/current`)

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/solanaGetBlock" target="_blank">Tatum API documentation</a>
 */
export const solanaGetBlock = async (roundNumber: string): Promise<SolanaBlock> =>
    get(`/v3/solana/block/${roundNumber}`)

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/solanaGetBalance" target="_blank">Tatum API documentation</a>
 */
export const solanaGetAccountBalance = async (address: string): Promise<BigNumber> =>
    get(`/v3/solana/account/balance/${address}`)

/**
 * For more details, see <a href="https://tatum.io/apidoc#operation/solanaGetTransaction" target="_blank">Tatum API documentation</a>
 */
 export const solanaGetTransaction = async (txid: string): Promise<SolanaTx> => get(`/v3/solana/transaction/${txid}`)
