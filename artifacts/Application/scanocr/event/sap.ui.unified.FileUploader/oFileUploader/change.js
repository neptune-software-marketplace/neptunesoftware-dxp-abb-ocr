var file = oEvent.getParameter("files")[0];
try {
    if (file && window.FileReader) {
        var reader = new FileReader();
        reader.onload = function (e) {
            onPhotoDataSuccess(reader.result.split(",")[1]);
        };
        reader.onerror = function (e) {
            console.error(e);
        };
        reader.readAsDataURL(file);
    }
} catch (e) {
    console.error(e);
}
