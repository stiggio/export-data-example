# Stigg export data example

<img src="docs/StiggIcon.svg" width="50" alt="Stigg Logo">

This repository contains an example for exporting your Stigg data using a GraphQL client.
When script execution is done, for each entity a file will be created in the ```/data``` directory.
By default, the following data will be exported:
* Product catalog
  * Features
  * Products 
  * Plans
  * Add-ons
  * Coupons
* Customers
* Subscriptions

For data customizations you can alter the queries in the [./src/queries](./src/queries) directory.

### Requirements

* A Stigg account with the data you wish to export.

### Setup

* Clone the repository:
  ```
  git clone git@github.com:stiggio/export-data-example.git
  ```
* Install dependencies using yarn:
  ```
  yarn
  ```
* Obtain the Server API key for the environment you wish to export from https://app.stigg.io/account/settings
* Set the API key
  ```
  export STIGG_SERVER_API_KEY=YOUR_API_KEY
  ```
* Run export:
  ```
  yarn start
  ```