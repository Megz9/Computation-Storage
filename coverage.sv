package coverage_pkg;
  import CompPkg::*;
  import uvm_pkg::*;
  import seq_item_pkg::*;
  `include "uvm_macros.svh"

  class coverage extends uvm_component;
    `uvm_component_utils(coverage)

    sequence_item seq_item_cov;
    uvm_analysis_export #(sequence_item) cov_export;
    uvm_tlm_analysis_fifo #(sequence_item) cov_fifo;

    // covergroups
    covergroup g1;

      operation_cp: coverpoint seq_item_cov.op iff (!seq_item_cov.RESET) {
        bins read = {RD_MEM_CMD};
        bins write = {WR_MEM_CMD};
        bins add = {ADD_CMD};
        bins sub = {SUB_CMD};
      }
      AddressA: coverpoint seq_item_cov.addA {
        bins zero = {0};
        bins max = {(2 ** addrSize) - 1};
        bins middle[] = {[1 : (2 ** addrSize) - 1]};
      }
      AddressB: coverpoint seq_item_cov.addB {
        bins zero = {0};
        bins max = {(2 ** addrSize) - 1};
        bins middle[] = {[1 : (2 ** addrSize) - 2]};
      }
      AddressC: coverpoint seq_item_cov.addC {
        bins zero = {0};
        bins max = {(2 ** addrSize) - 1};
        bins middle[] = {[1 : (2 ** addrSize) - 2]};
      }
      op_C: cross operation_cp, AddressC{
        bins cross_read = binsof (operation_cp.read);
        bins cross_write = binsof (operation_cp.write);
      }


    endgroup

    function new(string name = "coverage", uvm_component parent = null);
      super.new(name, parent);
      g1 = new();
    endfunction

    function void build_phase(uvm_phase phase);
      super.build_phase(phase);
      cov_export = new("cov_export", this);
      cov_fifo   = new("cov_fifo", this);



    endfunction

    function void connect_phase(uvm_phase phase);
      super.connect_phase(phase);
      cov_export.connect(cov_fifo.analysis_export);
    endfunction

    task run_phase(uvm_phase phase);
      super.run_phase(phase);
      forever begin
        cov_fifo.get(seq_item_cov);
        // covergroup sample method calls
        g1.sample();
      end
    endtask
  endclass
endpackage
