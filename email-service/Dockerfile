# Step 1: Use Node.js image
FROM node:16

# Step 2: Set working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy source code
COPY . .

# Step 6: Expose the port the app runs on
EXPOSE 3000

# Step 7: Command to run the application
CMD ["npm", "start"]