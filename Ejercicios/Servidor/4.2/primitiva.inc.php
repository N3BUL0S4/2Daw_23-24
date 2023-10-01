<?php


function rellenadorPrimitiva(){
    for ($i = 0; $i < 8; $i++) {
        for ($j = 0; $j < 6; $j++) {
            echo random_int(1, 49)+"|";
        }
        echo "<hr>";
    }
}

?>