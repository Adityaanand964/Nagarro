$(document).ready(function(){
    var toggle=1;
    $('.clicks').on('click',function(){
        if(toggle){
            $('#box').addClass('show');
            toggle=0;
        }
        else{
            $('#box').removeClass('show');
            toggle=1;
        }
    });
    $('#clo').on('click',function(){
            $('#box').removeClass('show');
            toggle=1;
    });
    $('#sub').on('click',function(){
        let uvalid = 0;
        let evalid = 0;
        let uname = $('#username').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let email = $('#email').val();
        if (uname.length<2){
            uvalid = 0;
            $('#uwar').text("Invalid uname");
        }
        else{
            uvalid=1;
            $('#uwar').text("");
        }
        if( !regex.test(email)){
            evalid = 0;
            $('#ewar').text("Invalid email");
        }
        else{
            evalid = 1;
            $('#ewar').text("");
        }
        if (uvalid && evalid){
            $('#box').removeClass('show');
            toggle=1;
            alert("Submitted");
        }
    });
    
});