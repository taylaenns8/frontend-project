const container = document.querySelector('.container');

$.get('https://api.nasa.gov/planetary/apod?api_key=945yhDAPJKVnhVitSD142boIDlylVugC98z5iXPf&date=2023-04-19', (data) => {
    const title = data.title;    
    const explanation = data.explanation;
    const hdurl = data.hdurl;
    const titleElem = document.createElement('h1');
    const hdurlElem = document.createElement('img');
    const explanationElem = document.createElement('p');
    explanationElem.innerHTML = explanation;
    hdurlElem.setAttribute('src', hdurl);
    titleElem.innerHTML = title;
    container.append(titleElem);
    container.appendChild(hdurlElem);
    container.appendChild(explanationElem);
});

$(function() {
    $("#datepicker").datepicker({
        dateFormat: "yy-mm-dd"
    });
});

$('.d-flex').submit(function(event) {
    event.preventDefault(); 
    const inputDate = $('.form-control').val();
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(inputDate)) {
        alert('Invalid date format. Please enter a date in the format of YYYY-MM-DD');
        return;
    }
    const apiKey = '945yhDAPJKVnhVitSD142boIDlylVugC98z5iXPf';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${inputDate}`;
    $(container).empty();
    $.get(apiUrl)
        .done((data) => {
            const title = data.title;    
            const explanation = data.explanation;
            const hdurl = data.hdurl;
            const titleElem = document.createElement('h1');
            const hdurlElem = document.createElement('img');
            const explanationElem = document.createElement('p');
            explanationElem.innerHTML = explanation;
            hdurlElem.setAttribute('src', hdurl);
            titleElem.innerHTML = title;
            container.append(titleElem);
            container.appendChild(hdurlElem);
            container.appendChild(explanationElem);
        })
        .fail((xhr, textStatus, errorThrown) => {
            alert('Info does not exist');
        });
});






