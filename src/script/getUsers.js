$(document).ready(() => {
    $.ajax({
        url: 'http://127.0.0.1:3000',
        dataType: 'json',
    })
    .done((result) => {
        search(result);
        //getUsers(result);
    })
    .fail(() => {
        console.log('Произошла ошибка, при загрузке данных');
        return false;
    });
});

function getUsers(data) {
    let htmlCard = '';

    for (let i = 0; i < data.length; i++) {
        htmlCard += `
        <div id="card" onclick="openForm('${JSON.stringify(data[i]).replace(/"/g, '&quot;')}')">
            <div class="name">${data[i].name}</div>
            <div class="phone short-info">
                <?xml version="1.0" ?><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 41" id="Layer_41"><path class="cls-1" d="M23,31H9a3,3,0,0,1-3-3V4A3,3,0,0,1,9,1H23a3,3,0,0,1,3,3V28A3,3,0,0,1,23,31ZM9,3A1,1,0,0,0,8,4V28a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1Z"/><path class="cls-1" d="M25,7H7A1,1,0,0,1,7,5H25a1,1,0,0,1,0,2Z"/><path class="cls-1" d="M25,25H7a1,1,0,0,1,0-2H25a1,1,0,0,1,0,2Z"/><rect class="cls-1" height="2" width="2" x="15" y="26"/></g></svg>
                ${data[i].phone}
            </div>
            <div class="email short-info" id="email">
                <?xml version="1.0" ?><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="mail"><path d="M29,6H3L2.92,6a.78.78,0,0,0-.21,0l-.17.07a.65.65,0,0,0-.15.1.67.67,0,0,0-.15.14l-.06.06a.36.36,0,0,0,0,.09,1.08,1.08,0,0,0-.08.19A1.29,1.29,0,0,0,2,6.9S2,7,2,7V25a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V7A1,1,0,0,0,29,6ZM16,14.81,6.2,8H27.09ZM4,24V8.91l11.43,7.91,0,0a1.51,1.51,0,0,0,.18.09l.08,0A1.09,1.09,0,0,0,16,17h0a1,1,0,0,0,.41-.1l.07,0,0,0L28,9.79V24Z"/></g></svg>
                ${data[i].email}
            </div>
        </div>
        `;
    }

    document.getElementById('card-container').innerHTML = htmlCard;
}
