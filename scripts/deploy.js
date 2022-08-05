
const {ethers} = require("hardhat");


async function main(){
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying the contract...");
  const SimpleStorage = await SimpleStorageFactory.deploy();
  await SimpleStorage.deployed();
  console.log(`Deployed to: ${SimpleStorage.address}`);


  const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
      await run("verify:verify", {
        address: contractAddress,
        constructorArguments: args,
      })
    } catch (e) {
      if (e.message.toLowerCase().includes("already verified")) {
        console.log("Already Verified!")
      } else {
        console.log(e)
      }
    }

}

main().then(()=> process.exit(0)).catch((error) =>{
  console.error(error)
  process.exit(1)} )
