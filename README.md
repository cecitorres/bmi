# Body Mass Index Calculator
A very simple web application to calculate the body mass index (BMI). It keeps a history of the user BMI.

# Install
The install process is very simple if you use Docker and [Fig](http://fig.sh)

1. Clone or download the application
2. Copy the fig.yml.example to fig.yml

	$ cp fig.yml.example fig.yml

3. Create a new volume data container for mongodb.

	$ docker run -v /data/db --name MONGODB_DATA busybox true

4. Create a new Project at [Google Developers](https://console.developers.google.com) and then go to your newly created project and click on APIs & auth. After that, create a new client ID and fill out the form. Do not forget to go to Consent screen and fill out that form too.

5. Edit your fig.yml file and change the section "environment" with your values. **Don't forget to adjust the "volumes" section with your own paths**

6. If you want logs (highly recommended), create a directory:

	$ sudo mkdir -p /var/log/docker/bmi

7. Start the application

	$ fig up -d

Docker will start to download the images. This will take a few minutes, sit back and relax.

8. Your project will not start because you need to run "npm install". Enter the following command:

	$ fig run --rm web npm install

NPM will start to download everything needed, this will take a few minutes too. More relaxing time.

9. Finally, restart the node container:

	$ fig stop web ; fig start web

10. Take a look at the logs:

	$ tail -f /var/log/docker/bmi/nodejs.log

11. If everything is OK, then go to http://yourdomain

12. Enjoy

## License
The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
