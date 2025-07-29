FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first to install dependencies
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy all other source files
COPY . .

# Disable ESLint during build to avoid build errors from lint issues
ENV NEXT_DISABLE_ESLINT=true

# Build the Next.js application
RUN npm run build

# Expose port 3000 for the app
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
