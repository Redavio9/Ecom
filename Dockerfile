FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app
COPY target/solix.jar ./solix.jar

EXPOSE 8082

CMD ["java", "-jar" , "solix.jar"]