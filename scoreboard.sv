package scoreboard_pkg;
  import uvm_pkg::*;
  import seq_item_pkg::*;
  import config_pkg::*;
  import CompPkg::*;
  `include "uvm_macros.svh"
  class scoreboard extends uvm_scoreboard;
    `uvm_component_utils(scoreboard);
    sequence_item seq_item_sb;
    uvm_analysis_export #(sequence_item) sb_export;
    uvm_tlm_analysis_fifo #(sequence_item) sb_fifo;
    comp_config cfg_sb;
    virtual Computation_interface comp_if;

    int fd;
    int correct_count = 0;
    int error_count = 0;
    reg [dataSize-1:0] ref_memory[(2**addrSize)-1:0];
    //     logic [addrSize-1:0] ref_addA;
    //   logic [addrSize-1:0] ref_addB;
    //   logic [addrSize-1:0] ref_addC;
    logic [dataSize-1:0] ref_DQ;
    function new(string name = "scoreboard", uvm_component parent = null);
      super.new(name, parent);
      $readmemh("memory.dat", ref_memory);

    endfunction  //new()

    function void build_phase(uvm_phase phase);
      super.build_phase(phase);
      if (!uvm_config_db#(comp_config)::get(this, "", "CFG", cfg_sb))
        `uvm_fatal("build_phase", "Scoreboard - unable to get conf object from the database");
      sb_export = new("sb_export");
      sb_fifo   = new("sb_fifo");
    endfunction

    function void connect_phase(uvm_phase phase);
      super.connect_phase(phase);
      sb_export.connect(sb_fifo.analysis_export);

    endfunction

    task run_phase(uvm_phase phase);
      super.run_phase(phase);
      forever begin
        sb_fifo.get(seq_item_sb);
        calculateExpected();
        if (seq_item_sb.op == RD_MEM_CMD) begin
          if (ref_DQ != seq_item_sb.DQ) begin
            error_count++;
            `uvm_error("SCOREBOARD RUN PHASE",
                       $sformatf(
                           "comparison failed op: RD_MEM_CMD, expected DQ = %d, actual DQ = %D",
                           ref_DQ, seq_item_sb.DQ));
          end else begin
            `uvm_info("SCOREBOARD RUN PHASE", $sformatf("Correct Transaction"), UVM_HIGH);
            correct_count++;
          end
        end


      end
    endtask  //
    task calculateExpected();
      if (seq_item_sb.RESET) begin  //reset
        ref_DQ = 0;
      end else begin
        case (seq_item_sb.op)
          RD_MEM_CMD: ref_DQ = ref_memory[seq_item_sb.addA];
          WR_MEM_CMD: ref_memory[seq_item_sb.addC] = seq_item_sb.DQ;
          ADD_CMD:
          ref_memory[seq_item_sb.addC] = ref_memory[seq_item_sb.addA] + ref_memory[seq_item_sb.addB];
          SUB_CMD:
          ref_memory[seq_item_sb.addC] = ref_memory[seq_item_sb.addA] - ref_memory[seq_item_sb.addB];
        endcase

      end
    endtask  //

    function void report_phase(uvm_phase phase);
      super.report_phase(phase);
      fd = $fopen("./expected.dat", "w");
      for (int i = 0; i < $size(ref_memory); i++) begin
        $fwrite(fd, "%h\n", ref_memory[i]);
      end
      $fclose(fd);
      //$system("./compare_files.sh");
      `uvm_info("report phase", $sformatf("Total successful transactions: %0d", correct_count),
                UVM_MEDIUM);
      `uvm_info("report phase", $sformatf("Total failed transactions: %0d", error_count),
                UVM_MEDIUM);
    endfunction
  endclass  //scoreboard extends uvm_scoreboard
endpackage
