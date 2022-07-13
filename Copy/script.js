function myfunction(){
    /*var text1 = document.getElementById("input");
    text1.select();
    text1.setSelectionRange(0,100);
    navigator.clipboard.writeText(text1.value)
    alert("Copying Successfull");*/
    $(document).ready(function(){
        $('#bttn').click(function(){
            $('#input').select()
            document.execCommand("copy");
        });
    });
    

}