package driver_pkg;
  import uvm_pkg::*;
  import CompPkg::*;
  import config_pkg::*;
  import seq_item_pkg::*;
  `include "uvm_macros.svh"

  class driver extends uvm_driver #(sequence_item);
    `uvm_component_utils(driver);

    virtual Computation_interface comp_if;
    sequence_item seq_item;
    comp_config comp_cfg;

    function new(string name = "driver", uvm_component parent = null);
      super.new(name, parent);
    endfunction  //new()

    function void build_phase(uvm_phase phase);
      super.build_phase(phase);
      if (!uvm_config_db#(comp_config)::get(this, "", "CFG", comp_cfg))
        `uvm_fatal("DRIVER BUILD PHASE", "unable to get configuration object");
    endfunction

    function void connect_phase(uvm_phase phase);
      super.connect_phase(phase);
      comp_if = comp_cfg.comp_if;
    endfunction

    task run_phase(uvm_phase phase);
      super.run_phase(phase);
      `uvm_info("running phase ", "starting driver", UVM_MEDIUM);

      forever begin
        seq_item = sequence_item::type_id::create("seq_item");
        seq_item_port.get_next_item(seq_item);
        comp_if.RESET = seq_item.RESET;
        comp_if.op    = seq_item.op;
        comp_if.addA  = seq_item.addA;
        comp_if.addB  = seq_item.addB;
        comp_if.addC  = seq_item.addC;
        comp_if.DQ    = seq_item.DQ;
        @(negedge comp_if.CLK);

        seq_item_port.item_done();
      end
      `uvm_info("running phase ", "ended driver", UVM_MEDIUM);

      // comp_if.RESET = 1;
      // @(posedge comp_if.CLK);

      // comp_if.RESET = 0;
      // @(posedge comp_if.CLK);

      // comp_if.op = WR_MEM_CMD;
      // for (int i = 0; i < 16; i++) begin
      //   comp_if.addC = i;
      //   comp_if.addA = 4;
      //   comp_if.addB = 3;
      //   @(posedge comp_if.CLK);
      // end
      // @(posedge comp_if.CLK);
      // @(posedge comp_if.CLK);
      // @(posedge comp_if.CLK);

      // for (int i = 0; i < 16; i++) begin
      //   comp_if.addC = i;
      //   comp_if.addA = 4;
      //   comp_if.addB = 3;
      //   comp_if.DQ   = $random;

      //   @(posedge comp_if.CLK);
      // end
      // @(posedge comp_if.CLK);
      // @(posedge comp_if.CLK);
      // @(posedge comp_if.CLK);

      // comp_if.op   = CompPkg::RD_MEM_CMD;
      // comp_if.addA = 5;
      // comp_if.addB = $random;
      // comp_if.addC = $random;
      // @(posedge comp_if.CLK);
      // @(posedge comp_if.CLK);
      // @(posedge comp_if.CLK);
      // @(posedge comp_if.CLK);

      // comp_if.op   = CompPkg::RD_MEM_CMD;
      // comp_if.addA = 6;
      // comp_if.addB = $random;
      // comp_if.addC = $random;
      // @(posedge comp_if.CLK);

      // comp_if.op   = CompPkg::ADD_CMD;
      // comp_if.addA = 4;
      // comp_if.addB = 3;
      // comp_if.addC = 2;
      // @(posedge comp_if.CLK);

      // comp_if.op   = CompPkg::SUB_CMD;
      // comp_if.addA = 4;
      // comp_if.addB = 3;
      // comp_if.addC = 2;
      // @(posedge comp_if.CLK);

    endtask  //
  endclass  //driver extends uvm_driver
endpackage
