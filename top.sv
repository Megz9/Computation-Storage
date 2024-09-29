import uvm_pkg::*;
import test_pkg::*;
import CompPkg::*;

module top;
  bit CLK;
  Computation_interface comp_if (CLK);
  ComputationStorage DUT (comp_if);

  initial begin
    CLK = 0;
    forever begin
      #5 CLK = ~CLK;
    end
  end

  initial begin
    //$system($sformatf("./randomDataGenerator.sh %0d", (2 ** addrSize)));

    $readmemh("memory.dat", DUT.memory);
    uvm_config_db#(virtual Computation_interface)::set(null, "uvm_test_top", "COMP_IF", comp_if);
    run_test("test");
  end


endmodule
