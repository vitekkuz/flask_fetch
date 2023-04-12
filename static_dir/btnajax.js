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
                console.log(response.title);
//                alert(response.title)
                $('.div-header').children().html(`${response.title}`);

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

function requestSMTH() {

    fetch('/toReadyDocument', {
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
                console.log(response.phone_data);
//                alert(response.title)
                $('.div-header').children().html(`${response.title}`);

                $(response.phone_data).each((j, i) => {
                    let row = $('.my_table').append(`<tr> </tr>`);
                    row.append(`<td> ${i[0]} </td>`)
                    row.append(`<td> ${i[1]} </td>`)
                    row.append(`<td> ${i[2]} </td>`)
                });

            });
        }
        else {
            throw Error('Something went wrong');
        }
    })
    .catch(function(error) {
        console.log(error);
    });
};


$(document).ready(function() {
    $('.div-header').children().html('Downloading....');
    requestSMTH();

});
