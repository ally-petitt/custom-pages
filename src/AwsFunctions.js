import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";
import AWS from 'aws-sdk';

AWS.config.update({
    region: 'us-east-1',
    secretAccessKey: '[REDACTED]',
    accessKeyId: '[REDACTED]'
})

const client = new AWS.DynamoDB({
    region: 'us-east-1'
});

// const client = DynamoDBClient({ region: "us-east-1"})

export const listTables = async () => {
    const response = await client.listTables({});
    console.log(response.send())
    const createdTable = await client.createTable({ 
        TableName: "test-table",
        KeySchema: [
            {
              AttributeName: "Season", 
              KeyType: "HASH",
            },
            {
              AttributeName: "Episode",
              KeyType: "RANGE",
            },
          ],
    }).send()

    // console.log("table created", createdTable)
}