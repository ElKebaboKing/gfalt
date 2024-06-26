// src/App.js
import React, { useState, useEffect } from "react"

import './App.css';
import Button from './components/Button';
import Web3 from 'web3';
// let { Web3 } = require("web3")

// init web3 client
const RPC = "https://bsc-dataseed1.binance.org"
const provider = new Web3.providers.HttpProvider(RPC)
const web3Pub = new Web3(provider)


let stakingAddr = "0x85e1E3498548c109ba6E9284C4298EE932725BBf"
let stakingABI = [{ "inputs": [{ "internalType": "contract IGooodToken", "name": "_goood", "type": "address" }, { "internalType": "uint256", "name": "_gooodPerBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_startBlock", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "token", "type": "address" }, { "indexed": false, "internalType": "uint256[]", "name": "tokenIds", "type": "uint256[]" }], "name": "EmergencyWithdrawERC721", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "oldGooodPerBlock", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newGooodPerBlock", "type": "uint256" }], "name": "EmissionRateChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "accGooodPerShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "activateTierBonus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_collection", "type": "address" }], "name": "addStakeableCollection", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_collection", "type": "address" }, { "internalType": "bytes", "name": "_weights", "type": "bytes" }], "name": "addWeights", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "weight", "type": "uint256" }], "name": "calculateTierBonus", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "canActivateTierBonus", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "collectionConfig", "outputs": [{ "components": [{ "internalType": "uint256[6]", "name": "factor", "type": "uint256[6]" }, { "internalType": "uint256", "name": "pid", "type": "uint256" }], "internalType": "struct StakingState.Config", "name": "_config", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "collectionIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_newOwner", "type": "address" }], "name": "emergencyTransferIGooodTokenOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256[]", "name": "_tokenIds", "type": "uint256[]" }], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_from", "type": "uint256" }, { "internalType": "uint256", "name": "_to", "type": "uint256" }], "name": "getMultiplier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "globalState", "outputs": [{ "components": [{ "internalType": "uint256[6]", "name": "totalWeightCollection", "type": "uint256[6]" }, { "internalType": "uint256", "name": "totalBonusWeight", "type": "uint256" }, { "internalType": "uint256", "name": "pid", "type": "uint256" }], "internalType": "struct StakingState.GlobalState", "name": "_state", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "goood", "outputs": [{ "internalType": "contract IGooodToken", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "gooodPerBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastRewardBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingGoood", "outputs": [{ "internalType": "uint256", "name": "pending", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_collection", "type": "address" }, { "internalType": "string", "name": "_uri", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256[6]", "name": "factors", "type": "uint256[6]" }], "name": "setCollectionFactors", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_gooodPerBlock", "type": "uint256" }], "name": "setEmissionRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_logic", "type": "address" }], "name": "setTierBonusLogic", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_collections", "type": "address[]" }, { "internalType": "uint256[][]", "name": "_tokenIds", "type": "uint256[][]" }], "name": "stake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stakeableCollections", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "stakedTokens", "outputs": [{ "internalType": "contract StakedToken", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "startBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_collections", "type": "address[]" }, { "internalType": "uint256[][]", "name": "_tokenIds", "type": "uint256[][]" }], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "update", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "userState", "outputs": [{ "components": [{ "internalType": "uint256[6]", "name": "weightCollection", "type": "uint256[6]" }, { "internalType": "uint256", "name": "bonusWeight", "type": "uint256" }, { "internalType": "uint256", "name": "pid", "type": "uint256" }, { "internalType": "address", "name": "user", "type": "address" }], "internalType": "struct StakingState.UserState", "name": "_state", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_collection", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "weightOfToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
let stakingPub = new web3Pub.eth.Contract(stakingABI, stakingAddr)

// let binionsAddr = "0x59b39a2092cda9C590B1576EE5AA204a487e46e6"
// let binoinsStaked = "0xF092A424E6121Cf7e113abaC44C04648273D95ec"
// let mfersAddr = "0xB6f001003371FddD0A489b9142f29D65c3c09772"
// let mfersStaked = "0x6fcC35b9a85940C50F821Fe5e2eCfE182B934fB9"
// let hackedAddr = "0x09ca48306b00213764b5819dc8A9f1C90fB897F3"
// let hackedStaked = "0x09ca48306b00213764b5819dc8A9f1C90fB897F3"
// let crAddr = "0xB341054bDE0800f70fDFe9768730C77dDEE3A144"
// let crStaked = "0x9BAC40BA251f6989b573f1F6350aEBB8e15D8Eb4"
// let cfAddr = "0x65dCA7D407A19Ec74dF4e8D57DC253A3000c4231"
// let cfStaked = "0x7F26313aDe2B97FF16e53b7c2424b439E3D7A152"
let nftABI = [{ "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "uint256", "name": "_maxSupply", "type": "uint256" }, { "internalType": "address", "name": "_team1", "type": "address" }, { "internalType": "address", "name": "_team2", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "holder", "type": "addlpå o'ö,..'ress" }, { "indexed": false, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "RewardsClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalSupply", "type": "uint256" }], "name": "RewardsReceived", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "claimForToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claimForTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "cursor", "type": "uint256" }, { "internalType": "uint256", "name": "size", "type": "uint256" }], "name": "claimForTokensBySize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "distributeToHolders", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBalance", "outputs": [{ "internalType": "uint256", "name": "balance", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintPerTx", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "mintActive", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mintFor", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mintReserved", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pauseMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "pendingForToken", "outputs": [{ "internalType": "uint256", "name": "pending", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingForTokens", "outputs": [{ "internalType": "uint256", "name": "pending", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "cursor", "type": "uint256" }, { "internalType": "uint256", "name": "size", "type": "uint256" }], "name": "pendingForTokensBySize", "outputs": [{ "internalType": "uint256", "name": "pending", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pendingTotalTokens", "outputs": [{ "internalType": "uint256", "name": "pending", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pendingWithdrawal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "price", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "provenance", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "recoverNonFungibleToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }], "name": "recoverToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reserved", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_uri", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "setPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "provenanceHash", "type": "string" }], "name": "setProvenanceHash", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "tokensOfOwner", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "cursor", "type": "uint256" }, { "internalType": "uint256", "name": "size", "type": "uint256" }], "name": "tokensOfOwnerBySize", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

function App() {
  const unstakeEverything = async () => {
    let _collections = await stakingPub.methods.stakeableCollections().call()
    let _staked = await getStakedCollections(_collections)
    let _info = await getTokenIds(_collections, _staked)


    unstakeAll(_info, account)
  };

  const unstakeAll = async ({ collections, ids }, account) => {
    let gasEstimate = Number(await estimateGas(collections, ids, account))
    try {
      await staking.methods.unstake(collections, ids).send({
        from: account,
        gas: Math.floor(gasEstimate * 1.1),
        gasPrice: await web3.eth.getGasPrice(),
      })
    } catch (err) {
      console.log(err)
    }
  }

  const estimateGas = async (_collections, _ids, account) => {
    try {
      let gasEstimate = await staking.methods.unstake(_collections, _ids).estimateGas({ from: account })
      return gasEstimate
    } catch (err) {
      console.log(err)
    }
  }

  const [account, setAccount] = useState("")
  const [web3, setProvider] = useState()
  const [staking, setStakingContract] = useState()

  useEffect(() => {
    loadAccounts()

  }, [account])

  // Get staked collection addresses
  const getStakedCollections = async (_collections) => {

    let _staked = []
    for (let _collection of _collections)
      _staked.push(await stakingPub.methods.stakedTokens(_collection).call())

    return _staked
  }

  const getTokenIds = async (_collections, _staked) => {
    let _tempCollections = []
    let _ids = []
    for (let i = 0; i < _staked.length; i++) {
      let _contract = new web3Pub.eth.Contract(nftABI, _staked[i])
      let _tokens = await _contract.methods.tokensOfOwner(account).call()
      if (_tokens.length == 0) continue
      _tempCollections.push(_collections[i])
      _ids.push(_tokens)
    }
    return { collections: _tempCollections, ids: _ids }
  }

  // Code for connecting to wallet
  const loadAccounts = async () => {
    try {
      const _web3 = new Web3(window.ethereum)
      const accounts = await _web3.eth.requestAccounts()

      setProvider(_web3)
      setAccount(accounts[0])
      setStakingContract(new _web3.eth.Contract(stakingABI, stakingAddr))

    } catch (err) {
      console.log(err)
    }
  }

  const connectButton = () => {
    if (account == "")
      return (<Button label="Connect" onClick={loadAccounts} styleClass="primary-button" />)
    else
      return (account)
  }

  return (
    <div className="App">
      <h1>Welcome to My Website</h1>
      {connectButton()}
      <Button label="Unstake Everything" onClick={unstakeEverything} styleClass="primary-button" />
    </div>
  );
}

export default App;
