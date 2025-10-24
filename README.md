# Video Server TV

Um servidor de vídeo simples e responsivo para reprodução de conteúdo corporativo em TVs e displays.

## 📋 Descrição

Este projeto é um servidor de vídeo web desenvolvido para exibir conteúdo audiovisual corporativo em TVs e monitores. O sistema permite a reprodução de vídeos locais através de uma interface web otimizada para telas grandes.

## 🎯 Características

- **Interface responsiva**: Otimizada para TVs e displays de grande formato
- **Reprodução em loop**: Vídeos reproduzem continuamente
- **Controles de vídeo**: Interface de controle nativa do navegador
- **Qualidade HD**: Suporte para vídeos em alta definição (1280x720)
- **Design minimalista**: Interface limpa focada no conteúdo

## 📁 Estrutura do Projeto

```
video-server-tv/
├── index.html                    # Interface principal do player
├── ajinomoto_tv3_recepcao.mp4   # Vídeo corporativo Ajinomoto (66.82 MB)
├── bracell_tv1_showroom.mp4     # Vídeo corporativo Bracell (35.94 MB)
└── README.md                    # Documentação do projeto
```

## 🎥 Conteúdo de Vídeo

O projeto inclui dois vídeos corporativos:

1. **Ajinomoto TV3 Recepção** (66.82 MB)
   - Vídeo para exibição em área de recepção
   - Formato: MP4
   
2. **Bracell TV1 Showroom** (35.94 MB)
   - Vídeo para exibição em showroom
   - Formato: MP4

## 🚀 Como Usar

### Opção 1: Servidor Local
1. Clone o repositório:
   ```bash
   git clone https://github.com/mxdrives/video-server-tv.git
   cd video-server-tv
   ```

2. Inicie um servidor HTTP local:
   ```bash   
   # Node.js (se tiver npx instalado)
   npx serve

   ```

3. Acesse no navegador: `http://localhost:8080`

### Opção 2: GitHub Pages
O projeto pode ser hospedado diretamente no GitHub Pages para acesso remoto.

### Opção 3: Servidor Web
Faça upload dos arquivos para qualquer servidor web (Apache, Nginx, IIS).

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da aplicação
- **CSS3**: Estilização responsiva
- **HTML5 Video API**: Reprodução nativa de vídeo
- **Responsive Design**: Adaptação para diferentes tamanhos de tela

## 📱 Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Smart TVs com navegador web
- ✅ Dispositivos móveis

## ⚙️ Configuração

### Alterando o Vídeo Padrão
Para alterar qual vídeo é reproduzido por padrão, edite o arquivo `index.html`:

```html
<source src="seu-video.mp4" type="video/mp4" />
```

### Personalizando a Interface
As configurações de estilo podem ser modificadas na seção `<style>` do `index.html`:

```css
video {
  width: 1280px;  /* Largura do vídeo */
  height: 720px;  /* Altura do vídeo */
}
```

## 📊 Especificações Técnicas

- **Resolução suportada**: 1280x720 (HD)
- **Formato de vídeo**: MP4
- **Codec recomendado**: H.264
- **Controles**: Nativos do navegador
- **Loop**: Automático
- **Responsividade**: Fullscreen adaptativo

## 🔧 Desenvolvimento

### Adicionando Novos Vídeos
1. Adicione o arquivo de vídeo (.mp4) na pasta raiz
2. Atualize a referência no `index.html`
3. Teste a reprodução

### Melhorias Futuras
- [ ] Playlist com múltiplos vídeos
- [ ] Interface de seleção de vídeo
- [ ] Controle remoto via API
- [ ] Agendamento de reprodução
- [ ] Analytics de visualização

## 📝 Notas Importantes

- **Tamanho dos arquivos**: Os vídeos são relativamente grandes (66MB e 35MB). Para projetos com muitos vídeos, considere usar Git LFS.
- **Performance**: Para melhor performance em TVs, use vídeos otimizados para web.
- **Rede**: Considere a largura de banda disponível ao hospedar remotamente.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👥 Autores

- **Fernando Zenon Flores Terceros** - *Desenvolvimento inicial* - [mxdrives](https://github.com/mxdrives)

## 📞 Suporte

Para suporte e dúvidas, entre em contato através:
- Email: fernando.terceros@mxdrive.com.br
- GitHub Issues: [Issues do projeto](https://github.com/mxdrives/video-server-tv/issues)

---

⭐ **Gostou do projeto? Deixe uma estrela!** ⭐