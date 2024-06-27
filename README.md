# BlogN/A ![Static Badge](https://img.shields.io/badge/License-MIT-blue)
## Description 
 A blog built using the MVC framework. Users can post, comment and like posts after loging in or signing up a user account
## Table of Contents
[Installation](#installation)

[Usage](#usage)

[Screenshot](#screenshot)

[Deployed]{#deployed}

[License](#license)

[Contact](#contact)

## Installation 

For running locally run 
```bash
npm i 
```
to install all the necessary packages. make sure you have postgreSQL installed and sign in to create a data base locally using
```bash 
psql -U 'your postgres user'
```
then load the data base by running
``` bash
\i db/schema.sql
```
quit out of postgres then finally run 

```bash
npm start 
```
to start the server on localhost3001

## Usage 
Signup by filling out the fields and then click register new user or login with your user credentials. Then click the links in the nav bar to create or view posts. To comment on a post view posts then select the one you want to comment on and on the bottom you can enter what you want to comment and attach it to the post by clicking the submit button.

## Screenshot 

![Homepage](/images/BlogNAhome.PNG "Optional title")

## Deployed

https://mvc-tech-blog-umt9.onrender.com

## License 
![Static Badge](https://img.shields.io/badge/License-MIT-blue)
## Contact 
 Ask me questions about the project here
* Github: Ownerman123
* Email: charles.shumway1@gmail.com