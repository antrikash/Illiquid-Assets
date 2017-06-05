pragma solidity ^0.4.8;

contract CToken {
    /* Public variables of the token */
    string public name;
    string public symbol;
    // uint8 public decimals;
    uint256 public totalSupply;
    address public CTOwner;

    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOfCT;
    mapping (address => mapping (address => uint256)) public allowanceOfCT;

    /* This generates a public event on the blockchain that will notify clients */
    event currencyTransfer(address indexed from, address indexed to, uint256 value);

    /* Initializes contract with initial supply tokens to the creator of the contract */
    function CToken() {
        totalSupply = 1000;                        // Update total supply
        name = "Currency Token";                                   // Set the name for display purposes
        symbol = "CT";                               // Set the symbol for display purposes
    }
    function setCTOwner(address _owner) returns (bool success){
        CTOwner = _owner;
        balanceOfCT[CTOwner] = totalSupply;              // Give the creator all initial tokens
    }

    function getCTBalance(address _holder) constant returns(uint256){
        uint256 _bal = balanceOfCT[_holder];
        return _bal;
    }

    /* Send coins */
    function CTtransfer(address _to, uint256 _value) {
        if (_to == 0x0) throw;                               // Prevent transfer to 0x0 address
        if (balanceOfCT[CTOwner] < _value) throw;           // Check if the sender has enough
        if (balanceOfCT[_to] + _value < balanceOfCT[_to]) throw; // Check for overflows
        balanceOfCT[CTOwner] -= _value;                     // Subtract from the sender
        balanceOfCT[_to] += _value;                            // Add the same to the recipient
        currencyTransfer(CTOwner, _to, _value);                   // Notify anyone listening that this transfer took place
    }
      

    /* A contract attempts to get the coins */
    function CTtransferFrom(address _from, address _to, uint256 _value) returns (bool success) {
        if (_to == 0x0) throw;                                // Prevent transfer to 0x0 address
        if (balanceOfCT[_from] < _value) throw;                 // Check if the sender has enough
        if (balanceOfCT[_to] + _value < balanceOfCT[_to]) throw;  // Check for overflows
        if (_value > allowanceOfCT[_from][msg.sender]) throw;     // Check allowance
        balanceOfCT[_from] -= _value;                           // Subtract from the sender
        balanceOfCT[_to] += _value;                             // Add the same to the recipient
        allowanceOfCT[_from][msg.sender] -= _value;
        currencyTransfer(_from, _to, _value);
        return true;
    }

   

}