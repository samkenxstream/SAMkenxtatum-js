export const abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'feeRecipient',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'buyer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'AuctionBid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'AuctionCancelled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bool',
        name: 'isErc721',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'nftAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'erc20Address',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'endedAt',
        type: 'uint256',
      },
    ],
    name: 'AuctionCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'AuctionSettled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'bidValue',
        type: 'uint256',
      },
    ],
    name: 'bid',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'bidValue',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'bidder',
        type: 'address',
      },
    ],
    name: 'bidForExternalBidder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'cancelAuction',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
      {
        internalType: 'bool',
        name: 'isErc721',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: 'nftAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'seller',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'endedAt',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'erc20Address',
        type: 'address',
      },
    ],
    name: 'createAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'getAuction',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'seller',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'nftAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isErc721',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'endedAt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startedAt',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'erc20Address',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endingPrice',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'bidder',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'highestBid',
            type: 'uint256',
          },
        ],
        internalType: 'struct NftAuction.Auction',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAuctionFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAuctionFeeRecipient',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC721Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
    ],
    name: 'setAuctionFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'setAuctionFeeRecipient',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'id',
        type: 'string',
      },
    ],
    name: 'settleAuction',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

export const data =
  '0x608060405260006002553480156200001657600080fd5b50604051620025fa380380620025fa8339810160408190526200003991620000cb565b600062000045620000c7565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506000805460ff60a01b19169055600391909155600480546001600160a01b0319166001600160a01b0390921691909117905562000108565b3390565b60008060408385031215620000de578182fd5b825160208401519092506001600160a01b0381168114620000fd578182fd5b809150509250929050565b6124e280620001186000396000f3fe6080604052600436106100f75760003560e01c8063b60e7a3b1161008a578063edd8184911610059578063edd8184914610264578063f23a6e6114610291578063f2fde38b146102b1578063f59e754c146102d1576100fe565b8063b60e7a3b146101fc578063bc197c811461020f578063d602173c1461022f578063e81f6f0314610244576100fe565b80635f483313116100c65780635f4833131461019f578063715018a6146101b25780638da5cb5b146101c7578063a13d4e6b146101e9576100fe565b80631031ca4414610103578063150b7a021461012e5780633eac3f851461015b5780635c975abb1461017d576100fe565b366100fe57005b600080fd5b34801561010f57600080fd5b506101186102f1565b6040516101259190612372565b60405180910390f35b34801561013a57600080fd5b5061014e610149366004611970565b6102f7565b6040516101259190611cbc565b34801561016757600080fd5b5061017b610176366004611887565b610307565b005b34801561018957600080fd5b50610192610371565b6040516101259190611cb1565b61017b6101ad366004611b3d565b610381565b3480156101be57600080fd5b5061017b610891565b3480156101d357600080fd5b506101dc61091a565b6040516101259190611c0e565b61017b6101f7366004611a5d565b610929565b61017b61020a366004611a5d565b610b11565b34801561021b57600080fd5b5061014e61022a3660046118c6565b610d63565b34801561023b57600080fd5b506101dc610d74565b34801561025057600080fd5b5061017b61025f366004611a98565b610d83565b34801561027057600080fd5b5061028461027f366004611a5d565b610fc6565b60405161012591906122d6565b34801561029d57600080fd5b5061014e6102ac3660046119da565b611078565b3480156102bd57600080fd5b5061017b6102cc366004611887565b611089565b3480156102dd57600080fd5b5061017b6102ec366004611b80565b611149565b60035490565b630a85bd0160e11b949350505050565b61030f6111ad565b6001600160a01b031661032061091a565b6001600160a01b03161461034f5760405162461bcd60e51b815260040161034690611fab565b60405180910390fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b600054600160a01b900460ff1690565b610389610371565b156103a65760405162461bcd60e51b815260040161034690611e9e565b60006001836040516103b89190611bef565b9081526040805191829003602090810183206101408401835280546001600160a01b039081168552600182015481169285019290925260028101549284019290925260038083015460ff161515606085015260048301546080850152600583015460a08501526006830154821660c0850152600783015460e08501526008830154610100850152600990920154166101208301525490915060009061045f906127106123a5565b61046990846123bd565b610475906127106123dd565b90504382608001511161049a5760405162461bcd60e51b81526004016103469061204c565b80826101000151106104be5760405162461bcd60e51b8152600401610346906120a9565b60c08201516001600160a01b03166104ef573483146104ef5760405162461bcd60e51b815260040161034690611d79565b60c08201516001600160a01b0316156105a45760c0820151604051636eb1769f60e11b815284916001600160a01b03169063dd62ed3e906105369033903090600401611c22565b60206040518083038186803b15801561054e57600080fd5b505afa158015610562573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105869190611b98565b10156105a45760405162461bcd60e51b8152600401610346906121cd565b600060405180610140016040528084600001516001600160a01b0316815260200184602001516001600160a01b0316815260200184604001518152602001846060015115158152602001846080015181526020014381526020018460c001516001600160a01b031681526020018460e00151815260200184610100015181526020018461012001516001600160a01b0316815250905060018560405161064a9190611bef565b90815260405190819003602001902080546001600160a01b031990811682556001820180548216905560006002830181905560038301805460ff1916905560048301819055600583018190556006830180548316905560078301819055600883015560099091018054909116905560c08101516001600160a01b0316156107705760c08101516040516323b872dd60e01b81526001600160a01b038216906323b872dd9061070090339030908a90600401611c3c565b602060405180830381600087803b15801561071a57600080fd5b505af115801561072e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107529190611a41565b61076e5760405162461bcd60e51b815260040161034690612170565b505b6101008101829052336101208201526040518190600190610792908890611bef565b9081526040805160209281900383018120845181546001600160a01b03199081166001600160a01b03928316178355948601516001830180548716918316919091179055928501516002820155606085015160038201805460ff19169115159190911790556080850151600482015560a0850151600582015560c0850151600682018054861691851691909117905560e085015160078201556101008501516008820155610120909401516009909401805490931693909116929092179055829033907f404d5f135c85f24fa52ef59254b87aaee6e59b6512323e308e5e3c7d997f4bfd90610882908990611cd1565b60405180910390a35050505050565b6108996111ad565b6001600160a01b03166108aa61091a565b6001600160a01b0316146108d05760405162461bcd60e51b815260040161034690611fab565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b600060018260405161093b9190611bef565b9081526040805191829003602090810183206101408401835280546001600160a01b0390811685526001820154811692850192909252600281015492840192909252600382015460ff1615156060840152600482015460808401819052600583015460a08501526006830154821660c0850152600783015460e085015260088301546101008501526009909201541661012083015290915043116109f15760405162461bcd60e51b81526004016103469061211d565b6060810151602082015160e083015160408085015160c0860151610100870151610120880151935192939192909190600190610a2e908b90611bef565b90815260405190819003602001902080546001600160a01b031990811682556001820180548216905560006002830181905560038301805460ff19169055600483018190556005830181905560068301805483169055600783018190556008830155600990910180549091169055610aa987878387896111b1565b610aba83838a600001516001611289565b60028054906000610aca83612428565b91905055507fafdc429d8d197c8769e7a13a5bcd959b9f8dade051086aac5fbcba8e8d7f3a5e89604051610afe9190611cd1565b60405180910390a1505050505050505050565b6000600182604051610b239190611bef565b90815260408051602092819003830181206101408201835280546001600160a01b039081168084526001830154821695840195909552600282015493830193909352600381015460ff161515606083015260048101546080830152600581015460a08301526006810154831660c0830152600781015460e08301526008810154610100830152600901549091166101208201529150610bd45760405162461bcd60e51b815260040161034690611f13565b80516001600160a01b0316331480610c045750610bef61091a565b6001600160a01b0316336001600160a01b0316145b610c205760405162461bcd60e51b815260040161034690611fe0565b6060810151602082015160e083015160408085015160c0860151610100870151610120880151935192939192909190600190610c5d908b90611bef565b90815260405190819003602001902080546001600160a01b031990811682556001820180548216905560006002830181905560038301805460ff191690556004830181905560058301819055600683018054831690556007830181905560088301556009909101805490911690558751610cdc908890889087896111b1565b6001600160a01b03811615801590610cf357508115155b15610d0557610d058383836000611289565b60028054906000610d1583612428565b919050555088604051610d289190611bef565b604051908190038120907f8491f144dda005dc8140735549d904900585c1cbe24e47da9dcbf67a8b7233d590600090a2505050505050505050565b63bc197c8160e01b95945050505050565b6004546001600160a01b031690565b610d8b610371565b15610da85760405162461bcd60e51b815260040161034690611e9e565b600188604051610db89190611bef565b908152602001604051809103902060050154600014610de95760405162461bcd60e51b815260040161034690612237565b610df44360056123a5565b8211610e125760405162461bcd60e51b815260040161034690611f58565b610e1f87878688876114c4565b60028054906000610e2f8361243f565b91905055506000604051806101400160405280866001600160a01b03168152602001886001600160a01b031681526020018781526020018915158152602001848152602001438152602001836001600160a01b031681526020018581526020016000815260200160006001600160a01b031681525090508060018a604051610eb79190611bef565b9081526040805160209281900383018120845181546001600160a01b03199081166001600160a01b03928316178355948601516001830180548716918316919091179055928501516002820155606085015160038201805460ff19169115159190911790556080850151600482015560a0850151600582015560c0850151600682018054861691851691909117905560e0850151600782015561010085015160088201556101209094015160099094018054909316938216939093179091558791908916908a1515907fe0afed058bf71e435ebaa19f54f64a53ab230a24f14945338c41bd5836d3174c90610fb3908e908a9089908b90611ce4565b60405180910390a4505050505050505050565b610fce611721565b600182604051610fde9190611bef565b9081526040805191829003602090810183206101408401835280546001600160a01b0390811685526001820154811692850192909252600281015492840192909252600382015460ff161515606084015260048201546080840152600582015460a08401526006820154811660c0840152600782015460e08401526008820154610100840152600990910154166101208201529050919050565b63f23a6e6160e01b95945050505050565b6110916111ad565b6001600160a01b03166110a261091a565b6001600160a01b0316146110c85760405162461bcd60e51b815260040161034690611fab565b6001600160a01b0381166110ee5760405162461bcd60e51b815260040161034690611dc4565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6111516111ad565b6001600160a01b031661116261091a565b6001600160a01b0316146111885760405162461bcd60e51b815260040161034690611fab565b600254156111a85760405162461bcd60e51b815260040161034690612285565b600355565b3390565b8461121f57604051637921219560e11b81526001600160a01b0385169063f242432a906111e8903090879087908790600401611c60565b600060405180830381600087803b15801561120257600080fd5b505af1158015611216573d6000803e3d6000fd5b50505050611282565b604051632142170760e11b81526001600160a01b038516906342842e0e9061124f90309087908790600401611c3c565b600060405180830381600087803b15801561126957600080fd5b505af115801561127d573d6000803e3d6000fd5b505050505b5050505050565b6001600160a01b038416156114685760405163a9059cbb60e01b81526001600160a01b0385169063a9059cbb906112c69085908790600401611c98565b602060405180830381600087803b1580156112e057600080fd5b505af11580156112f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113189190611a41565b5080156113c7576004546003546001600160a01b038087169263a9059cbb929116906127109061134890886123dd565b61135291906123bd565b6040518363ffffffff1660e01b815260040161136f929190611c98565b602060405180830381600087803b15801561138957600080fd5b505af115801561139d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113c19190611a41565b50611463565b836001600160a01b031663a9059cbb83612710600354876113e891906123dd565b6113f291906123bd565b6040518363ffffffff1660e01b815260040161140f929190611c98565b602060405180830381600087803b15801561142957600080fd5b505af115801561143d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114619190611a41565b505b6114be565b6114728284611680565b80156114a957600454600354611463916001600160a01b0316906127109061149a90876123dd565b6114a491906123bd565b611680565b6114be826127106003548661149a91906123dd565b50505050565b846115a457600081116114d657600080fd5b604051627eeac760e11b815281906001600160a01b0386169062fdd58e906115049087908790600401611c98565b60206040518083038186803b15801561151c57600080fd5b505afa158015611530573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115549190611b98565b10156115725760405162461bcd60e51b815260040161034690611d1c565b604051637921219560e11b81526001600160a01b0385169063f242432a906111e8908690309087908790600401611c60565b826001600160a01b0316846001600160a01b0316636352211e846040518263ffffffff1660e01b81526004016115da9190612372565b60206040518083038186803b1580156115f257600080fd5b505afa158015611606573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061162a91906118aa565b6001600160a01b0316146116505760405162461bcd60e51b815260040161034690611ec8565b604051632142170760e11b81526001600160a01b038516906342842e0e9061124f90869030908790600401611c3c565b804710156116a05760405162461bcd60e51b815260040161034690611e67565b6000826001600160a01b0316826040516116b990611c0b565b60006040518083038185875af1925050503d80600081146116f6576040519150601f19603f3d011682016040523d82523d6000602084013e6116fb565b606091505b505090508061171c5760405162461bcd60e51b815260040161034690611e0a565b505050565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600015158152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681525090565b600082601f8301126117aa578081fd5b8135602067ffffffffffffffff8211156117c6576117c6612470565b8082026117d482820161237b565b8381528281019086840183880185018910156117ee578687fd5b8693505b858410156118105780358352600193909301929184019184016117f2565b50979650505050505050565b600082601f83011261182c578081fd5b813567ffffffffffffffff81111561184657611846612470565b611859601f8201601f191660200161237b565b81815284602083860101111561186d578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215611898578081fd5b81356118a381612486565b9392505050565b6000602082840312156118bb578081fd5b81516118a381612486565b600080600080600060a086880312156118dd578081fd5b85356118e881612486565b945060208601356118f881612486565b9350604086013567ffffffffffffffff80821115611914578283fd5b61192089838a0161179a565b94506060880135915080821115611935578283fd5b61194189838a0161179a565b93506080880135915080821115611956578283fd5b506119638882890161181c565b9150509295509295909350565b60008060008060808587031215611985578384fd5b843561199081612486565b935060208501356119a081612486565b925060408501359150606085013567ffffffffffffffff8111156119c2578182fd5b6119ce8782880161181c565b91505092959194509250565b600080600080600060a086880312156119f1578081fd5b85356119fc81612486565b94506020860135611a0c81612486565b93506040860135925060608601359150608086013567ffffffffffffffff811115611a35578182fd5b6119638882890161181c565b600060208284031215611a52578081fd5b81516118a38161249e565b600060208284031215611a6e578081fd5b813567ffffffffffffffff811115611a84578182fd5b611a908482850161181c565b949350505050565b600080600080600080600080610100898b031215611ab4578283fd5b883567ffffffffffffffff811115611aca578384fd5b611ad68b828c0161181c565b9850506020890135611ae78161249e565b96506040890135611af781612486565b9550606089013594506080890135611b0e81612486565b935060a0890135925060c0890135915060e0890135611b2c81612486565b809150509295985092959890939650565b60008060408385031215611b4f578182fd5b823567ffffffffffffffff811115611b65578283fd5b611b718582860161181c565b95602094909401359450505050565b600060208284031215611b91578081fd5b5035919050565b600060208284031215611ba9578081fd5b5051919050565b6001600160a01b03169052565b15159052565b60008151808452611bdb8160208601602086016123fc565b601f01601f19169290920160200192915050565b60008251611c018184602087016123fc565b9190910192915050565b90565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6001600160e01b031991909116815260200190565b6000602082526118a36020830184611bc3565b600060808252611cf76080830187611bc3565b6020830195909552506001600160a01b03929092166040830152606090910152919050565b60208082526038908201527f4552433131353520746f6b656e2062616c616e6365206973206e6f742073756660408201527f66696369656e7420666f72207468652073656c6c65722e2e0000000000000000606082015260800190565b6020808252602b908201527f57726f6e6720616d6f756e7420656e746572656420666f72207468652062696460408201526a171020b137b93a34b7339760a91b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252603a908201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260408201527f6563697069656e74206d61792068617665207265766572746564000000000000606082015260800190565b6020808252601d908201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604082015260600190565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b6020808252602b908201527f45524337323120746f6b656e20646f6573206e6f742062656c6f6e6720746f2060408201526a3a34329030baba3437b91760a91b606082015260800190565b60208082526025908201527f41756374696f6e20697320616c726561647920736574746c65642e2041626f726040820152643a34b7339760d91b606082015260800190565b60208082526033908201527f41756374696f6e206d757374206c617374206174206c65617374203520626c6f604082015272636b732066726f6d207468697320626c6f636b60681b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526046908201527f41756374696f6e2063616e27742062652063616e63656c6c65642066726f6d2060408201527f6f74686572207468616e6b2073656c6c6572206f72206f776e65722e2041626f606082015265393a34b7339760d11b608082015260a00190565b6020808252603b908201527f41756374696f6e2068617320616c726561647920656e6465642e20556e61626c60408201527f6520746f2070726f63657373206269642e2041626f7274696e672e0000000000606082015260800190565b6020808252604e908201527f4269642066726565206f66207468652061756374696f6e20666565206973206c60408201527f6f776572207468616e6b2061637475616c20686967686573742062696420707260608201526d34b1b2971020b137b93a34b7339760911b608082015260a00190565b60208082526033908201527f41756374696f6e2063616e277420626520736574746c6564206265666f72652060408201527234ba103932b0b1b432b9903a34329032b7321760691b606082015260800190565b60208082526038908201527f556e61626c6520746f207472616e7366657220455243323020746f6b656e732060408201527f746f207468652041756374696f6e2e2041626f7274696e670000000000000000606082015260800190565b60208082526044908201527f496e73756666696369656e7420617070726f76616c20666f722045524332302060408201527f746f6b656e20666f72207468652061756374696f6e206269642e2041626f727460608201526334b7339760e11b608082015260a00190565b6020808252602e908201527f41756374696f6e20616c7265616479206578697374656420666f72206375727260408201526d195b9d08185d58dd1a5bdb88125960921b606082015260800190565b60208082526031908201527f4665652063616e2774206265206368616e6765642069662074686572652069736040820152701037b733b7b4b7339030bab1ba34b7b71760791b606082015260800190565b6000610140820190506122ea828451611bb0565b60208301516122fc6020840182611bb0565b506040830151604083015260608301516123196060840182611bbd565b506080830151608083015260a083015160a083015260c083015161234060c0840182611bb0565b5060e083015160e08301526101008084015181840152506101208084015161236a82850182611bb0565b505092915050565b90815260200190565b60405181810167ffffffffffffffff8111828210171561239d5761239d612470565b604052919050565b600082198211156123b8576123b861245a565b500190565b6000826123d857634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156123f7576123f761245a565b500290565b60005b838110156124175781810151838201526020016123ff565b838111156114be5750506000910152565b6000816124375761243761245a565b506000190190565b60006000198214156124535761245361245a565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461249b57600080fd5b50565b801515811461249b57600080fdfea26469706673582212202e6c44cda0830ecc7c3653d701213f00526edd927cba6e2745e748b9d9f96c7264736f6c63430008000033'
