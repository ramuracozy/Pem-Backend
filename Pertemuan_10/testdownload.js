const downloadFile = (file) => {
    return new Promise((resolve, reject) => {
        console.log(`Starting download ${file}...`);
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve(`File downloaded successfully ${file}`);
            } else {
                reject(`Failed to download file ${file}`);
            }
        }, 5000); // Waktu download 5 detik
    });
};

// Usage
downloadFile("postman.exe")
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });

  