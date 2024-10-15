const rootDiv = document.querySelector('.root');

window.onload = function() {
    alert('Selamat datang! Silakan isi form di bawah.');
};

const header = document.createElement('h1');
header.textContent = 'Tugas-2 Praktikum Pemrograman Web';
header.classList.add('header');
rootDiv.before(header);
const horizontalLine = document.createElement('div');
horizontalLine.classList.add('divider');
header.after(horizontalLine);

const form = document.createElement('form');
// Input username
const usernameLabel = document.createElement('label');
usernameLabel.textContent = 'Username';
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.id = 'username';
usernameInput.name = 'username';
usernameInput.placeholder = 'Natasya Ginting'; // Contoh inputan username
usernameInput.required = true;
form.appendChild(usernameLabel);
form.appendChild(document.createElement('br'));
form.appendChild(usernameInput);
form.appendChild(document.createElement('br'));

// Input NIM
const nimLabel = document.createElement('label');
nimLabel.textContent = 'NIM';
const nimInput = document.createElement('input');
nimInput.type = 'text';
nimInput.id = 'nim';
nimInput.name = 'nim';
nimInput.placeholder = '231401108'; // Contoh inputan NIM
nimInput.required = true;
form.appendChild(nimLabel);
form.appendChild(document.createElement('br'));
form.appendChild(nimInput);
form.appendChild(document.createElement('br'));

// Input KOM
const komLabel = document.createElement('label');
komLabel.textContent = 'KOM';
const komInput = document.createElement('input');
komInput.type = 'text';
komInput.id = 'kom';
komInput.name = 'kom';
komInput.placeholder = 'C'; // Contoh inputan KOM
komInput.required = true;
form.appendChild(komLabel);
form.appendChild(document.createElement('br'));
form.appendChild(komInput);
form.appendChild(document.createElement('br'));

// Input upload foto
const photoLabel = document.createElement('label');
photoLabel.textContent = 'Upload Photo';
const photoInput = document.createElement('input');
photoInput.type = 'file';
photoInput.id = 'photo';
photoInput.name = 'photo';
photoInput.accept = 'image/*';
photoInput.required = true;
form.appendChild(photoLabel);
form.appendChild(document.createElement('br'));
form.appendChild(photoInput);
form.appendChild(document.createElement('br'));

// Tombol submit
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
form.appendChild(submitButton);

rootDiv.appendChild(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Mengambil nilai dari inputan
    const username = usernameInput.value;
    const nim = nimInput.value;
    const kom = komInput.value;
    const photoFile = photoInput.files[0];

    if (confirm('Form berhasil disubmit!')) {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        // Elemen gambar
        const img = document.createElement('img');
        img.src = URL.createObjectURL(photoFile);
        img.alt = 'Uploaded Photo';
        img.style.maxWidth = '250px';

        // Elemen teks (username, NIM, dan KOM)
        const userInfo = document.createElement('p');
        userInfo.innerHTML = `
            <strong>Username:</strong> ${username}<br>
            <strong>NIM:</strong> ${nim}<br>
            <strong>KOM:</strong> ${kom}
        `;

        rootDiv.innerHTML = '';
        rootDiv.appendChild(form);

        resultDiv.appendChild(img);
        resultDiv.appendChild(userInfo);
        rootDiv.appendChild(resultDiv);
    }
});