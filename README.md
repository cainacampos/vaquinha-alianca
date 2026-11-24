# 💍 Vaquinha da Aliança (Estilo Catarse)

Site estático ultra-simples pronto para ser hospedado gratuitamente no **GitHub Pages**.

## 📁 Arquivos do Projeto

- `index.html`: A página completa com layout estilo Catarse (meta, barra de progresso visual, nível desbloqueado da aliança e botão de copiar Pix).
- `config.js`: **O único arquivo que você precisa mexer!** É nele que você atualiza o valor arrecadado, sua chave Pix e a lista de apoiadores.

---

## 🚀 Como colocar no GitHub Pages (Passo a Passo)

1. Crie um novo repositório no seu GitHub (exemplo: `vaquinha-alianca`), público.
2. Suba estes 2 arquivos (`index.html` e `config.js`) no repositório.
3. No GitHub, acesse a aba **Settings** (Configurações) do repositório.
4. No menu lateral esquerdo, clique em **Pages**.
5. Em **Branch**, selecione `main` (ou `master`) e a pasta `/ (root)`. Clique em **Save**.
6. Em cerca de 1 a 2 minutos, o GitHub vai gerar o link do seu site (algo como `https://seuusuario.github.io/vaquinha-alianca/`).

---

## ✏️ Como atualizar o valor arrecadado

Sempre que alguém fizer um Pix:

1. Abra o arquivo `config.js` diretamente no GitHub (clique no ícone de lápis para editar).
2. Modifique o campo `valorArrecadado`:
   ```javascript
   valorArrecadado: 1250,
   ```
3. (Opcional) Adicione o nome da pessoa na lista `apoiadores`.
4. Salve/Faça o commit das alterações. Pronto! O site atualizará automaticamente a barra de progresso e o nível da aliança.
