        //Notes

          //HAP
function downloadPDF1(filename){
    // Replace the URL with the actual location of your PDF files
    const pdfURL='https://drive.google.com/file/d/1I_YV6OB3ejnQak9MIIhCPtOv1lOiEiu_/view?usp=drivesdk'+filename;
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


          //Pharmaceutical Chemistry
function downloadPDF2(filename){
const pdfURL='https://drive.google.com/file/d/1GBKgInguF9QD5tO1hgtptvAcXNyI95MD/view?usp=drivesdk'+filename;
const link=document.createElement('a');
link.href=pdfURL;
link.target='_blank';
link.download=filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}


        //Pharmacognosy
function downloadPDF3(filename){
const pdfURL='https://drive.google.com/file/d/1ISxs27H3McYyAwM1RsCwbcbbLACmM0q1/view?usp=drivesdk'+filename;
const link=document.createElement('a');
  link.href=pdfURL;
  link.target='_blank';
  link.download=filename;
  document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }


        //Pharmaceutics
function downloadPDF4(filename){
const pdfURL='https://drive.google.com/file/d/1LeiOPRak6NTOh6OLl9m92lfFiADcMTLC/view?usp=drivesdk'+filename;
const link=document.createElement('a');
  link.href=pdfURL;
  link.target='_blank';
  link.download=filename;
  document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }
    