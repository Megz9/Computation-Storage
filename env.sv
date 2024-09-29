
package env_pkg;

  import uvm_pkg::*;
  import agent_pkg::*;
  import scoreboard_pkg::*;
  import coverage_pkg::*;

  import CompPkg::*;
  `include "uvm_macros.svh"
  class env extends uvm_env;
    `uvm_component_utils(env);

    agent my_agent;
    scoreboard my_scoreboard;
    coverage my_cov;
    function new(string name = "env", uvm_component parent = null);
      super.new(name, parent);
    endfunction  //new()

    function void build_phase(uvm_phase phase);
      super.build_phase(phase);
      my_agent = agent::type_id::create("my_agent", this);
      my_cov = coverage::type_id::create("my_cov", this);
      my_scoreboard = scoreboard::type_id::create("my_scoreboard", this);

    endfunction

    function void connect_phase(uvm_phase phase);
      super.connect_phase(phase);

      `uvm_info("connect phase ", "connecting in env", UVM_MEDIUM);

      my_agent.agt_port.connect(my_scoreboard.sb_export);
      my_agent.agt_port.connect(my_cov.cov_export);
      `uvm_info("connect phase ", "connected in env", UVM_MEDIUM);

    endfunction
  endclass  //env extends uvm_env
endpackage
