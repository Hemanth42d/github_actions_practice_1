# Github Actions Practice Application

This repo helps in understanding the Github Actions to use it in continuous integration process
I used a simple node js application and created server using express js and used ejs for rendering pages and what the application do is simple add two number and then display the result and later for testing purpose i integrates subtraction of number(to ensure that CI process is going good)

I used github actions to implement continous integration in the repo as shown in ci.yaml file in the .github/workflow directory

On pushing code to this repo building of the node js application will be trigred automatically.
