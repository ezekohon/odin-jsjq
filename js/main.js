$(document).ready(function() {

    var $grid = $('.container');

    for (i = 0; i < 16; i++) {
        var row = '<div class="flex-container">';

        for (j = 0; j < 16; j++) {
            row += '<div class="flex-item"></div>';
        }

        row += '</div>';


        $grid.append(row);
        // $(".square").css('width', 640/16);
        // $(".square").css('height', 640/16);
    }
    //try flexbox


});
