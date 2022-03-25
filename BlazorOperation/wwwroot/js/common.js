window.ShowToastr = (type, message) => {
    if (type === "success") {
        toastr.success(message, "Operation Successfull", { timeout: 5000 });
    }
    if (type === "error") {
        toastr.error(message, "Operation Failed", { timeout: 5000 });
    }
}

window.ShowSwal = (type, message) => {
    if (type === "success") {
        swal({
            title: "Here's a title!",
        });
    }
    if (type === "error") {
        swal({
            title: "Here's a title!",
        });
    }
}