FROM maven:3.8.3-openjdk-17 as maven
WORKDIR /app
COPY src /usr/src/app/src
COPY pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean package

FROM openjdk:17
ENV APP_HOME=/usr/thesis/
WORKDIR $APP_HOME
VOLUME /thesis
COPY --from=maven /usr/src/app/target/*.jar thesis.jar
CMD ["java", "-jar","thesis.jar"]
EXPOSE 8080