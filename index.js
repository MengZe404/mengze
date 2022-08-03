localStorage.setItem("previous-page", "Home")
localStorage.setItem("page", "")


$(document).ready(function() {
    $(".info-container").attr("src", "pages\\home.html");
})


$("ul").click(function() {
    var page = $(this).text();

    if(localStorage.getItem("page") == page) {
        return 0;
    }

    if (localStorage.getItem("page") != "") {
        localStorage.setItem("previous-page", localStorage.getItem("page"))
    }

    localStorage.setItem("page", page)
    console.log(localStorage)

    $(".info-container").attr("src", `pages\\${page.toLowerCase()}.html`);
    $("#page-indicator").text(page);
})

$("#back-button, #forward-button").click(function() {
    var page = localStorage.getItem("previous-page");

    if (page != "") {
        $(".info-container").attr("src", `pages\\${page.toLowerCase()}.html`);
        $("#page-indicator").text(page);

        localStorage.setItem("previous-page", localStorage.getItem("page"))
        localStorage.setItem("page", page)
    }
})
