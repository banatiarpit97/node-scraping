// const PDFMerge = require('pdf-merge');
var merge = require('easy-pdf-merge');

PDFMerge([`${__dirname}/aws/aws1.pdf`, `${__dirname}/aws/aws2.pdf`], { output: `${__dirname}/aws/aws12comb.pdf` })
    .then((buffer) => {
        console.log(buffer)
    });