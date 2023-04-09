const btn_send = document.querySelector('.send__data__btn');

btn_send.addEventListener('click', function () {

    fetch('/sendbtn', {
        headers : {
            'Content-Type' : 'application/json'
        },
        method : 'POST',
        body : JSON.stringify( {
            'name' : 'Rahul Kumar',
            'country' : 'India'
        })
    })
    .then(function (response){

        if(response.ok) {
            response.json()
            .then(function(response) {
                console.log(response);

            });
        }
        else {
            throw Error('Something went wrong');
        }
    })
    .catch(function(error) {
        console.log(error);
    });
});
