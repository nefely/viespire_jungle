$(document).ready(function() {

    /*pop up function*/
    $('.circle > button').click(function() {
        $('.contact_form').fadeIn(500);
    });
    $('.contact_form_close > button').click(function() {
        $('.contact_form').fadeOut(500);
    });

    /*input range*/
    const ipt = document.querySelector('input[type=range]')
    ipt.onchange = function() {
        var price = event.target.value;
        const val = event.target.value,
            progress = val / 5000 * 100 + '%'
        $('.cost_of_project_value').attr('value', price + "$");
        document.documentElement.style.setProperty('--progress', progress)
    }

    $('.contact_btn_send').click(function(event){
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "/php/gmail.php",
            data: [{
                'email': $('#email').val(),
            }]
        });
    });
    

});