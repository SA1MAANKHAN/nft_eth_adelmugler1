const { NFTStorage, File, Blob } = require('nft.storage')
const { readFileSync } = require("fs")
require("dotenv").config()

const API_KEY = process.env.NFT_STORAGE_API_KEY

const client = new NFTStorage({ token: API_KEY })

const imageFile = new File([readFileSync("./images/1.png")], 'nft.png', { type: 'image/png' })


async function main() {
    const metadata = await client.store({
        name: 'Turty Dou',
        description: 'I am the second.',
        image: imageFile
    })
    console.log(metadata.url)
    console.log("=============================")
    console.log(metadata)
  
}

main()