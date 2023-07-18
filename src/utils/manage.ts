
    export const manageaddress='0x9f98dFed29307225A52e191248f43861D0AD7ec0'
    export const manageABI=[
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_tokenName",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "_tokenContract",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_tokenExchangeContract",
                    "type": "address"
                }
            ],
            "name": "addTokenToList",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_whitelistAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_allocationRatio",
                    "type": "uint256"
                }
            ],
            "name": "addToWhitelist",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_tokenName",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_pledgeAmount",
                    "type": "uint256"
                }
            ],
            "name": "createBNBPledgeOrder",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_tokenName",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_pledgeAmount",
                    "type": "uint256"
                }
            ],
            "name": "createPledgeOrder",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "feedOver",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_usdtAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_bweAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_bweUsdtPairAddress",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_orderNumber",
                    "type": "uint256"
                }
            ],
            "name": "redeem",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_whitelistAddress",
                    "type": "address"
                }
            ],
            "name": "removeFromWhitelist",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_tokenName",
                    "type": "string"
                }
            ],
            "name": "removeTokenFromList",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bool",
                    "name": "_status",
                    "type": "bool"
                }
            ],
            "name": "setContractSwitch",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "setPeriod",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_period",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_limit",
                    "type": "uint256"
                }
            ],
            "name": "setPledgeAmountForPeroid",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_tokenName",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "_status",
                    "type": "bool"
                }
            ],
            "name": "setTokenStatus",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "transferBWEtoWallet",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_C1",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_C2",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_F1",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_feedAddress",
                    "type": "address"
                }
            ],
            "name": "updateCAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_max",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_min",
                    "type": "uint256"
                }
            ],
            "name": "updateMaxMinUsdt",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_wallet1",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_wallet2",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_wallet3",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_ratio1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_ratio2",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_ratio3",
                    "type": "uint256"
                }
            ],
            "name": "updateWallet",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_orderNumber",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawBWE",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "A1",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "allPledgeBwe",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_tokenName",
                    "type": "string"
                }
            ],
            "name": "calculateMaxPledgeAmountFromBWE",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_tokenName",
                    "type": "string"
                }
            ],
            "name": "calculateMinPledgeAmountFromBWE",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_tokenName",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_pledgeAmount",
                    "type": "uint256"
                }
            ],
            "name": "calculatePledge",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_orderNumber",
                    "type": "uint256"
                }
            ],
            "name": "calculateRedemption",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_orderNumber",
                    "type": "uint256"
                }
            ],
            "name": "calcuWithdrawAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "DA9",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "dayTimestamps",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCurrentPeriod",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getExchangeRateBEP20ToBWE",
            "outputs": [
                {
                    "internalType": "uint112",
                    "name": "",
                    "type": "uint112"
                },
                {
                    "internalType": "uint112",
                    "name": "",
                    "type": "uint112"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_tokenName",
                    "type": "string"
                }
            ],
            "name": "getExchangeRateBEP20ToUSDT",
            "outputs": [
                {
                    "internalType": "uint112",
                    "name": "",
                    "type": "uint112"
                },
                {
                    "internalType": "uint112",
                    "name": "",
                    "type": "uint112"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_orderNumber",
                    "type": "uint256"
                }
            ],
            "name": "getOrderDetails",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "orderNumber",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "tokenName",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "pledgeAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "hasWithdraw",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "creationTimestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "redemptionStatus",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPledgeAmountForCurrentPeriod",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_period",
                    "type": "uint256"
                }
            ],
            "name": "getPledgeAmountForPeroid",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_tokenName",
                    "type": "string"
                }
            ],
            "name": "getTokenInfo",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "tokenName",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "tokenContract",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "tokenExchangeContract",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "status",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "totalAmount",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct PledgeContract.TokenInfo",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_tokenName",
                    "type": "string"
                }
            ],
            "name": "getTokenOrders",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_userAddress",
                    "type": "address"
                }
            ],
            "name": "getUserOrders",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getWhaleAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "hasPledge",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isWhitelisted",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "maxUsdt",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "minUsdt",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "prevWhaleBanance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "tokenCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "tokenNames",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalOutPutBWE",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "wallet1Ratio",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "wallet2Ratio",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "wallet3Ratio",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]