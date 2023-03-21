$(document).ready(function() {
    $('button').click(function() {
        let lis = $("#inputbox").val();
        $("#inputbox").val("");
        var error = "";
        if (lis.trim() == "") {
            error = "Box is empty";
            document.getElementById('err_name').innerHTML = error;
            $("#err_name").show();
            // alert("fill the box");
        } else {
            let list = document.createElement("li")
            list.textContent = lis;

            $('#list').append(list);
            $("#err_name").hide();

        }
        $("li").click(function() {

            $(this).hide();
        });



    });
});