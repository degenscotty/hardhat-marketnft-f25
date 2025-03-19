const hre = require("hardhat")

async function main() {
    // NFT metadata
    const tokenUri = "ipfs://example-uri"
    const propertyName = "Beach House"
    const propertyDesc = "Beautiful property on the beach"
    const propertyLoc = "Miami, FL"
    const fractions = 100 // Number of fractions to create

    // Get the deployed contract address
    const contractAddress = process.env.CONTRACT_ADDRESS
    if (!contractAddress) {
        throw new Error("CONTRACT_ADDRESS environment variable not set")
    }

    console.log("Using MarketNft contract at:", contractAddress)

    // Get contract instance
    const MarketNft = await hre.ethers.getContractFactory("MarketNft")
    const marketNft = MarketNft.attach(contractAddress)

    // Mint a new property NFT with the provided metadata
    console.log("Minting new property NFT...")
    console.log("Property Name:", propertyName)
    console.log("Property Description:", propertyDesc)
    console.log("Property Location:", propertyLoc)
    console.log("Token URI:", tokenUri)
    console.log("Fractions:", fractions)

    const mintTx = await marketNft.mintNft(
        propertyName,
        propertyDesc,
        propertyLoc,
        tokenUri,
        fractions
    )

    console.log("Transaction hash:", mintTx.hash)
    await mintTx.wait()

    // Get the current token counter (new token ID would be counter - 1)
    const tokenCounter = await marketNft.getTokenCounter()
    const tokenId = Number(tokenCounter) - 1

    console.log("Property NFT minted successfully with ID:", tokenId)
}

// Execute the minting script and handle errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
