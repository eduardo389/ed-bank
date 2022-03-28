FROM debian:latest

RUN apt-get update && apt-get upgrade -y

RUN apt-get install nginx -y

COPY . /var/www/html/edbank

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]