package agent_pkg;
  import uvm_pkg::*;
  import driver_pkg::*;
  import monitor_pkg::*;
  import config_pkg::*;
  import seq_item_pkg::*;
  import sequencer_pkg::*;

  `include "uvm_macros.svh"

  class agent extends uvm_agent;
    `uvm_component_utils(agent);

    uvm_analysis_port #(sequence_item) agt_port;

    driver my_driver;
    monitor my_monitor;
    sequencer my_sequencer;
    comp_config cfg;


    function new(string name = "agent", uvm_component parent = null);
      super.new(name, parent);
    endfunction  //new()

    function void build_phase(uvm_phase phase);
      super.build_phase(phase);
      my_driver    = driver::type_id::create("my_driver", this);
      my_monitor   = monitor::type_id::create("my_monitor", this);
      my_sequencer = sequencer::type_id::create("my_sequencer", this);
      cfg          = comp_config::type_id::create("cfg", this);
      agt_port     = new("agt_port", this);

      if (!uvm_config_db#(comp_config)::get(this, "", "CFG", cfg))
        `uvm_fatal("MY_AGENT", "FAILED GETTING CONFIG DB");

      `uvm_info("MY_AGENT", "BUILD_PHASE", UVM_MEDIUM);

    endfunction


    function void connect_phase(uvm_phase phase);
      super.connect_phase(phase);
      `uvm_info("connect phase ", "connecting in agent", UVM_MEDIUM);

      my_monitor.comp_if = cfg.comp_if;
      my_driver.comp_if  = cfg.comp_if;

      my_driver.seq_item_port.connect(my_sequencer.seq_item_export);
      my_monitor.mon_ap.connect(agt_port);
      `uvm_info("connect phase ", "connected in env", UVM_MEDIUM);

    endfunction
  endclass  //agent extends uvm_agent
endpackage
