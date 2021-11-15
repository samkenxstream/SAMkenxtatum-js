import { ApproveErc20, Currency, prepareApproveErc20Abstraction } from '@tatumio/tatum-core'
import { getOne20ContractDecimals } from 'src'
import token_abi from '@tatumio/tatum-core/src/contracts/erc20/token_abi'
import { helperBroadcastTx, helperGetWeb3Client, helperPrepareSCCall } from '../helpers'

/**
 * Approve ERC20 transfer for spender.
 * @param testnet chain to work with
 * @param body request data
 * @param provider optional provider to enter. if not present, Tatum Web3 will be used.
 * @returns {txId: string} Transaction ID of the operation, or signatureID in case of Tatum KMS
 */
export const sendApproveErc20 = async (testnet: boolean, body: ApproveErc20, provider?: string) =>
  helperBroadcastTx(body.chain, await prepareApproveErc20(testnet, body, provider), body.signatureId)

/**
 * Prepare approve ERC20 signed transaction.
 * @param testnet if we are on testnet or not
 * @param body body of the approve operation
 * @param provider optional Web3 provider
 */
export const prepareApproveErc20 = async (testnet: boolean, body: ApproveErc20, provider?: string) => {
  const { body: validatedBody, params } = await prepareApproveErc20Abstraction(getOne20ContractDecimals, testnet, body, provider)
  return await helperPrepareSCCall(testnet, validatedBody, 'approve', params, provider, token_abi)
}

/**
 * Get Decimals for the ERC20 token
 * @param contractAddress address of the token
 * @param provider optional provider
 */
export const getErc20Decimals = async (contractAddress: string, provider?: string) => {
  const web3 = helperGetWeb3Client(provider)
  // @ts-ignore
  return new web3.eth.Contract(token_abi, contractAddress).methods.decimals().call()
}
