# Project Info
This project was created and used to collect RSVP's as well as link to registries for a real wedding. The couple's photographs were replaced by free images found online, and event information was replaced. The project used a Postgres database. The database was hosted on AWS using RDS and the project was hosted on AWS using an EC2 instance with Elastic Beanstalk.

This project was created with Spring Boot using the Maven Wrapper for the backend and React for the forn tend

# Getting Started

The project requires using Maven. With Maven wrapper, it is started using spring-wedding-backend> /.mvnw spring-boot:run The default shared password for authentication to the site is 'github'.

# Build

The react-based frontend, react-wedding-app, is built using 'npm run build' then production files are served to spring-wedding-backend\src\main\resources\static