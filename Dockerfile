FROM luis/nodejs
MAINTAINER Luis Elizondo "lelizondo@gmail.com"
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update
RUN apt-get install -y git
RUN npm install -g sails mocha sinon should assert grunt bower
RUN rm /etc/supervisor/conf.d/*.conf
ADD ./docker/supervisord.conf /etc/supervisor/conf.d/supervisord-nodejs.conf
EXPOSE 3000
EXPOSE 1337
WORKDIR /var/www
VOLUME ["/var/files", "/var/www"]
CMD ["/usr/bin/supervisord", "-n"]
