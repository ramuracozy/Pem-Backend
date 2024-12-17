const download = () => {
    return new Promise((resolve,reject)=>{
        const status = true;
        setTimeout(()=>{
            if(status){
                resolve("Download Selesai");
            } else {
                reject("Download Gagal");
            }
        },500);
    });
};
// console.log(download())
download()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});