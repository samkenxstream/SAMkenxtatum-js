import {
  prepareBatchTransferFromCustodialWalletAbstract,
  prepareCustodialWalletBatchAbstract,
  prepareTransferFromCustodialWalletAbstract,
} from '@tatumio/tatum-defi'
import {
  ContractType,
  CustodialFullTokenWallet,
  validateBody,
  ApproveCustodialTransfer,
  GenerateCustodialAddress,
  SmartContractMethodInvocation,
  TransferFromCustodialAddress,
  TransferFromCustodialAddressBatch,
  GenerateCustodialAddressBatch,
  CUSTODIAL_PROXY_ABI,
} from '@tatumio/tatum-core'
import BigNumber from 'bignumber.js'
import {
  sendPolygonGenerateCustodialWalletSignedTransaction,
  preparePolygonGenerateCustodialWalletSignedTransaction,
  getPolygonErc20ContractDecimals,
  preparePolygonSmartContractWriteMethodInvocation,
} from '../'
import { getErc20Decimals } from '../fungible'
import { helperBroadcastTx, helperPrepareSCCall } from '../helpers'

/**
 * This method is @Deprecated. Use @link{generateCustodialWalletBatch} instead
 * Generate new smart contract based custodial wallet. This wallet is able to receive any type of assets, btu transaction costs connected to the withdrawal
 * of assets is covered by the deployer.
 * @param testnet chain to work with
 * @param body request data
 * @param provider optional provider to enter. if not present, Tatum Web3 will be used.
 * @returns {txId: string} Transaction ID of the operation, or signatureID in case of Tatum KMS
 */
export const generateCustodialWallet = async (testnet: boolean, body: GenerateCustodialAddress, provider?: string) => {
  console.log('This method is deprecated. For better gas consumption, use generateCustodialWalletBatch.')
  return await sendPolygonGenerateCustodialWalletSignedTransaction(testnet, body, provider)
}

/**
 * This method is @Deprecated. Use @link{prepareCustodialWalletBatch} instead
 * Generate new smart contract based custodial wallet. This wallet is able to receive any type of assets, btu transaction costs connected to the withdrawal
 * of assets is covered by the deployer.
 * @param testnet chain to work with
 * @param body request data
 * @param provider optional provider to enter. if not present, Tatum Web3 will be used.
 * @returns {txId: string} Transaction ID of the operation, or signatureID in case of Tatum KMS
 */
export const prepareCustodialWallet = async (testnet: boolean, body: GenerateCustodialAddress, provider?: string) => {
  console.log('This method is deprecated. For better gas consumption, use prepareCustodialWalletBatch.')
  return await preparePolygonGenerateCustodialWalletSignedTransaction(testnet, body, provider)
}

/**
 * Generate new smart contract based custodial wallet. This wallet is able to receive any type of assets, btu transaction costs connected to the withdrawal
 * of assets is covered by the deployer.
 * @param testnet chain to work with
 * @param body request data
 * @param provider optional provider to enter. if not present, Tatum Web3 will be used.
 * @returns {txId: string} Transaction ID of the operation, or signatureID in case of Tatum KMS
 */
export const sendCustodialWallet = async (testnet: boolean, body: GenerateCustodialAddress, provider?: string) => {
  const txData = await preparePolygonGenerateCustodialWalletSignedTransaction(testnet, body, provider)
  return helperBroadcastTx(body.chain, txData, body.signatureId)
}

/**
 * Prepare signed transaction from the custodial SC wallet.
 * @param testnet chain to work with
 * @param body request data
 * @param provider optional provider to enter. if not present, Tatum Web3 will be used.
 * @returns {txId: string} Transaction ID of the operation, or signatureID in case of Tatum KMS
 */
export const prepareTransferFromCustodialWallet = async (testnet: boolean, body: TransferFromCustodialAddress, provider?: string) => {
  return prepareTransferFromCustodialWalletAbstract(
    testnet,
    body,
    getPolygonErc20ContractDecimals,
    (testnet, body, r, provider) => preparePolygonSmartContractWriteMethodInvocation(testnet, r, provider),
    SmartContractMethodInvocation,
    18,
    TransferFromCustodialAddress,
    provider
  )
}

/**
 * Send signed transaction from the custodial SC wallet.
 * @param testnet chain to work with
 * @param body request data
 * @param provider optional provider to enter. if not present, Tatum Web3 will be used.
 * @returns {txId: string} Transaction ID of the operation, or signatureID in case of Tatum KMS
 */
export const sendTransferFromCustodialWallet = async (testnet: boolean, body: TransferFromCustodialAddress, provider?: string) =>
  helperBroadcastTx(body.chain, await prepareTransferFromCustodialWallet(testnet, body, provider), body.signatureId)

/**
 * Prepare signed batch transaction from the custodial SC wallet.
 * @param testnet chain to work with
 * @param body request data
 * @param provider optional provider to enter. if not present, Tatum Web3 will be used.
 * @returns {txId: string} Transaction ID of the operation, or signatureID in case of Tatum KMS
 */
export const prepareBatchTransferFromCustodialWallet = async (
  testnet: boolean,
  body: TransferFromCustodialAddressBatch,
  provider?: string
) => {
  return prepareBatchTransferFromCustodialWalletAbstract(
    testnet,
    body,
    getPolygonErc20ContractDecimals,
    (testnet, body, r, provider) => preparePolygonSmartContractWriteMethodInvocation(testnet, r, provider),
    SmartContractMethodInvocation,
    18,
    TransferFromCustodialAddressBatch,
    provider
  )
}

/**
 * Send signed batch transaction from the custodial SC wallet.
 * @param testnet chain to work with
 * @param body request data
 * @param provider optional provider to enter. if not present, Tatum Web3 will be used.
 * @returns {txId: string} Transaction ID of the operation, or signatureID in case of Tatum KMS
 */
export const sendBatchTransferFromCustodialWallet = async (testnet: boolean, body: TransferFromCustodialAddressBatch, provider?: string) =>
  helperBroadcastTx(body.chain, await prepareBatchTransferFromCustodialWallet(testnet, body, provider), body.signatureId)

/**
 * Prepare signed approve transaction from the custodial SC wallet.
 * @param testnet chain to work with
 * @param body request data
 * @param provider optional provider to enter. if not present, Tatum Web3 will be used.
 * @returns {txId: string} Transaction ID of the operation, or signatureID in case of Tatum KMS
 */
export const prepareApproveFromCustodialWallet = async (testnet: boolean, body: ApproveCustodialTransfer, provider?: string) => {
  await validateBody(body, ApproveCustodialTransfer)

  const decimals =
    body.contractType === ContractType.FUNGIBLE_TOKEN ? await getErc20Decimals(testnet, body.chain, body.tokenAddress, provider) : 0
  const params = [
    body.tokenAddress.trim(),
    body.contractType,
    body.spender,
    `0x${new BigNumber(body.amount || 0).multipliedBy(new BigNumber(10).pow(decimals)).toString(16)}`,
    `0x${new BigNumber(body.tokenId || 0).toString(16)}`,
  ]
  delete body.amount
  return await helperPrepareSCCall(
    testnet,
    {
      ...body,
      contractAddress: body.custodialAddress,
    },
    ApproveCustodialTransfer,
    'approve',
    params,
    undefined,
    provider,
    CustodialFullTokenWallet.abi
  )
}

/**
 * Send signed approve transaction from the custodial SC wallet.
 * @param testnet chain to work with
 * @param body request data
 * @param provider optional provider to enter. if not present, Tatum Web3 will be used.
 * @returns {txId: string} Transaction ID of the operation, or signatureID in case of Tatum KMS
 */
export const sendApproveFromCustodialWallet = async (testnet: boolean, body: ApproveCustodialTransfer, provider?: string) =>
  helperBroadcastTx(body.chain, await prepareApproveFromCustodialWallet(testnet, body, provider), body.signatureId)

/**
 * Generate new smart contract based custodial wallet. This wallet is able to receive any type of assets, but transaction costs connected to the withdrawal
 * of assets is covered by the deployer.
 * @param testnet chain to work with
 * @param body request data
 * @param provider optional provider to enter. if not present, Tatum Web3 will be used.
 * @returns {txId: string} Transaction ID of the operation, or signatureID in case of Tatum KMS
 */
export const generateCustodialWalletBatch = async (testnet: boolean, body: GenerateCustodialAddressBatch, provider?: string) => {
  const txData = await prepareCustodialWalletBatch(testnet, body, provider)
  return helperBroadcastTx(body.chain, txData, body.signatureId)
}

/**
 * Generate new smart contract based custodial wallet. This wallet is able to receive any type of assets, but transaction costs connected to the withdrawal
 * of assets is covered by the deployer.
 * @param testnet chain to work with
 * @param body request data
 * @param provider optional provider to enter. if not present, Tatum Web3 will be used.
 * @returns {txId: string} Transaction ID of the operation, or signatureID in case of Tatum KMS
 */
export const prepareCustodialWalletBatch = async (testnet: boolean, body: GenerateCustodialAddressBatch, provider?: string) => {
  const { params, methodName, methodSig, bodyWithContractAddress } = await prepareCustodialWalletBatchAbstract(
    testnet,
    body,
    getCustodialFactoryContractAddress
  )
  return await helperPrepareSCCall(
    testnet,
    bodyWithContractAddress,
    GenerateCustodialAddressBatch,
    methodName,
    params,
    methodSig,
    provider,
    [CUSTODIAL_PROXY_ABI]
  )
}

const getCustodialFactoryContractAddress = (testnet: boolean) => {
  return testnet ? '0x7E53D8ccE7d55bDEFfb057cC3b7e95448b26E697' : '0x6B422BC77e7848b628fd89Ffc6D702e3f39a580A'
}
