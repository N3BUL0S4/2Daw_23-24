<?php


function ullman($num){
    do {
        if ($num % 2 == 0) {
            $num = $num / 2;
        } else {
            $num = 3 * $num + 1;
        }
        echo $num;
    } while ($num > 1);
}
