FROM node:20

WORKDIR /app

# Instaliraj pakete
RUN npm install express

# Kopiraj ostatak aplikacije
COPY . .

# Port koji app koristi
EXPOSE 3000

# Start
CMD ["npm", "start"]