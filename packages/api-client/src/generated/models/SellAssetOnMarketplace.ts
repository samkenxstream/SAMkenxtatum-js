/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SellAssetOnMarketplace = {
    /**
     * Blockchain to work with.
     */
    chain: 'ETH' | 'ONE' | 'BSC' | 'KLAY' | 'MATIC';
    /**
     * Address of the marketplace smart contract.
     */
    contractAddress: string;
    /**
     * Address of the NFT asset to sell smart contract.
     */
    nftAddress: string;
    /**
     * Address of the seller of the NFT asset.
     */
    seller: string;
    /**
     * Optional address of the ERC20 token, which will be used as a selling currency of the NFT.
     */
    erc20Address?: string;
    /**
     * ID of the listing. It's up to the developer to generate unique ID
     */
    listingId: string;
    /**
     * Amount of the assets to be sent. For ERC-721 tokens, enter amount only in case of native currency cashback. In case of ERC-1155 this field is required and must be greater than 0
     */
    amount?: string;
    /**
     * ID of token, if transaction is for ERC-721 or ERC-1155.
     */
    tokenId: string;
    /**
     * Price of the asset to sell. Marketplace fee will be obtained on top of this price.
     */
    price: string;
    /**
     * True if asset is NFT of type ERC721, false if ERC1155.
     */
    isErc721: boolean;
    /**
     * The private key of the seller's blockchain address
     */
    fromPrivateKey: string;
    /**
     * The nonce to be set to the transaction; if not present, the last known nonce will be used
     */
    nonce?: number;
    /**
     * Custom defined fee. If not present, it will be calculated automatically.
     */
    fee?: {
        /**
         * Gas limit for transaction in gas price.
         */
        gasLimit: string;
        /**
         * Gas price in Gwei.
         */
        gasPrice: string;
    };
}
