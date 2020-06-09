---
title: "S3 Image/Video Upload React Component with AWS Amplify"
date: "2020-06-09"
---

#### Running App Example

S3 Image/Video upload into Amazon S3 requires Amazon Cognito for user authentication. Once user Signed-Up and Signed-In, the user can start to see file upload form:

![](images/Screen Shot 2020-06-09 at 2.20.56 PM.png)

On this blog, we will utilize AWS Amplify to setup Amazon S3 and Amazon Cognito backend, and integrate it with our React component front-end. 

#### Prerequisites

##### Create React App

Create React App using NPX/NPM CLI, follow this guide for start: https://create-react-app.dev/docs/getting-started/ 

##### Add Amplify, S3, and Cognito

Add Amazon Cognito support to your App by using Amplify CLI from your App directory as follow:

```shell
prompt$ cd app-directory

prompt:~app-directory$ amplify init 
(follow the guide to initialize amplify backend configuration)

prompt:~app-directory$ amplify add storage 
(follow the guide, this will also add Cognito support during the guide)

prompt:~app-directory$ amplify push 
(pushing your Cognito configuration to AWS back-end using CloudFormation. Cognito User Pools and configuration will be created)
```

#### Code

##### HTML/JSX Form

We will use simple HTML/JSX input form with type=file. Below are the code snippet for the form section. The full App.js file can be found here: https://github.com/sigitp-git/s3fileupload-react-amplify

```javascript
//---- code snippet ----//
      <div className='video-uploader'>
        <form onSubmit={(e) => onSubmit(e)}>
          <p>
            <label className='select-label'>Select video: </label>
          </p>
          <p>
            <input
              className='video-input'
              type='file'
              id='file-input'
              accept='image/*, video/*'
              onChange={(e) => onChange(e)}
            />
          </p>
          <button type='submit' className='btn'>
            Submit <MdSend className='btn-icon' />
          </button>
        </form>
      </div>
//---- code snippet ----//
```

##### Importing Amplify, Storage (S3), and Cognito Authentication

Once pre-requisites above done, we can start importing Amplify, Storage (S3), and Cognito objects into our code. Notice that for Cognito, we are importing the `AmplifyAuthenticator`, `AmplifySignOut`, `AmplifySignIn`, and` AmplifySignUp` UI components. 

```javascript
//---- code snippet ----//
import React, { useState } from 'react'
import './App.css'
import Amplify, { Storage } from 'aws-amplify'
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react'
import { MdSend /* MdList */ } from 'react-icons/md'
import awsConfig from './aws-exports'
Amplify.configure(awsConfig)
//---- code snippet ----//
```

##### React Functional Component for Storage (S3) Upload

We will use 3 states to help us creating the functions, the states are: `name` (to record the file name), `file` (to record the file object that will be uploaded), and `response` (to record status of the upload process). 

We will use 2 event handler: `onChange()` and `onSubmit()` from the HTML page.`onChange()` will change the state of file and name during user interaction of choosing the file, then once button submitted, `onSubmit()` will take both `name` and `file` state as argument to pass into `Storage.put()` method provided by Amplify, `response` state will also be updated along with the upload status result. 

```javascript
//---- code snippet ----//
const App = () => {
  const [name, setName] = useState('')
  const [file, setFile] = useState('')
  const [response, setResponse] = useState('')

  const onChange = (e) => {
    e.preventDefault()
    if (e.target.files[0] !== null) {
      setFile(e.target.files[0])
      setName(e.target.files[0].name)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (file) {
      Storage.put(name, file, {
        /* level: 'protected', */
        contentType: file.type,
      })
        .then((result) => {
          console.log(result)
          setResponse(`Success uploading file: ${name}!`)
        })
        .then(() => {
          document.getElementById('file-input').value = null
          setFile(null)
        })
        .catch((err) => {
          console.log(err)
          setResponse(`Can't upload file: ${err}`)
        })
    } else {
      setResponse(`Files needed!`)
    }
  }
  //---- code snippet ----//
```

#### Summary

As you can see, adding Storage (S3) Support, Authentication, Sign Up, Sign In, and Sign Out is very easy with AWS Amplify support. AWS handles the backend heavy-lifting to store your Image/Video, user information, SMS/E-Mail based verification, Passwords policy and much more, Happy Coding!

#### Reference

https://github.com/sigitp-git/s3fileupload-react-amplify

https://docs.amplify.aws/lib/storage/getting-started/q/platform/js

#### Discuss on Dev.to

https://dev.to/sigitp/s3-image-video-upload-react-component-with-aws-amplify-4ej4