# DynamoDB table scan and display web application

This is a dynamic s3 website which uses API gateway and Lambda to scan a Dynamodb Table and displays in tabular format. 

Please update these before deploying:
           function.js - dynamodb-table-name
           template.yaml - bucket-name ( in CodeUri)

After deploying the API gateway, please update the api-gateway-url in index.html and upload to s3 bucket and enable website.
