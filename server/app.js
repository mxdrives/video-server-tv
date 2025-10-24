const express = require('express');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware de segurança e otimização
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      mediaSrc: ["'self'", "data:", "blob:"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"]
    }
  }
}));

app.use(compression());
app.use(cors());
app.use(morgan('combined'));

// Middleware para parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../client')));
app.use('/videos', express.static(path.join(__dirname, '../videos')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

// Rota para listar vídeos disponíveis
app.get('/api/videos', (req, res) => {
  const fs = require('fs');
  const videosPath = path.join(__dirname, '../videos');
  
  try {
    const files = fs.readdirSync(videosPath);
    const videos = files.filter(file => file.endsWith('.mp4'));
    res.json({ 
      success: true,
      videos: videos.map(video => ({
        name: video,
        url: `/videos/${video}`
      }))
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Erro ao listar vídeos' 
    });
  }
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    error: 'Algo deu errado!' 
  });
});

// Middleware para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    error: 'Rota não encontrada' 
  });
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`🚀 Servidor rodando em http://${HOST}:${PORT}`);
  console.log(`📁 Servindo arquivos de: ${path.join(__dirname, '../client')}`);
  console.log(`🎥 Servindo vídeos de: ${path.join(__dirname, '../videos')}`);
});

module.exports = app;