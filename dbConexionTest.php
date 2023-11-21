<?php
function sum($a, $b) {
    return $a + $b;
}

function testSum() {
    // TCaso 2
    $result = sum(2, 3);
    assert($result == 5, "Sum of 2 and 3 should be 5");

    
    // Caso 2: 
    $result = sum(-2, -3);
    assert($result == -5, "Sum of -2 and -3 should be -5");


    // Caso 3: Cero
    $result = sum(0, 0);
    assert($result == 0, "Sum of 0 and 0 should be 0");
}

testSum();
?>