$(document).ready(function(){
    $('.get-contract, #black-panel').click(function(){
        $('#black-panel, .form-get-contract').toggleClass('hide');
        $("body").toggleClass("fixed")
    })
})