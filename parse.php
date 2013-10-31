<?php

$id = 'CMWD_2011_EW_BGC';

$csv = fopen('wards.csv', 'r');
$fields = fgetcsv($csv);
$start = array_search('All ages', $fields);

$counts = array();
while (($line = fgetcsv($csv)) !== false) {
	$data = array_combine($fields, $line);
	$name = $data['Ward name'];
	$counts[$name] = array_slice($data, $start);
}

printf("%d wards\n", count($counts));

$max = array_fill_keys(array_slice($fields, $start), 0);

foreach ($counts as $ages) {
	foreach ($ages as $range => $count) {
		$count = (int) preg_replace('/\D/', '', $count);
		$max[$range] = max($max[$range], $count);
	}
}

print_r($max);

$data = json_decode(file_get_contents('data/' . $id . '.geojson'), true);
printf("Decoded the GeoJSON\n");

foreach ($data['features'] as $index => $feature) {
	$name = $feature['properties']['CMWD11NM'];

	if (!isset($counts[$name])) {
		printf("No counts for %s\n", $name);
		continue;
	}

	$data['features'][$index]['properties']['population'] = normalise_counts($counts[$name], $max);
}

file_put_contents($id . '-properties.geojson', json_encode($data));
printf("Encoded the GeoJSON\n");

function normalise_counts($input, $max) {
	$output = array();

	foreach ($input as $range => $count) {
		$count = (int) preg_replace('/\D/', '', $count);
		$ratio = $count / $max[$range];
		$output[$range] = round($ratio, 3);
	}

	return $output;
}

