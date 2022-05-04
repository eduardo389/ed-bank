function generateExtract(){
    var doc = new jsPDF()
    doc.setProperties({
        title: "Extrato"
    });
    doc.text('Hello world!', 10, 10)
    window.open(URL.createObjectURL(doc.output("blob")))
}