# frontend/Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only necessary files to install dependencies
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the full frontend app
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port
EXPOSE 3000

# Start in production mode
CMD ["npm", "run", "start"]
