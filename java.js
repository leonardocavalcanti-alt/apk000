const input = document.getElementById('apkInput');

input.addEventListener('change', (event) => {
  const arquivo = event.target.files[0];
  
  if (arquivo) {
    console.log("Arquivo selecionado:", arquivo.name);
    // Aqui entra a sua função para processar ou enviar o APK
  }
});