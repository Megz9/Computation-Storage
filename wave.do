onerror {resume}
quietly WaveActivateNextPane {} 0
add wave -noupdate -radix unsigned /top/comp_if/CLK
add wave -noupdate -radix unsigned /top/comp_if/RESET
add wave -noupdate -color Magenta -radix unsigned /top/comp_if/addA
add wave -noupdate -color Magenta -radix unsigned /top/comp_if/addB
add wave -noupdate -color Magenta -radix unsigned /top/comp_if/addC
add wave -noupdate -radix unsigned -childformat {{{/top/comp_if/DQ[7]} -radix unsigned} {{/top/comp_if/DQ[6]} -radix unsigned} {{/top/comp_if/DQ[5]} -radix unsigned} {{/top/comp_if/DQ[4]} -radix unsigned} {{/top/comp_if/DQ[3]} -radix unsigned} {{/top/comp_if/DQ[2]} -radix unsigned} {{/top/comp_if/DQ[1]} -radix unsigned} {{/top/comp_if/DQ[0]} -radix unsigned}} -subitemconfig {{/top/comp_if/DQ[7]} {-height 15 -radix unsigned} {/top/comp_if/DQ[6]} {-height 15 -radix unsigned} {/top/comp_if/DQ[5]} {-height 15 -radix unsigned} {/top/comp_if/DQ[4]} {-height 15 -radix unsigned} {/top/comp_if/DQ[3]} {-height 15 -radix unsigned} {/top/comp_if/DQ[2]} {-height 15 -radix unsigned} {/top/comp_if/DQ[1]} {-height 15 -radix unsigned} {/top/comp_if/DQ[0]} {-height 15 -radix unsigned}} /top/comp_if/DQ
add wave -noupdate -radix unsigned /uvm_root/uvm_test_top/my_env/my_scoreboard/ref_DQ
add wave -noupdate /top/comp_if/op
add wave -noupdate -divider -height 30 Memory
add wave -noupdate -radix decimal -childformat {{{/top/DUT/memory[15]} -radix unsigned} {{/top/DUT/memory[14]} -radix unsigned} {{/top/DUT/memory[13]} -radix unsigned} {{/top/DUT/memory[12]} -radix unsigned} {{/top/DUT/memory[11]} -radix unsigned} {{/top/DUT/memory[10]} -radix unsigned} {{/top/DUT/memory[9]} -radix unsigned} {{/top/DUT/memory[8]} -radix unsigned} {{/top/DUT/memory[7]} -radix unsigned} {{/top/DUT/memory[6]} -radix unsigned} {{/top/DUT/memory[5]} -radix unsigned} {{/top/DUT/memory[4]} -radix unsigned} {{/top/DUT/memory[3]} -radix unsigned} {{/top/DUT/memory[2]} -radix decimal} {{/top/DUT/memory[1]} -radix unsigned} {{/top/DUT/memory[0]} -radix unsigned}} -expand -subitemconfig {{/top/DUT/memory[15]} {-height 15 -radix unsigned} {/top/DUT/memory[14]} {-height 15 -radix unsigned} {/top/DUT/memory[13]} {-height 15 -radix unsigned} {/top/DUT/memory[12]} {-height 15 -radix unsigned} {/top/DUT/memory[11]} {-height 15 -radix unsigned} {/top/DUT/memory[10]} {-height 15 -radix unsigned} {/top/DUT/memory[9]} {-height 15 -radix unsigned} {/top/DUT/memory[8]} {-height 15 -radix unsigned} {/top/DUT/memory[7]} {-height 15 -radix unsigned} {/top/DUT/memory[6]} {-height 15 -radix unsigned} {/top/DUT/memory[5]} {-height 15 -radix unsigned} {/top/DUT/memory[4]} {-height 15 -radix unsigned} {/top/DUT/memory[3]} {-height 15 -radix unsigned} {/top/DUT/memory[2]} {-height 15 -radix decimal} {/top/DUT/memory[1]} {-height 15 -radix unsigned} {/top/DUT/memory[0]} {-height 15 -radix unsigned}} /top/DUT/memory
add wave -noupdate -childformat {{{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[15]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[14]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[13]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[12]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[11]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[10]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[9]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[8]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[7]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[6]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[5]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[4]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[3]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[2]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[1]} -radix unsigned} {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[0]} -radix unsigned}} -expand -subitemconfig {{/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[15]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[14]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[13]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[12]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[11]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[10]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[9]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[8]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[7]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[6]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[5]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[4]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[3]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[2]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[1]} {-radix unsigned} {/uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory[0]} {-radix unsigned}} /uvm_root/uvm_test_top/my_env/my_scoreboard/ref_memory
TreeUpdate [SetDefaultTree]
WaveRestoreCursors {{Cursor 1} {83715 ns} 0}
quietly wave cursor active 1
configure wave -namecolwidth 150
configure wave -valuecolwidth 158
configure wave -justifyvalue left
configure wave -signalnamewidth 0
configure wave -snapdistance 10
configure wave -datasetprefix 0
configure wave -rowmargin 4
configure wave -childrowmargin 2
configure wave -gridoffset 0
configure wave -gridperiod 1
configure wave -griddelta 40
configure wave -timeline 0
configure wave -timelineunits ns
update
WaveRestoreZoom {23024 ns} {23076 ns}
