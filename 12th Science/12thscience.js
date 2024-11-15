//1JavaScript function to download PDF
function downloadPDF1(filename){
// Replace the URL with the actual location of your PDF files
const pdfURL='https://drive.google.com/file/d/1BVDwZE0cpcmV6sqJzcziWcNmjmb5PqIR/view?usp=drivesdk'+filename;
// Create a temporary anchor element to trigger the download
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank'; // Open in a new tab
link.download=filename;
// Append the anchor to the body and click it to initiate the download
document.body.appendChild(link);
link.click();
// Clean up by removing the anchor element
document.body.removeChild(link);
}

//2JavaScript function to download PDF
function downloadPDF2(filename){
const pdfURL='https://drive.google.com/file/d/1BZDdTYb91yG77SomZVh35U6r73MiF8KY/view?usp=drivesdk'+filename;
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank';
link.download=filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

//3JavaScript function to download PDF
function downloadPDF3(filename){
const pdfURL='https://drive.google.com/file/d/1BbE7m--oT1IwETiUinw0gm9Vu7gWy_lY/view?usp=drivesdk'+filename;
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank';
link.download=filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

//4JavaScript function to download PDF
function downloadPDF4(filename){
const pdfURL='https://drive.google.com/file/d/1BbIb96SwgjVfIa_Utq_cutHSxFIYSN9-/view?usp=drivesdk'+filename;
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank';
link.download=filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

//5JavaScript function to download PDF
function downloadPDF5(filename){
const pdfURL='https://drive.google.com/file/d/1BkLVfT2mdKOrsIgjm4KmJU-btqA2ake_/view?usp=drivesdk'+filename;
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank';
link.download=filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

//6JavaScript function to download PDF
function downloadPDF6(filename){
const pdfURL='https://drive.google.com/file/d/1C64b1fNUVFQwl8IrviZjBN1AkmP4mMAQ/view?usp=drivesdk'+filename;
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank';
link.download=filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

