$(document).ready(function () {
    $('select').formSelect();
    
});

$("#button2").on("click", function (event) {

    event.preventDefault();

    var average = Math.abs(parseInt($("#Q1").val()) + parseInt($("#Q2").val()) + parseInt($("#Q3").val()) + parseInt($("#Q4").val())
        + parseInt($("#Q5").val()) + parseInt($("#Q6").val()) + parseInt($("#Q7").val()) + parseInt($("#Q8").val()) + parseInt($("#Q9").val())
        + parseInt($("#Q10").val()));

    console.log(average);

    var newFriend = {
        Name: $("#Name").val().trim(),
        Score: average,
        Image: $("#link").val().trim(),
    };

    $.post("/api/friends", newFriend,
        function (data) {

            if (data) {
                console.log(data)
                console.log("Submitted");

                $('.modal-title').text(data[0].Name);
                $('#modal-body').attr("src", data[0].Image);

                $('#myModal').modal('show')
            }
            else {
                console.log("not!!!!!")
            }

        });
});