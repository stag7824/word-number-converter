# Numbers2Words || Words2Numbers

This project is a technical assessment for Alpha Mu Digital Ventures.

## Requirements

The following diagram illustrates the high-level requirements for this project:

```mermaid
graph TD
    A[API Development]
    B[Docker Support]
    C[Unit Tests]
    D[Code Quality]
    E[Documentation]
    A -->|Endpoint 1: Words to Numbers| F1
    A -->|Endpoint 2: Numbers to Words| F2
    F1 -->|Handle punctuation and conjunctions| G1
    F1 -->|Support decimals and fractions (extra credit)| G2
    F1 -->|Support numbers up to 9,999,999.99| G3
    F2 -->|Support decimals (extra credit)| G4
    F2 -->|Support numbers up to "Nine million..."| G5
    B -->|Include a Dockerfile| H1
    C -->|Write relevant unit tests| I1
    D -->|Follow industry best practices| J1
    E -->|Include a README.md with instructions| K1

