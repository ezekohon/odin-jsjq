$(document).ready(function() {


    $('#inButton').click(function() {
        let num = $('#num').val();
        clearGrid();
        createGrid(num);
        hover();
    });

function hover(){
    $(".flex-item").hover(function() {
        $(this).addClass('changeColor');
        console.log('hover');
    });
}


    function createGrid(num) {

        var $grid = $('.container');

        for (i = 0; i < num; i++) {
            var row = '<div class="flex-container">';

            for (j = 0; j < num; j++) {
                row += '<div class="flex-item"></div>';
            }

            row += '</div>';


            $grid.append(row);
            // $(".square").css('width', 640/16);
            // $(".square").css('height', 640/16);
        }
    }

    function clearGrid() {
        $('.container').empty();
    }







});
