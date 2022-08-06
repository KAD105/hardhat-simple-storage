const {ethers} = require("hardhat");
const {assert, expect} = require("chai");
const { experimentalAddHardhatNetworkMessageTraceHook } = require("hardhat/config");


describe("SimpleStorage", function () {

  let simpleStorage, simpleStorageFactory
  beforeEach(async function () {
     simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
     simpleStorage = await simpleStorageFactory.deploy();
  })

  it("Should be 0 as the number for the begining!", async function(){
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  })

  it("Should update after we store a value!", async function () {
    const expectedValue = "10"
    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);

    const currentValue = await simpleStorage.retrieve();
    assert.equal(currentValue.toString(), expectedValue);
  })
})