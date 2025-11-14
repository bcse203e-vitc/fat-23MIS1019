<?
function insideOut($array) {
    if (count($array) % 2 !== 0) {
        return $array;
    }

    $result = [];
    foreach ($array as $key => $value) {
        if (is_numeric($value)) {
            // Swap numeric values while preserving order of other elements
            list($a, $b) = [$value, $value];
            $result[$key] = $a;
            $result[count($result) - 1] = $b;
        } elseif (is_string($value)) {
            // Preserve string values as is
            $result[$key] = $value;
        } else {
            // Handle other mixed data types as is
            $result[$key] = $value;
        }
    }

    return $result;
}
?>

// Example 1: Numeric data
$array = [1, 2, 2, 1];
echo "Original array: ";
print_r($array);
echo "\nInsideOut(array): ";
print_r(insideOut($array));

// Example 2: String data
$array = ["Everyone", "says", "Kelly", "is", "REALLY awesome"];
echo "\nOriginal array:\n";
print_r($array);
echo "\nInsideOut(array): ";
print_r(insideOut($array));
