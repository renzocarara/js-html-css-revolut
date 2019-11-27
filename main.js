$(document).ready(function() {

    // GRAZIE A LUCA!  PER LE MEGA-DRITTE...
    // intercetto il click sulla voce menu attraveso la sua classe
    $(".menu-item").mouseenter(function() {

        // verifico che il menu selezionato non sia già visualizzato ma sia
        // nascosto (hidden) quindi da visualizzare
        // se non fosse così non faccio nulla, lo lascio visualizzato
        // alrimenti entro nell'if, chiudo eventuali altri menu aperti
        // e poi visualizzo quello che è stato selzionato
        if ($(this).children(".dd-menu").is(":hidden")) {

            // chiudo tutti i dropdown menu eventualmente aperti
            $(".menu-item").children(".dd-menu").hide();
            // rimuovo l'evidenziazione "attiva" dalla voce del menu
            $(".menu-item").removeClass("active-menu");
            // apro il dropdown menu della voce menu cliccata
            $(this).children(".dd-menu").toggle();
            // evidenzio la voce del menu come "attiva"
            $(this).addClass("active-menu");
        }
    });

    // se c'è un dropdown menu aperto, e l'utente clicca in qualunque
    // punto sul documento  nascondo il dropdown menu
    $(document).click(function() {
        // chiudo tutti i dropdown menu eventualmente aperti
        $(".menu-item").children(".dd-menu").hide();
        // rimuovo l'evidenziazione "attiva" dalla voce del menu
        $(".menu-item").removeClass("active-menu");
        // }
    });

    // #language-menu+.dd-menu span
    // intercetto click sulla dropdown menu per il cambio lingua
    $('#language-menu-dd span').click(function() {

        // console.log("$(this).text", $(this).text());

        switch ($(this).text()) {
            case 'Italiano':
                // console.log("it");
                $('#language-menu').text("IT");
                break;
            case 'English':
                // console.log("eng");
                $('#language-menu').text("EN");
                break;
            default:
        }

    });

}); // document ready