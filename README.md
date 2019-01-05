"# dms-trial"

##To start Application###

##Need to setup Java version 8##

#Application bootstrapping command##

java -jar dms-trial.jar

##Url as below##

http://localhost:8080/dms

##or using ipconfig find ipv4 address use like this##

http://192.168.0.105:8080/dms

##For more detail structure read instruction manual located at dms-trial/release/trial/Instruction with flow.docx##

##For development
Run build maven using pom.xml to get all required dependencies

##If Maven is install use directly as below

mvnw clean install

mvnw spring-boot:run
