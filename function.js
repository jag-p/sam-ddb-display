var aws = require('aws-sdk');
var dynamodb = new aws.DynamoDB();
// Update the Table name below
var tablename = '<<dynamodb-table-name>>'

exports.handler = (event, context, callback) => {
    dynamodb.scan({TableName: tablename}, (err, data) => {
        callback(null, data['Items']);
    });
};