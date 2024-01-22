const scriptURL = 'https://script.google.com/macros/s/AKfycbzQq85RX3lclEY4KY5TT2KD1MfoOU9PfKhv7X7N-V1_pm_1gIy2TwbafsHMvxNJBIFH/exec'
const form = document.forms['wildan-contact-form']
const btnKirim = document.querySelector('.btn-kirim'); 
const btnLoading = document.querySelector('.btn-loading'); 
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Tombol submit di klik
    // menampilkan tombol loading, dan hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // menampilkan tombol kirim, dan hilangkan tombol loading
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        // menampilkan alert
        myAlert.classList.toggle('d-none');
        // reset form
        form.reset();
        console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})

