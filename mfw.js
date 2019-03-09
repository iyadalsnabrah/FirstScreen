/* add the selected class for the clicked option start*/

/* for the left nav */
$(".left-nav ul").on('click', 'li', function () {
    $(".left-nav ul li").each(function () {
        $(this).removeClass("selected")
    })
    $(this).addClass("selected")
})

/* for the middle nav */
$(".middle-nav ul").on('click', 'li', function () {
    $(".middle-nav ul li").each(function () {
        $(this).removeClass("selected")
    })
    $(this).addClass("selected")
})
/* add the selected class for the clicked option end*/

/* show the results of the selected option and hide the others options */

/* for the left nav */
$('.left-nav ul').on('click', 'li', function () {
    var id = $(this).attr('id');

    $(".middle-nav > ul").each(function () {
        if ($(this).attr('class').includes('show')) {
            $(this).removeClass('show');
            $(this).addClass('hide');
        }
    })

    $(".middle-nav > ul").each(function () {
        if ($(this).attr('id') == id) {
            $(this).removeClass('hide');
            $(this).addClass('show');
        }
    })
})

/* for the middle nav */
$('.middle-nav ul').on('click', 'li', function () {

    /* keep changing the right nav header */
    $(".right-nav-header").text($(this).text().replace(/\d+$/, ""))

    var id = $(this).attr('id');
    
    $(".right-nav > ul").each(function () {
        if ($(this).attr('class').includes('show')) {
            $(this).removeClass('show');
            $(this).addClass('hide');
        }
    })

    $(".right-nav > ul").each(function () {
        if ($(this).attr('id') == id) {
            $(this).removeClass('hide');
            $(this).addClass('show');
            
        }

    })
})