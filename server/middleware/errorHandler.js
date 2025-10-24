// Middleware de tratamento de erros
const errorHandler = (err, req, res, next) => {
  console.error('Erro capturado:', err.stack);

  // Erro de validação
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      error: 'Dados de entrada inválidos',
      details: err.message
    });
  }

  // Erro de arquivo não encontrado
  if (err.code === 'ENOENT') {
    return res.status(404).json({
      success: false,
      error: 'Arquivo não encontrado'
    });
  }

  // Erro de limite de tamanho
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(413).json({
      success: false,
      error: 'Arquivo muito grande'
    });
  }

  // Erro padrão
  res.status(err.status || 500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' 
      ? 'Erro interno do servidor' 
      : err.message
  });
};

// Middleware para rotas não encontradas
const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    error: `Rota ${req.method} ${req.originalUrl} não encontrada`
  });
};

module.exports = {
  errorHandler,
  notFound
};