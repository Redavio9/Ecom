
#multi-stage

#-> Builder Stage
FROM maven:3-eclipse-temurin-17 AS builder


WORKDIR /app


COPY pom.xml .

COPY src ./src

RUN mvn clean package -DskipTests

#-> Runtime Stage
FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app


COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8082


ENTRYPOINT ["java", "-jar", "app.jar"]