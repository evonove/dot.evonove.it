# Django OAuth Toolkit

Requirements
====

* [yarn](https://yarnpkg.com/en/)
* [hugo](https://gohugo.io/)

Getting Started
===

Go to project root folder and install dependencies

        $ yarn

Compile necessary files

        $ webpack -w

Go to `site` folder and launch the webserver

        $ hugo server -w

   or if you want to run the site on tablet, smartphone or whatever

        $ hugo server -D -w --bind <your_ip> --baseURL http://<your_ip>

Go to [localhost:1313](http://localhost:1313) or `<your_ip>:1313`, depending on previous instruction, to see the site running
