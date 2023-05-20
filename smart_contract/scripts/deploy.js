
const main = async () => {

  const Transaction = await ethers.getContractFactory("Transaction");
  const transaction = await Transaction.deploy();
  await transaction.deployed();
  console.log("Transaction deployed to:", transaction.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
