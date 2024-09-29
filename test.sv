package test_pkg;
  import uvm_pkg::*;
  import env_pkg::*;
  import config_pkg::*;
  import sequences_pkg::*;
  import CompPkg::*;
  `include "uvm_macros.svh"
  class test extends uvm_test;
    `uvm_component_utils(test);

    env my_env;
    reset_sequence rst_seq;
    main_sequence main_seq;

    comp_config comp_config_obj;
    function new(string name = "test", uvm_component parent = null);
      super.new(name, parent);
    endfunction  //new()

    function void build_phase(uvm_phase phase);
      super.build_phase(phase);
      comp_config_obj = comp_config::type_id::create("comp_config_obj", this);
      my_env = env::type_id::create("my_env", this);
      rst_seq = reset_sequence::type_id::create("rst_seq", this);
      main_seq = main_sequence::type_id::create("main_seq", this);

      if (!uvm_config_db#(virtual Computation_interface)::get(
              this, "", "COMP_IF", comp_config_obj.comp_if
          ))
        `uvm_fatal("TEST", "Couldn't get the virtual interface");
      uvm_config_db#(comp_config)::set(this, "*", "CFG", comp_config_obj);
    endfunction

    task run_phase(uvm_phase phase);
      super.run_phase(phase);
      phase.raise_objection(this);

      `uvm_info("run_phase", "Started reset sequence", UVM_MEDIUM);
      rst_seq.start(my_env.my_agent.my_sequencer);
      `uvm_info("run_phase", "Ended reset sequence", UVM_MEDIUM);

      `uvm_info("run_phase", "Started main sequence", UVM_MEDIUM);
      main_seq.start(my_env.my_agent.my_sequencer);
      `uvm_info("run_phase", "Ended main sequence", UVM_MEDIUM);


      phase.drop_objection(this);
    endtask
  endclass  //test    extends UVM_test

endpackage
