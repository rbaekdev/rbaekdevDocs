---
sidebar_position:  5
---

# AWS Developer Certification

### SQS - Simple Queue Service

#### About
- No limit to number of messages sent/s and held in queue
- Retained for 4 - 14 days
- Message has 256KB size limit
- Sometimes the message is sent more than once
- Can be out of order, unless FIFO (first in first out)
- When a message is polled by a consumer, it's visibilty timeout is 30s till other consumers can request and receive that message

#### SDK
- SendMessage
- ReceiveMessage
- ChangeMessageVisibility (set timeout / or use VisibilityTimeout param in ReceiveMessage)
- DeleteMessage
- etc...

#### Encryption
- In-flight HTTPS
- At-rest KMS keys
- Client

#### SQS Access Policies
- Similar to S3 Bucket policy<br />
**Common use cases**
    - Cross account access
    - S3 Event sends message to SQS Queue
```json title="SQS S3 Access Policy example"
{
"Version": "2012-10-17",
"Statement": [
    {
        "Effect": "Allow",
        "Principal": {"AWS": "*"},
        "Action": ["sqs:SendMessage"],
        "Resource": "arn:sqs",
        "Condition": {
            "ArnLike": {"aws:SourceArn": "arn:s3:bucketName"},
            "StringEquals": {"aws:SourceAccount": "acct_id"}
        }
    }
]
}

```
#### Dead Letter Queue (DLQ)
If message process fails and is looped back to queue to consumer. <br />
- if loops > MaximumReceives threshold = sent to DLQ

#### Use Case Example
- EC2s in Auto Scaling Group (ASG)
- Cloudwatch on SQS Queue with Cloudwatch Alarm for Queue Length
- Queue Length > certainValue = ASG scales up for better message processing

### SNS

### Kinesis

### Lambda

### DynamoDB

### API Gateway

### Cognito

### Cloudfront

### S3

### IAM

### CLI

### SDK

### EC2

### Elastic Beanstalk

### Elastic Load Balancer

### Auto Scaling Group

### RDS

### ElastiCache

### Route 53

### VPC

### Containers

#### ECS

#### ECR

#### Fargate

### SAM - Serverless Application Model

### CDK - Cloud Development Kit

### CloudFormation

### CI/CD

#### CodeCommit

#### CodePipeline

#### CodeBuild

#### CodeDeploy

### Monitoring

#### Cloudwatch

#### X-Ray

#### Cloudtrail

### Encryption

#### KMS

#### SSM Parameter Store

### Others