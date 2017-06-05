pragma solidity ^0.4.8;

contract AToken {
    /* Public variables of the token */
    string public name;
    string public symbol;
    // uint8 public decimals;
    uint256 public totalSupply;
    address public ATOwner;

    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOfAT;
    mapping (address => mapping (address => uint256)) public allowanceOfAT;

    /* This generates a public event on the blockchain that will notify clients */
    event assetTransfer(address indexed from, address indexed to, uint256 value);

    /* Initializes contract with initial supply tokens to the creator of the contract */
    function AToken() {
        totalSupply = 1000;                        // Update total supply
        name = "Asset Token";                              // Set the name for display purposes
        symbol = "AT";                               // Set the symbol for display purposes
    }

    function setATOwner(address _owner) returns (bool success){
        ATOwner = _owner;
        balanceOfAT[ATOwner] = totalSupply;              // Give the creator all initial tokens
    }

    function getATBalance(address _holder) constant returns(uint256){
        uint256 _bal = balanceOfAT[_holder];
        return _bal;
    }


    /* Send coins */
    function ATtransfer(address _to, uint256 _value) {
        if (_to == 0x0) throw;                               // Prevent transfer to 0x0 address
        if (balanceOfAT[ATOwner] < _value) throw;           // Check if the sender has enough
        if (balanceOfAT[_to] + _value < balanceOfAT[_to]) throw; // Check for overflows
        balanceOfAT[ATOwner] -= _value;                     // Subtract from the sender
        balanceOfAT[_to] += _value;                            // Add the same to the recipient
        assetTransfer(ATOwner, _to, _value);                   // Notify anyone listening that this transfer took place
    }
      

    /* A contract attempts to get the coins */
    function ATtransferFrom(address _from, address _to, uint256 _value) returns (bool success) {
        if (_to == 0x0) throw;                                // Prevent transfer to 0x0 address
        if (balanceOfAT[_from] < _value) throw;                 // Check if the sender has enough
        if (balanceOfAT[_to] + _value < balanceOfAT[_to]) throw;  // Check for overflows
        if (_value > allowanceOfAT[_from][ATOwner]) throw;     // Check allowance
        balanceOfAT[_from] -= _value;                           // Subtract from the sender
        balanceOfAT[_to] += _value;                             // Add the same to the recipient
        allowanceOfAT[_from][ATOwner] -= _value;
        assetTransfer(_from, _to, _value);
        return true;
    }

   

}