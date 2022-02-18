import {
    REPLACE_ME_WITH_TATUM_API_KEY,
    expectHexString,
    TEST_DATA,
  } from '@tatumio/shared-testing-common'
import { TatumAlgoSDK } from '../algo.sdk'

describe('TatumAlgoSDK - tx', () => {
    const sdk = TatumAlgoSDK({ apiKey: REPLACE_ME_WITH_TATUM_API_KEY })

    describe('native', () => {
        describe('prepare', () => {
            const provider = TEST_DATA.ALGO?.TESTNET?.PROVIDER

            it('should be valid from privateKey', async () => {
                const result = await sdk.transaction.prepare.signedTransaction(
                    {
                        from: TEST_DATA.ALGO?.TESTNET?.ADDRESS_0,
                        to: 'NTAESFCB3WOD7SAOL42KSPVARLB3JFA3MNX3AESWHYVT2RMYDVZI6YLG4Y',
                        amount: '1',
                        fee: '0.001',
                        fromPrivateKey: TEST_DATA.ALGO?.TESTNET?.PRIVATE_KEY_0,
                    },
                    true,
                    provider
                )
                expectHexString(result)
            })
        })
    })

})