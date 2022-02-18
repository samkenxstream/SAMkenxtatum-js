import { 
    Currency,
    TransferEth,
    BroadcastWithdrawal,
    LedgerAccountService,
} from "@tatumio/api-client"
import { EvmBasedWeb3 } from "../../services/evm-based.web3"
import { evmBasedUtils } from '../../evm-based.utils'
import { TransactionConfig } from "web3-core"
import { CONTRACT_ADDRESSES, CONTRACT_DECIMALS, EvmBasedBlockchain } from "@tatumio/shared-core"
import Web3 from "web3"
import { Erc20Token } from "../../contracts"
import BigNumber from "bignumber.js"
import { abstractBlockchainOffchain } from "@tatumio/shared-blockchain-abstract"

/**
 * Send eth transaction from Tatum Ledger account to the blockchain. This method broadcasts signed transaction to the blockchain.
 * This operation is irreversible.
 * @param body content of the transaction
 * @param web3 web3 client
 * @param provider eth server to connect to
 * @returns transaction id of the transaction in the blockchain or id of the withdrawal if not cancelled automatically
 */
const sendOffChainTransaction = async (
    body: TransferEth, 
    web3: EvmBasedWeb3,
    provider?: string) => {
        const { privateKey, nonce, ...withdrawal } = body
        const { amount, address } = withdrawal

        const client = web3.getClient(provider)
        const gasPrice = withdrawal.gasPrice || await web3.getGasPriceInWei()

        const account = LedgerAccountService.getAccountByAccountId(withdrawal.senderAccountId)
        const { txData, gasLimit } = await prepareSignedOffchainTransaction(
            {
                amount,
                privateKey,
                address,
                currency: (await account).currency,
                web3,
                gasPrice,
                gasLimit: withdrawal?.gasLimit,
                nonce,
            },
            provider,
        )

        // @ts-ignore
        withdrawal.fee = new BigNumber(
            client.utils.fromWei(new BigNumber(withdrawal.gasLimit || gasLimit).multipliedBy(gasPrice).toString(), 'ether')
        ).toString()

        const { id } = 
}

/**
 * Sign Eth transaction with private key locally, nothing is broadcast to the blockchain.
 * @returns transaction data to be broadcast to blockchain
 */
export const prepareSignedOffchainTransaction = async (
    body: {
        amount: string,
        privateKey: string,
        address: string,
        currency: string,
        web3: EvmBasedWeb3,
        gasPrice: string,
        gasLimit?: string,
        nonce?: number
    },
    provider?: string,
) => {
    let tx: TransactionConfig
    const { currency, address, amount, gasLimit, gasPrice, nonce, privateKey, web3 } = body;
    const client = web3.getClient(provider)

    if (currency === Currency.ETH) {
        tx = {
            from: 0,
            to: address.trim(),
            value: evmBasedUtils.transformAmount(amount, 'ether'),
            gasPrice,
            nonce,
        }
    } else {
        if (!Object.keys(CONTRACT_ADDRESSES).includes(currency)) {
            throw new Error('Unsupported ETH ERC20 blockchain'); // @todo sdk error
        }

        const contract = new client.eth.Contract(Erc20Token.abi as any, CONTRACT_ADDRESSES[currency])

        tx = {
            from: 0,
            to: CONTRACT_ADDRESSES[currency],
            data: contract.methods
                .transfer(
                    address.trim(),
                    `0x${new BigNumber(amount).multipliedBy(new BigNumber(10).pow(CONTRACT_DECIMALS[currency])).toString(16)}`
                )
                .encodeABI(),
            gasPrice,
            nonce,
        }
    }

    tx.gas = gasLimit || (await client.eth.estimateGas(tx))
    return {
        txData: (await client.eth.accounts.signTransaction(tx, privateKey)).rawTransaction as string,
        gasLimit: tx.gas,
    }
}

export const offchain = (args: {
    blockchain: EvmBasedBlockchain,
    
}) => {

}