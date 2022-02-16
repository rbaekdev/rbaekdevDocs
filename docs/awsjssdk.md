---
sidebar_position: 3
---

# AWS JavaScript SDK

:::danger

**Do not put a callback function in an async AWS service call.**  

```js 
//This is bad
const result = await s3.putObject(params, function(err, data){
    if(err) console.log("There was an error putting the object: ", err)
    else return data
}).promise();
//m'kay
```
:::


```js  jstitle="Node.js Lambda - AWS async service call"
//Do something like this instead

const getResult = async () => {
  try {
    const result = await s3.putObject(params).promise();
    return result;
  } catch (err) {
    console.log("There was an error putting the object: ", err);
  }
};

getResult();
```
