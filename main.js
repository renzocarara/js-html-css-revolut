$(document).ready(function() {

    console.log("doc is ready");

    // NON FUNZIONA mouseenter, PERCHE'????
    //catturo il mouseenter su menu Accounts
    // $('#accounts').mouseover(function() {
    //     console.log("mouseenter catturato!");
    //     // apro o chiudo il dropdown menu
    //     $('#accountsDDmenu').slideToggle();
    // });

    // GRAZIE A LUCA!  PER LE MEGA-DRITTE...
    // intercetto il click sulla voce menu
    $(".menu-item").click(function() {
        // console.log("menu-item cliccato");

        // chiudo tutti i dropdown menu eventualmente aperti
        $(".menu-item").children(".DDmenu").slideUp();
        // apro il dropdown menu della voce menu cliccata
        $(this).children(".DDmenu").slideToggle();


    })

}) // document ready