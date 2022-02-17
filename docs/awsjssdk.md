---
sidebar_position: 4
---

# AWS JavaScript SDK

:::danger

**Do not put a callback function in an async AWS service call.**  

```js 
//This is bad
const result = await s3.listObjectsV2(params, function(err, data){
    if(err) console.log("There was an error listing the objects: ", err)
    else return data
}).promise();
//m'kay
```
:::


```js  jstitle="Node.js Lambda - AWS async service call"
//Do something like this instead
  try {
    const result = await s3.listObjectsV2(params).promise();
  } catch (err) {
    console.log("There was an error listing the objects: ", err);
  }
```
