const fs = require('fs');
const path = require('path');

const directoryPath = './'; // diretório atual
let count = 1; // contador para o novo nome

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log(`Erro ao ler o diretório: ${err}`);
    return;
  }

  // percorrer cada arquivo no diretório
  files.forEach((file) => {
    const oldPath = path.join(directoryPath, file);

    // verificar se é um arquivo
    if (fs.statSync(oldPath).isFile()) {
      const extension = path.extname(file); // obter extensão do arquivo
      const newName = `${count}${extension}`;
      const newPath = path.join(directoryPath, newName);

      // renomear o arquivo
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.log(`Erro ao renomear ${file}: ${err}`);
        } else {
          console.log(`${file} renomeado para ${newName}`);
        }
      });

      count++; // incrementar contador
    }
  });
});
