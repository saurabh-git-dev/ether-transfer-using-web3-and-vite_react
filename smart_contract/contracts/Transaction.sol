// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Transaction {
    uint256 transcationCounter;

    event Transfer(address sender, address receiver, uint256 amount, string remark);

    struct TransactionStruct {
        address sender;
        address receiver;
        uint256 amount;
        string remark;
    }

    TransactionStruct[] transactions;

    function addTransaction(address payable receiver, uint256 amount, string memory remark) public {
        transcationCounter++;
        transactions.push(TransactionStruct(msg.sender, receiver, amount, remark));
        emit Transfer(msg.sender, receiver, amount, remark);
    }

    function getTransactions() public view returns (TransactionStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transcationCounter;
    }

}