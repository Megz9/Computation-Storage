# !/bin/bash

num_hex_values=$1
output_file="memory.dat"


> $output_file

for(( i=0; i<num_hex_values;i++)) do 
	hex_val=$(printf "%02X" $((RANDOM % 256 )))
	echo $hex_val >> $output_file
done

echo "Generated $num_hex_values random hex values in $output_file"
	
