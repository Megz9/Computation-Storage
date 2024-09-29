package monitor_pkg;
  import uvm_pkg::*;
  import CompPkg::*;
  import config_pkg::*;
  import seq_item_pkg::*;
  `include "uvm_macros.svh"

  class monitor extends uvm_monitor;
    `uvm_component_utils(monitor);

    virtual Computation_interface comp_if;
    sequence_item seq_item;
    uvm_analysis_port #(sequence_item) mon_ap;
    function new(string name = "monitor", uvm_component parent = null);
      super.new(name, parent);
    endfunction

    function void build_phase(uvm_phase phase);
      super.build_phase(phase);
      mon_ap = new("mon_ap", this);

    endfunction

    task run_phase(uvm_phase phase);
      super.run_phase(phase);
      forever begin
        seq_item = sequence_item::type_id::create("seq_item");
        // stimulus_to_string;
        @(negedge comp_if.CLK);
        seq_item.RESET = comp_if.RESET;
        seq_item.op    = comp_if.op;
        seq_item.addA  = comp_if.addA;
        seq_item.addB  = comp_if.addB;
        seq_item.addC  = comp_if.addC;
        seq_item.DQ   =  comp_if.DQ;
        mon_ap.write(seq_item);
        `uvm_info("run_phase", seq_item.convert2string(), UVM_HIGH);

      end
    endtask

  endclass
endpackage
