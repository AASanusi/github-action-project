# GitHub Actions for Node.js App

This project demonstrates how to use GitHub Actions for CI/CD automation.

```mermaid
graph TD
  A[Push to GitHub] --> B[Trigger GitHub Action]
  B --> C[Provision Ubuntu VM]
  C --> D[Checkout Code]
  D --> E[Setup Node.js Environment]
  E --> F[Install Dependencies]
  F --> G[Run Tests with Jest]
  G --> H[Pass/Fail Badge in GitHub]

```

## Features

- Simple Node.js greeting app
- Unit testing with Jest
- CI workflow: install, test, and validate

## GitHub Actions Workflow

- Trigger: Push or PR to `main`
- Steps:
  - Checkout repo
  - Install Node
  - Install dependencies
  - Run tests

## How to Run Locally

```bash
npm install
npm test
```
