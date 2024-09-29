
package config_pkg;
  import uvm_pkg::*;
  `include "uvm_macros.svh"
  class comp_config extends uvm_object;
    `uvm_object_utils(comp_config);

    virtual Computation_interface comp_if;
    function new(string name = "comp_config");
      super.new(name);
    endfunction  //new()
  endclass  //comp_config extends uvm_objestring name ="comp_config"ct

endpackage
