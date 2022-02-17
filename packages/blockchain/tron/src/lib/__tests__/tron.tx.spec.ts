import { REPLACE_ME_WITH_TATUM_API_KEY, TEST_DATA, expectHexString } from '@tatumio/shared-testing-common'
import { TatumTronSDK } from '../tron.sdk'

describe('TronSDK - tx', () => {
  const sdk = TatumTronSDK({ apiKey: REPLACE_ME_WITH_TATUM_API_KEY })

  describe('trc10', () => {
    describe('prepare', () => {
      const provider = TEST_DATA.TRON?.PROVIDER

      describe('sign', () => {
        // MISSING TEST DATA
        it('should be valid from privateKey', async () => {
          const result = await sdk.trc10.prepare.signedTransaction(
            {
              fromPrivateKey: TEST_DATA.TRON?.TESTNET?.PRIVATE_KEY_0,
              to: TEST_DATA.TRON?.TESTNET?.ADDRESS_0,
              tokenId: '1000538',
              amount: '0.000001',
            },
            undefined,
            provider,
          )

          console.log()
          expectHexString(result)
        })
      })

      describe('create', () => {})
    })
  })
})
