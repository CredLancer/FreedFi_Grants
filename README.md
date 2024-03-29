# FreedFi: Empowering Grants Distribution with Soulbound Credentials

## Project Description
FreedFi is a pioneering project that revolutionizes the distribution and management of grants by leveraging a digital reputation system and soulbound credentials. The current challenge lies in verifying whether grantees have fulfilled their promised actions. To address this, FreedFi provides a simple vetting system for grant applications, secure fund distributions, and verification of Proof of Impact.

## Technical Architecture
- ZKProofs for Work History, Training, and Open Contract Verification: FreedFi utilizes zero-knowledge proofs to verify work history, training completion, and the open contract verification process. This ensures secure access to sensitive data without compromising privacy.

- Allo Protocol: The Allo protocol consists of the Registry.sol and Pool.sol smart contracts. These contracts facilitate grant requests, transfers, and the issuance of value credentials. They form the backbone of the trustless and transparent grant distribution process.

- ValueCredential.sol: FreedFi implements the ValueCredential.sol smart contract, which issues SoulBoundTokens (ERC1155) exclusively to grantees' wallets. These value credentials serve as proof of credibility and are awarded to grantees only after their Proof of Impact data is submitted and verified.

- Rainbow Kit - Metamask Connection: FreedFi enhances user experience and accessibility by providing seamless integration with the Rainbow Kit and Metamask. This enables users to connect their wallets and interact with the platform effortlessly.

## Unique Value Proposition
FreedFi offers a range of features and advantages that empower grantees and investors while prioritizing privacy and security.

### Trust Score & Skill Verification:
- Soulbound Credentials (ERC1155): FreedFi implements soulbound credentials to verify freelancers' skills and trustworthiness. These credentials, combined with zero-knowledge proofs, attest to work history and training completion, enhancing trust and credibility within the platform.

### Value Credentials and Proof of Impact:
- Soulbound Credentials (ERC1155): FreedFi issues soulbound credentials (Value Credentials) to grantees' wallets, validating their credibility. These credentials are earned by providing proof of impact for grant completion, verified through zero-knowledge proofs.

### Trustless & Transparent:
- Smart Contracts: The use of smart contracts, such as the Allo protocol, ensures a trustless and transparent process for grant requests, transfers, and value credential issuance. This eliminates the need for intermediaries and provides real-time visibility into the grant distribution cycle.

## Problem Solved
FreedFi addresses the challenges associated with grant distribution, including:
- Lack of transparency in verifying grant fulfillment.
- Inefficient fund management and tracking.
- Limited trust and credibility in the grant ecosystem.

By leveraging soulbound credentials, zero-knowledge proofs, and a trustless architecture, FreedFi brings transparency, accountability, and real-time visibility to the grant distribution process. It empowers grantees with enhanced credibility and provides a secure and efficient platform for investors and organizations involved in the grant ecosystem.

Deployment: https://freedfigrant.vercel.app/
Pitch Deck: https://freedfi.my.canva.site/
Value Credential Contract Deployment: https://sepolia.arbiscan.io/address/0x210b7a76151d745cb7cda4c64ab05ef5609679e7

Original FreedFi for Loans: our original contracts (also deployed on Arbitrum) https://github.com/CredLancer/FreedFi_Updated

## ABI files

[Allo Implementation](https://github.com/CredLancer/FreedFi_Grants/blob/main/frontend/abi/AlloImplementation.json)

[Registry](https://github.com/CredLancer/FreedFi_Grants/blob/main/frontend/abi/Registry.json)


GetaLoan.sol https://github.com/CredLancer/FreedFi_Updated/blob/main/contracts/src/GetALoan.sol (Opens smart contract for a loan request)

PoolController.sol https://github.com/CredLancer/FreedFi_Updated/blob/main/contracts/src/PoolController.sol (Distribution of Loan through FreedFi Pool)

SimpleCredentialVerifier.sol https://github.com/CredLancer/FreedFi_Updated/blob/main/contracts/src/trustcredentials/SimpleCredentialsVerifier.sol (Soulbound Credential after payback or Proof of Impact)

Updated FreedFi with Allo Protocol: https://github.com/CredLancer/FreedFi_Updated
- Allo Registry.sol for grantee and investor verified data
- Allo Pool.sol for grant distribution (with additional function to require Proof of Impact)
- SimpleCredentialVerifier.sol (now provids Value Credential Data - date of grant, date dispersed, date Proof of Impact received, date PoI approved by investors)


