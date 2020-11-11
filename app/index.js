function getServer () {
    $.ajax({
        type: "post",
        url: "http://127.0.0.1:3000/member/getid?id=234",
        data: "",
        dataType: "json",
        success: function (res) {
            $('body').html(res.id)
        }
    });
}

getServer()