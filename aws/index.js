const gh_graphql = require('./gh_graphql');
const aws = require('aws-sdk');

exports.handler = async (event) => {
  const gh_res = await gh_graphql.client.query({query: gh_graphql.githubReposQuery});

  const s3 = new aws.S3();
  return await s3.putObject({
    Bucket : process.env.S3_BUCKET,
    Key : process.env.S3_KEY,
    Body : JSON.stringify(gh_res)
  }).promise();
};
