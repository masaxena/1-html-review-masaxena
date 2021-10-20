<?php

// every variable starts with a $sign

$num = 2;
$foo = $num. " be";
$bar = "or not " . $num.  " be"; 


echo $foo . " " . $bar . "\n"; 

echo $num * $num * $num;
// . sign is used to concatenate 

echo "\n";

if(true) {
    echo "TRUE \n";
}

else 
    {
        echo "FALSE \n";
    }

while (true) {
    break;
}

$arr = [1,1,2,3,5,8];

$arr2 = [
    "first" => "Nikhil",
    "second" => "Manvi",
    "best" => "DS"
];


function printList ($someArr) {
    echo "<ul>";
    foreach($someArr as $key => $val) {
        echo "<li>".$key." is ".$val."</li>";
    }
    echo "</ul>";
}

printList($arr);
printList($arr2);

echo json_encode(
    $arr2,
    JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR
);
