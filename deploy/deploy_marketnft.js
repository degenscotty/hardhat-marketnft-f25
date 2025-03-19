const hre = require("hardhat")

async function main() {
    // Deploy the contract with the required constructor arguments
    // These are in wei, use ethers.utils.parseEther for readable ether values
    const price = hre.ethers.parseUnits("0.01", "ether") // 0.01 ETH

    console.log("Deploying MarketNft contract...")
    const MarketNft = await hre.ethers.getContractFactory("MarketNft")
    const marketNft = await MarketNft.deploy(price)

    // Wait for the contract to be deployed
    await marketNft.waitForDeployment()

    console.log("MarketNft deployed to:", await marketNft.getAddress())
}

// Execute the deployment and handle errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
