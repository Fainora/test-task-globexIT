document.querySelector('#search').oninput = function() {
    let value = this.value.trim().toLowerCase();
    let card = document.querySelectorAll('#card');
    let name = document.querySelectorAll('.name');

    for (let i = 0; i < name.length; i++) {
        let match = card[i].getElementsByClassName('name')[0];
        
        if (match) {
            let textValue = match.textContent || match.innerHTML;

            if (textValue.toLowerCase().indexOf(value) > -1) {
                card[i].style.display = '';
            } else {
                card[i].style.display = 'none';
            }
        }
    }
}

function search(data)
{
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('term');

    if (myParam !== null) {
        result = data.filter(item => item.name.toLowerCase().includes(myParam.toLowerCase()));
        document.getElementById('search').value = myParam;
    } else {
        result = data;
    }

    getUsers(result);
}