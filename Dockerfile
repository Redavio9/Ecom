FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app
COPY target/app.jar ./app.jar

EXPOSE 8082

CMD ["java", "-jar", "app.jar"]