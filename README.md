# DynamoDB table scan and display web application

This is a dynamic s3 website which uses API gateway and Lambda to scan a Dynamodb Table and displays in tabular format. 

Before deploying the Stack::
           
	Zip up function.js
	Create an S3 bucket and upload the function.zip file
	Update template.yaml - bucket-name ( in CodeUri)

Deployment using Cloudformation
	   
	aws cloudformation deploy --template-file template.yaml --stack-name <<STACK-NAME>>--capabilities CAPABILITY_IAM

Identify "api-gateway-url" from the output

	aws cloudformation describe-stacks --stack-name <<STACK-NAME>>  --query Stacks[].Outputs[].OutputValue[] --output text

After deploying the Stack:: 

	 Update the <<api-gateway-url>> in index.html
	 Upload to s3 bucket and enable website.
	   
Browse the s3 website. 

Javascript within index.html calls the API gateway to read the table and display in the browser. 
Initally the table is empty. The MySamInsertFunction can be manually invoked used to 'put a sample item' into the DynamoDB table.

Now refresh the browser to display the table contents.

===============================================================================

