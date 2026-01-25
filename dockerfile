# Base image
FROM ubuntu:24.04

# Sistem update ve temel paketler
RUN apt-get update && apt-get install -y \
    curl \
    git \
    build-essential \
    vim \
    && rm -rf /var/lib/apt/lists/*

# Node.js 20 kurulumu
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && node -v \
    && npm -v

# Container çalışma dizini
WORKDIR /mc-api

# package.json ve package-lock.json kopyalama
COPY package*.json ./

# Bağımlılıkları yükleme
RUN npm install

# Tüm proje dosyalarını kopyala
COPY . .

# Port expose
EXPOSE 3000

# Container açıldığında server çalışsın
CMD ["npm", "run", "dev"]
