const ExtractController = {

    Extract: async() => {
        const initialDate = document.getElementById("initialDate").value;
        const finalDate = document.getElementById("finalDate").value;
        const extract = {
            initialDate: initialDate,
            finalDate: finalDate
        }
        validateExtract(extract)
        generateExtract();
        //const response = await ExtractModel.Extract(extract)

        console.log(response)
    },

    update: async() => {}
}