// Configurações do servidor
module.exports = {
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    env: process.env.NODE_ENV || 'development'
  },
  
  paths: {
    client: '../client',
    videos: '../videos',
    uploads: '../uploads'
    
  },
  
  video: {
    allowedFormats: ['.mp4', '.webm', '.avi', '.mov'],
    maxFileSize: '100MB',
    streamChunkSize: 1024 * 1024 // 1MB chunks
  },
  
  security: {
    rateLimitWindow: 15 * 60 * 1000, // 15 minutos
    rateLimitMax: 100, // máximo 100 requests por janela
    corsOrigins: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : ['*']
  }
};