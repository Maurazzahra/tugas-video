// A $( document ).ready() block.
// $( document ).ready(function() {
//     console.log( "ready!" );
// });

// Shorthand for $( document ).ready()     ~ penulisan pendek/singkat // penulisan jquery diawali dgn $ ~
$(function() {
    // console.log( "ready!" );
    
    $("#isi").html("<h2> Belajar Jquery</h2>");

    // $( "#myId" ); // Note IDs must be unique per page. ~ selecting elements by ID / memanggil ID

    $("button").click(function (e) { 
        e.preventDefault();
        alert("Belajar Javascript");
    });

    $("#isi").mouseleave(function () { 
        alert("mouse leave");
    });

});