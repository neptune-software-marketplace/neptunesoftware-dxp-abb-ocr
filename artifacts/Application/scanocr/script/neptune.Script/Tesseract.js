async function beginOCR() {
    const worker = window.Tesseract;

    const innerWorker = await worker.createWorker("eng");

    (async () => {
        const {
            data: { text },
        } = await innerWorker.recognize(smallImage.getSrc());
        oTextArea.setValue(text);
        await innerWorker.terminate();
        oApp.setBusy(false);
        oBtnOCR.setEnabled(true);
        oTextArea.setVisible(true);
        smallImage.setHeight("300px");
        smallImage.setWidth("200px");
    })();
}