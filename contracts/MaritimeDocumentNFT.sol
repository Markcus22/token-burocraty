// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MaritimeDocumentNFT is ERC721URIStorage, Ownable {
    uint256 public docCount = 0;

    event DocumentMinted(uint256 indexed tokenId, address indexed recipient, string tokenURI);

    constructor() ERC721("MaritimeDocument", "MDOC") {}

    function mintDocument(address to, string memory tokenURI) public onlyOwner returns (uint256) {
        docCount += 1;
        _mint(to, docCount);
        _setTokenURI(docCount, tokenURI);
        emit DocumentMinted(docCount, to, tokenURI);
        return docCount;
    }

    function burnDocument(uint256 tokenId) public onlyOwner {
        _burn(tokenId);
    }
}