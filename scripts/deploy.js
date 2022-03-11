const { ethers } = require("hardhat")

const main = async() => {
  const nftFactory = await ethers.getContractFactory('NFT');
  const ndfContract = await nftFactory.deploy();
  await ndfContract.deployed();

  console.log("Contract Deployed To: ", ndfContract.address);
}

const deploy = async() => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

deploy()