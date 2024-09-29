vlog -f files.txt +cover -covercells

vsim -voptargs=+acc work.top -debugDB -cover
coverage save  system.ucdb -onexit 

run 0
do wave.do

run -all