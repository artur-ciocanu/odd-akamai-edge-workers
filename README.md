# Background
This repository tries to demonstrate how we can leverage `Adobe Target NodeJS SDK` `On-Device Decisioning functionality` from an `Akamai Edge Worker`.

# Prerequisites
There are a few prerequisites:
- `Akamai` credentials
- `Akamai CLI`
- `Akamai CLI` with `Edge Workers` plugin enabled
- `Akamai` contract with `Edge Workers` enabled. You'll need Ion or similar product, please check `Akamai` documentation

## Akamai Credentials
In order to use `Akamai CLI` we need credentials, using `Akamai IAM` we should create a so called "API Client". Once the API Client is created we can download the credentials and add them to `.edgerc` file in our user home directory.

To make sure we can use the credentials from `.edgerc` we will have to pass the "section" as a parameter. If we have an `.edgerc` with a section named `[default]`, then when using `Akamai CLI` we will have to invoke any command using this:
```bash
$ akamai --secion=default ....
```

## Tools setup
We will need to instal `Akamai CLI`, on Mac OS X this can be done using `Homebrew`, like this:
```bash
$ brew install akamai
```

We will need to add `Edge Workers` support to `Akamai CLI`. This can be done by running:
```bash
$ akamai install edgeworkers
```

# Development
In order to automate the `Akamai` provisioning for `Akamai EdgeWorkers` we will be using `Terraform`. To make it easier to navigate the repository, the code is split in:
- `terraform` - this folder contains all the `Terraform` scripts required to provision resources like edge host name, property, etc
- `script` - this folder contains the source code for `Akamai EdgeWorker` plus all the build and bundling logic.
