## Weather App

## Front-End
  - In this application users can see weathers and also users can also search it by location . 
  - In front end there is navebar it contains   four menu:- 
    1.Home 
    2.Signup 
    3.Login 
    4.Weather
  - Before user login they can not access weather page 
  - When users click on save button then location and temp saved into database and they will see in future.




  ## Back-End


## To register user
* method : POST
* status : 201
* Endpoint : api/register
* response : User register Successfull(if it is not present) || if it is present then it will give response user already registered.

## To login user
* mehtod : POST
* status : 201
* endpoint : users/login
* response : user login successfull (if credential is right) ||  login failed



 ## To Weather
 * method : GET
 * status : 200
 * endpoint : weathers/location
 * response : When users hit the endpoint then we users can see the particular location.

 ## For Saving History into Database
 * method : GET
 * status : 200
 * endpoint : weathers/save
 * response : If users want to save his data then they can simply hit that endpoint and they will able to save data into database.



