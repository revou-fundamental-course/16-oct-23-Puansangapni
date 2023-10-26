// ----------------------------script untuk nama---------------------------------------------------

function replaceName () {
    let nama = prompt("Halo, siapakah nama anda?", "");
    document.getElementById("nama").innerHTML = nama;
}

replaceName();

// -------------------------------script untuk message us----------------------------------------- 

const messageForm = document.getElementById('messageForm');

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('input-nama').value;
    const tanggalLahir = document.getElementById('tanggal').value;
    const jenisKelamin = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById('pesan').value;
    
    const feedback = document.getElementById('feedback');
    const waktuSekarang = new Date();
    const timestamp = waktuSekarang.toLocaleString();

    const teksHasil = `<p><strong>Submitted at:</strong> ${timestamp}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Date of Birth:</strong> ${tanggalLahir}</p>
    <p><strong>Gender:</strong> ${jenisKelamin}</p>
    <p><strong>Message:</strong> ${pesan}</p>`;

    feedback.innerHTML = teksHasil;
    document.getElementById('messageForm').reset();
});
