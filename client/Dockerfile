# Step 1: Use the Node.js image to build the React app
FROM node:16 as build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Step 4: Copy the rest of the source code
COPY . .

# Step 5: Build the React app
RUN npm run build

# Step 6: Serve the build using an NGINX server
FROM nginx:alpine

# Step 7: Copy the React build to the NGINX HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 8: Expose the port on which the frontend will be available
EXPOSE 80

# Step 9: Run the NGINX server
CMD ["nginx", "-g", "daemon off;"]
