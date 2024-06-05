#!/bin/bash

npm install -g aws-cdk-local aws-cdk;
make build;
make bootstrap;
make deploy;
make prepare-frontend-local;
make build-frontend;
make bootstrap-frontend;
make deploy-frontend;
distributionId=$(awslocal cloudfront list-distributions | jq -r '.DistributionList.Items[0].Id');
echo \"PREVIEW_URL=$AWS_ENDPOINT_URL/cloudfront/$distributionId/\";
