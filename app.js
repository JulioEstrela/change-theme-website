const switcher = document.querySelector('.theme-button');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

});

// ----------- OUTRO METODO QUE PODE SER USADO -------------
// const switcher = document.querySelector('.btn');

// switcher.addEventListener('click', function() {
//     const body = document.body;
//     if(body.className == 'light-theme') {
//         body.classList.remove('light-theme')
//         body.classList.add('dark-theme')

//         this.textContent = 'Light';
//     }
//     else {
//         body.classList.remove('dark-theme')
//         body.classList.add('light-theme')

//         this.textContent = 'Dark';
//     }

// });