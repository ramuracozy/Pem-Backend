const {Persiapan, rebusair, masak} = require("./Persiapan");
const main = () => {
    setTimeout(()=>{
    Persiapan();
    setTimeout(()=>{
    rebusair(); 
    setTimeout(()=>{
    masak(); 
}, 5000);
}, 7000);
}, 3000);
};

main();