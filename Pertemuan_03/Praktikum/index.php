<?php
// menciptakan object
require 'construct.php';
$edo = new person('Edo', 'Depok', 'TI');
$arip = new person('Arip', 'Depok', 'TI');

$edo->cetak();
$arip->cetak();
?>