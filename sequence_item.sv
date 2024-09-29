package seq_item_pkg;
  import uvm_pkg::*;
  import CompPkg::*;
  `include "uvm_macros.svh"

  class sequence_item extends uvm_sequence_item;
    `uvm_object_utils(sequence_item);

    rand logic RESET;
    rand operations op;
    rand logic [addrSize -1:0] addA;
    rand logic [addrSize -1:0] addB;
    rand logic [addrSize -1:0] addC;
    rand logic [dataSize -1:0] DQ;

    function new(string name = "sequence_item");
      super.new(name);
    endfunction


    function string convert2string;
      case (op)


        RD_MEM_CMD: return $sformatf("operation = %s, addA = %d", op, addA);

        WR_MEM_CMD: return $sformatf("operation = %s, addC = %d", op, addC);

        ADD_CMD:
        return $sformatf("operation = %s, addA = %d, addB = %d, addC = %d", op, addA, addB, addC);

        SUB_CMD:
        return $sformatf("operation = %s, addA = %d, addB = %d, addC = %d", op, addA, addB, addC);
      endcase
    endfunction

    constraint reset {
      RESET dist {
        1 := 10,
        0 := 90
      };
    }
  endclass
endpackage
