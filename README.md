# Eika shopping list

## About

This is a shopping list management system. <br />
User can add item to the shopping list with image, name, price and status.<br />
User can change the item status and show/hide completed item list.<br />
It's backend is built using Java Spring Boot REST APIs with spring data JPA and spring security. <br />
It's frontend is built using React javascript.

## How to run the application

- Clone this project <br />

### backend

- go to eika-backend
- Create a database in your MySQL instance.
- Update the application.properties file in the src/main/resources folder with the URL, username and password for your MySQL instance.
- Open a terminal in folder eika-backend <br />
- Run `mvnw package`
- Run `java -jar target/eikaShoppingList-0.0.1-SNAPSHOT.jar` <br />
- Now the backend is running at http://localhost:8080

### frontend

- Open a terminal in folder eika-frontend <br />
- Run `npm install` <br />
- Run `npm start` <br />
- Now you can use it from browser at http://localhost:3000/ <br />

# Documents

Folder ProjectManagement has documents related to management of project <br />

1. [Class Diagram](https://drive.google.com/file/d/1q_Hr3yiJ3THpJy2R36TTMLMKUX52A7X7/view?usp=sharing) <br />
2. [Use case Diagram](https://drive.google.com/file/d/1D9oJOGoFxVOAGGy2gIyWWiyOFN5_Ptv2/view?usp=sharing)<br />
3. Stories and tasks - Trello [Click here](https://trello.com/invite/b/TGTmzDpE/ATTI6128bececfbf8d84b8c457ec6c97852516851965/eika-shopping-list)<br />

# Java Version

17.0.2

# React Version

18.2.0

# Future Improvements

- Logout user
- Retrive password
