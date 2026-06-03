const mammoth = require("mammoth");
const fs = require("fs");

mammoth.extractRawText({
    path: "C:\\Users\\acer\\Desktop\\HW PRO\\DSC\\Shoes\\Drifter\\Trial\\public\\EF_and_Questions_updated.docx"
})
.then(function(result) {
    fs.writeFileSync("EF_raw.txt", result.value, "utf8");
    console.log("Extracted " + result.value.length + " chars.");
})
.catch(function(err) {
    console.error(err);
});