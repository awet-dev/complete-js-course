<?php
$buttons = [
    'easy' => [
        2 => [3, 6],
        3 => [2, 3],
        4 => [2, 5]
    ],
    'medium' => [
        5 => [2, 11],
        6 => [4, 12]
    ],
    'chapter 7' => [7 => [1, 7]],
    'hard' => [
        8 => [2, 9],
        9 => [2, 5],
    ]
];
foreach ($buttons AS $label => $inner) {
    echo '<a href="?button='. $label .'">'. $label .'</a>';

    if($_GET['button'] === $label) {
        $randomItem = array_rand($inner);
        var_dump($randomItem);
    }
}


