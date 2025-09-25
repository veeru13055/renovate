# Base image
FROM node:24.8.0

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
