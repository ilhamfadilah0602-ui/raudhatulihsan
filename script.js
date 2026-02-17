// ==========================
// Form Kontak WA / Email
// ==========================
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const pesan = document.getElementById("pesan").value;
            const metode = document.getElementById("metode").value;

            const nomorWA = "62881024808208"; 
            const emailTujuan = "ilhamsurya0602@gmail.com";

           if (metode === "wa") {

    const text = `Halo, saya ${nama}
Email: ${email}
Pesan: ${pesan}`;

    const encodedText = encodeURIComponent(text);

    const url = `https://wa.me/62881024808208?text=${encodedText}`;

    window.open(url, "_blank");
}
 else if (metode === "email") {

                const subject = encodeURIComponent("Pesan dari Website Hadroh");
                const body = encodeURIComponent(
                    `Nama: ${nama}\nEmail: ${email}\nPesan: ${pesan}`
                );

                const mailto = `mailto:${emailTujuan}?subject=${subject}&body=${body}`;
                window.location.href = mailto;
            }
        });
    }
});
