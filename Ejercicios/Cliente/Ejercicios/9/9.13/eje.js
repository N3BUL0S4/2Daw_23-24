$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "https://www.scorebat.com/video-api/v3/feed/",
        data: {
            token: 'NTczNjRfMTY3NTk2NTE1NV9kMGY3MjUwOTY5ZTQ2NWQxMmFmZjdlOGEwMGY1YjI1MmZmNWNlNzJh'
        },
        dataType: "JSON",
        success: function (response) {
            console.log(response.response)
                     
        }
    });
});