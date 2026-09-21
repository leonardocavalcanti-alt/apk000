if (dexEncontrado) {
    log('[OK] Pacote APK válido detectado.');
    
    // LINHA ONDE ENTRA A EXECUÇÃO:
    const apkUrl = URL.createObjectURL(file);
    iniciarExecucaoDoAPK(apkUrl, canvas);
}