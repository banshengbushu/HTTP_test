const onSend = () => {
    const xhr = new XMLHttpRequest();
    const url_github = 'https://api.github.com/users/banshengbushu';

    xhr.open('GET', url_github);
    xhr.setRequestHeader('X-Custom-Header', 'value');
    xhr.send();

    var url_alice = 'http://api.alice.com/cors';
    xhr.open('PUT', url_alice, true);
    xhr.setRequestHeader('X-Custom-Header', 'value');
    xhr.send();
};

