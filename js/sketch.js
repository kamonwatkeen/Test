document.getElementById("saveImageBtn").addEventListener("click", function() {
    const { jsPDF } = window.jspdf;
    const quotationElement = document.getElementById("quotation");

    html2canvas(quotationElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('portrait', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = pdfWidth;
        const imgHeight = canvas.height * imgWidth / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save("quotation.pdf");
    }).catch(error => {
        console.error('Error generating PDF:', error);
    });
});