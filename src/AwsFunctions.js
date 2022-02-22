import AWS from 'aws-sdk';

AWS.config.update({
    region: 'us-east-1',
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
})

const client = new AWS.DynamoDB({
    region: 'us-east-1'
});

export const listTables = () => {
    const response = client.listTables({}).send();
    console.log(response)
}

export const addItemToDb = ({ pathname, message, templateName }) => {
    const res = client.putItem({ 
        Item: { 
            pathname: { S: pathname },
            message: { S: message },
            templateName: { S: templateName }
        },
        TableName: "template_info",
    }).send()
    
    setTimeout(() => {
        return res.httpResponse
    }, 200)
}

export const getItemFromDb = async (pathname) => {

    return new Promise((resolve, reject) => {
        const res = client.getItem({
        TableName: "template_info",
        Key: {
            pathname: { S: pathname }
        }
        }).send()

        setTimeout(() => {
            resolve(res.data)
        }, 200)
    })
}