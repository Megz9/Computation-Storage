package sequences_pkg;
  import CompPkg::*;
  import uvm_pkg::*;
  import seq_item_pkg::*;
  `include "uvm_macros.svh"

  localparam TESTS = 150;

  class reset_sequence extends uvm_sequence #(sequence_item);
    `uvm_object_utils(reset_sequence)

    sequence_item seq_item;

    function new(string name = "reset_sequence");
      super.new(name);
    endfunction

    task body;
      seq_item = sequence_item::type_id::create("seq_item");
      start_item(seq_item);
      seq_item.RESET = 1;
      finish_item(seq_item);

      start_item(seq_item);
      seq_item.RESET = 0;
      finish_item(seq_item);
    endtask
  endclass

  class main_sequence extends uvm_sequence #(sequence_item);
    `uvm_object_utils(main_sequence)

    sequence_item seq_item;

    function new(string name = "main_sequence");
      super.new(name);
    endfunction

    task body;

      seq_item = sequence_item::type_id::create("seq_item");
      repeat (TESTS) begin
        seq_item.op.rand_mode(0);
        seq_item.op = WR_MEM_CMD;
        repeat (50) begin
          start_item(seq_item);
          assert (seq_item.randomize());
          finish_item(seq_item);
        end
        seq_item.op.rand_mode(1);
        repeat (50) begin
          start_item(seq_item);
          assert (seq_item.randomize());
          finish_item(seq_item);
        end

      end


    endtask
  endclass

endpackage
