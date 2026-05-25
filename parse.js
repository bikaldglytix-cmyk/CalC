const mammoth = require('mammoth');
const fs = require('fs');

mammoth.extractRawText({path: "C:\\Users\\acer\\Desktop\\HW PRO\\DSC\\Shoes\\Drifter\\Trial\\public\\EF_and_Questions (1).docx"})
    .then(function(result){
        fs.writeFileSync("EF_raw.txt", result.value);
        console.log("Extracted " + result.value.length + " chars.");
    })
    .catch(function(err) {
        console.error(err);
    });
