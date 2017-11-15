var aws = require('aws-sdk');
var dynamodb = new aws.DynamoDB();
// Update the Table name below
var tablename = 'sessions'

exports.handler = (event, context, callback) => {
    dynamodb.scan({TableName: tablename}, (err, data) => {
        callback(null, data['Items']);
    });
};