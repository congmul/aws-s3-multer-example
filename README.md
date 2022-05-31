# AWS S3-Multer Example

[Deployed Link](https://aws-s3-multer-example-jjung.herokuapp.com/)

## AWS Credentials
 - There are two ways. (This example uses dotenv)
    1. dotenv file
    ```
    AWS_ACCESS_KEY_ID=''
    AWS_SECRET_ACCESS_KEY=''
    REGION=''
    BUCKET=''
    ```
    2. AWS CLI
    ```
    aws configure
    ```
    <img src="./assets/img/aws-configure.png" width="400px" />

    ----
    * Setting Up S3 for Your Heroku App

    ```
    heroku config:set AWS_ACCESS_KEY_ID=MY-ACCESS-ID AWS_SECRET_ACCESS_KEY=MY-ACCESS-KEY REGION=MY-REGION BUCKET=MY-BUCKET-NAME
    Adding config vars and restarting app... done, v21
    AWS_ACCESS_KEY_ID     => MY-ACCESS-ID
    AWS_SECRET_ACCESS_KEY => MY-ACCESS-KEY
    ```
    ----

## How to get Credentials (AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY)
 1. Visit Security credentials TAB in Identity and Access Management(IAM) 
 2. Create access key
 3. Get access key ID and secret key

## Enable ACLs
 1. Permissions TAB in a Bucket
 2. Block public access(butket settings) -> uncheck all
 3. Object Owenership -> Select ALCs enabled and Object writer