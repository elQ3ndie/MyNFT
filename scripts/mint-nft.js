require('dotenv').config();

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const ethers = require('ethers');

// Get Alchemy API Key
const API_KEY = process.env.API_KEY;

// Define an Alchemy Provider
const provider = new ethers.AlchemyProvider('sepolia', API_KEY)

const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider)

// Get contract ABI and address
const abi = contract.abi
const contractAddress = '0x719c21De80dCa05525b2123598543a91d85492eA'

// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer)

const tokenUri = "https://gateway.pinata.cloud/ipfs/QmbRaQMUVwDTv1rUj6XBgTpN4pWS88pxmnuQmHLu76fgcs"

// Call mintNFT function
const mintNFT = async () => {
    let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri)
    await nftTxn.wait()
    console.log(`NFT Minted! Check it out at: https://sepolia.etherscan.io/tx/${nftTxn.hash}`)
}

mintNFT()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });