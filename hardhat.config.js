require("dotenv").config()
require("@nomicfoundation/hardhat-toolbox")

const SONIC_PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"

module.exports = {
    solidity: "0.8.28",
    networks: {
        sonic: {
            url: "https://rpc.soniclabs.com",
            chainId: 146,
            accounts: [SONIC_PRIVATE_KEY],
        },
        sonicTestnet: {
            url: "https://rpc.blaze.soniclabs.com",
            chainId: 57054,
            accounts: [SONIC_PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: {
            sonic: "YOUR_SONICSCAN_API_KEY",
            sonicTestnet: "265JT2P3YAHDP7K4HYK4EHIRZV7WF1UJB2",
        },
        customChains: [
            {
                network: "sonic",
                chainId: 146,
                urls: {
                    apiURL: "https://api.sonicscan.org/api",
                    browserURL: "https://sonicscan.org",
                },
            },
            {
                network: "sonicTestnet",
                chainId: 57054,
                urls: {
                    apiURL: "https://api-testnet.sonicscan.org/api",
                    browserURL: "https://testnet.sonicscan.org",
                },
            },
        ],
    },
}
