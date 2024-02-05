# Orion App.

## This is an implementation for solar panels project.

### Description

In this project you can find a backend solution impelmented with Java (Spring Boot) and a frontend solution developed in Angular 12.
The respective projects are named orion and orion-ngx.

### Tech Stack Specifications

#### Docker Compose Run
Install docker and in the folder of the project run:

```
docker-compose up
```

Then, go to:
```
localhost:8083
```

Which is the ui of the app.

**Note**
Spring boot app is running at localhost:8082

#### Angular v.12

**Note**
Install node and angular and the run the project:

```
$ ng serve
```
Which will start the project at:

```
localhost:4200
```
If you want to specify port you can run:

```
$ ng serve --port <port-of-your-preference>
```
Which will start the project at:

```
localhost:<port-of-your-preference>
```

#### Spring Boot

The Java project is a Spring Boot Maven project, it has H2 which is an in memory database to store the necessary data.


Import the code to your favorite IDE and build project by running:

```
mvn clean install
```

Then start the application, by default it runs at:

```
localhost:8080
```

### Exposed APIs

*You can find all the exposed APIs in the swagger*

#### For docker 
```
localhost:8082/swagger-ui/index.html
```

#### For running on the local machine 
```
localhost:8080/swagger-ui/index.html
```
