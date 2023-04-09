$(document).ready(function() {
    requestSMTH('1');

});

function requestSMTH(query) {
    let response = fetch('getData');

    if (response.ok) {
        $("<p> ok.... </p>").insertBefore(".header");
    } else {
        $(response.text()).insertBefore(".header");
    };

};