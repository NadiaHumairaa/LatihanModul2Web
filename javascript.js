function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (nama === "" || email === "" || alamat === "") {
        alert("Silakan lengkapi semua kolom!");
        return false;
    }

    return true;
}