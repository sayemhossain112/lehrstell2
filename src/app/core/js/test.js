function myfunction(params1, params2) {
    console.log('param1', params1);
    console.log('param2', params2);
}

function getPDF() {
    var doc = new jsPDF();

    // We'll make our own renderer to skip this editor
    var specialElementHandlers = {
        '#getPDF': function (element, renderer) {
            return true;
        },
        '.controls': function (element, renderer) {
            return true;
        }
    };

    // All units are in the set measurement for the document
    // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
    doc.fromHTML($('.page').get(0), 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });

    doc.save('Generated.pdf');
}

function CreatePDFfromHTML() {
    var HTML_Width = $(".page").width() * 3;
    var HTML_Height = $(".page").height() * 3;
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($(".page")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) {
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
        }
        pdf.save("invoice_<?php echo $trackingNumber ;?>.pdf");
        $(".page").hide();
    });
}

function myfunction2() { 
    document.getElementById("navbarSupportedContent").classList.toggle("show");
} 


function myfunction3() { 
    document.getElementById("navbarSupportedContent").classList.remove("show");
} 
 






