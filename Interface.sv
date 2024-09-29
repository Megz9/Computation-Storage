
interface Computation_interface (
    input bit CLK
);
  import CompPkg::*;
  logic RESET;
  logic [addrSize-1:0] addA;
  logic [addrSize-1:0] addB;
  logic [addrSize-1:0] addC;
  logic [dataSize-1:0] DQ;
  operations op;
endinterface  //Computation_interface    
