pragma solidity ^0.4.8;

import "./AToken.sol";
import "./CToken.sol";

// contract AToken { address ATOwner; function transfer(address receiver, uint amount){  } }

// contract CToken { address CTOwner; function transfer(address receiver, uint amount){  } }

contract Exchange is AToken, CToken{
    // address public beneficiary;
    // uint public fundingGoal; uint public amountRaised; uint public deadline; uint public price;
    AToken public assetToken;
    CToken public currencyToken;
    // mapping(address => uint256) public balanceOf1;
    // mapping(address => uint256) public balanceOf2;
    
    // event FundTransfer(address backer, uint amount, bool isContribution);
    

    // /* data structure to hold information about campaign contributors */

    /*  at initialization, setup the owner */
    // function Exchange(
    //     AToken addressOfTokenUsedAsAsset,
    //     CToken addressOfTokenUsedAsCurrency
    // ) {
    //     assetToken = AToken(addressOfTokenUsedAsAsset);
    //     currencyToken = CToken(addressOfTokenUsedAsCurrency);
    // }

    function setExchange(
        AToken addressOfTokenUsedAsAsset,
        CToken addressOfTokenUsedAsCurrency
    ) {
        assetToken = AToken(addressOfTokenUsedAsAsset);
        currencyToken = CToken(addressOfTokenUsedAsCurrency);
    }

    /* The function without name is the default function that is called whenever anyone sends funds to a contract */
    function tradeCurrencyWithAsset(uint _amt, address _seller) {
        // ATtransfer(_buyer,_amt);
        currencyToken.CTtransfer(_seller,_amt);
     
        }

    function tradeAssetWithCurrency(uint _amt, address _buyer) {
        assetToken.ATtransfer(_buyer,_amt);
        // CTtransfer(_seller,_amt);
     
        }
}