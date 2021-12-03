 <font color='green'>File</font> : BlockTest
---
<font color='green'>Urls and  functions</font>
---

#### testPostBlockComment

````
http://Apireetags-env.eba-nbnp3nhe.eu-west-1.elasticbeanstalk.com/api/1/google_vision/assets

| url                                                                                                  | functions       | commande             |
| :----------------------------------------------------------------------------------------------------| :-------------: | --------------:      |
| http://Apireetags-env.eba-nbnp3nhe.eu-west-1.elasticbeanstalk.com/api/1/google_vision/assets         | blockComment    |    .\vendor\bin\phpunit .\tests\TokenNotificationsTest.php|

````

<font color='green'>HEADERS</font>
---
````
Authorization : Basic Auth
````
<font color='green'>BODY</font> `none`
---

<font color='green'>Response</font>
---
````
{
    "id": "1",    
    "assets": "8e485ab533819f89"
}
`````
<font color='orange'>POST</font> : Google_vision
---
<font color='orange'>Url</font> 
---
````
http://Apireetags-env.eba-nbnp3nhe.eu-west-1.elasticbeanstalk.com/api/1/google_vision/assets
````
<font color='orange'>HEADERS</font>
---
````
Authorization : Basic Auth
````
<font color='orange'>BODY</font> `x-www-form-urlencoded`
---

| KEY           | VALUE           | DESCRIPTION          |
| :-----        | :-------------: | --------------:      |
| asset         | 8e485ab533819f89|                      |

<font color='orange'>Response</font>
---
````
{
    "id": "1",
    "assets": "8e485ab533819f89",
    "fail": "1"
}
`````
<font color='green'>GET</font> : Chat (quit_chat)
---
<font color='green'>Url</font> 
---
````
http://Apireetags-env.eba-nbnp3nhe.eu-west-1.elasticbeanstalk.com/api/1/chat/quit_chat
````
<font color='green'>HEADERS</font>
---
````
Authorization : Basic Auth
````
<font color='green'>BODY</font> `none`
---

<font color='green'>Response</font>
---
````
[
    {
        "id": "1",
        "user_id": "65",
        "stranger_id": "65686",
        "room_id": "%21KwWlnWRHrxTbNvndkA%3Apreprod-matrix.reetags.com",
        "exit_date": "2020-11-12 21:43:53",
        "age": "0"
    }
]

`````
<font color='orange'>POST</font> : Chat (quit_chat)
---
<font color='orange'>Url</font> 
---
````
http://Apireetags-env.eba-nbnp3nhe.eu-west-1.elasticbeanstalk.com/api/1/chat/quit_chat
````
<font color='orange'>HEADERS</font>
---
````
Authorization : Basic Auth
````
<font color='orange'>BODY</font> `x-www-form-urlencoded`
---

| KEY           | VALUE              | DESCRIPTION          |
| :-----        | :----------------: | --------------:      |
| stranger_id   | 13                 |                      |
| room_id       | !KwWlnWRHrxTbNvndkA|

<font color='orange'>Response</font>
---
````
    "success"
````
<font color='red'>DEL</font> : Chat (quit_chat)
---
<font color='red'>Url</font> 
---
````
http://staging.reetags.com/wp-json/wp/v7.0.5.1/chat/quit_chat/{room_id}
````
<font color='red'>HEADERS</font>
---
````
Authorization : Basic Auth
````
<font color='red'>BODY</font> `none`
---
<font color='red'>Response</font>
---
````
"success"
````
<font color='orange'>POST</font> : Chat (create register)
---
<font color='orange'>Url</font> 
---
````
http://Apireetags-env.eba-nbnp3nhe.eu-west-1.elasticbeanstalk.com/api/1/chat/create/register
````
<font color='orange'>HEADERS</font>
---
````
Authorization : Basic Auth
````
<font color='orange'>BODY</font> `x-www-form-urlencoded`
---

| KEY           | VALUE              | DESCRIPTION          |
| :-----        | :----------------: | --------------:      |
| user_id       | @rs_62600          |                      |

<font color='orange'>Response</font>
---
````
    {
        "displayname": "rs_62600"
    }
````
