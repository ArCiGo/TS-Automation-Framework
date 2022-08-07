FROM cypress/browsers:node16.14.2-slim-chrome100-ff99-edge

# Create the folder where our project will be stored
RUN mkdir /my-cypress-project

# We make it our work-directory
WORKDIR /my-cypress-project

# Let's copy the essential files that we must use to run our scripts. Right value means the destination
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.js .
COPY ./cypress.env.json .
COPY ./cypress ./cypress

# Install the Cypress dependencies in the work directory
# `RUN npm install` was causing a problem at the moment to execute the dockerfile: 'No version of Cypress is installed in: /root/.cache/Cypress/10.3.1/Cypress'
# To solve that, I copied the `package-lock.json .` and I changed to the following command:
RUN npm ci

# Executable commands the container will use[Exec Form]
ENTRYPOINT ["npx", "cypress", "run"]
CMD [""]