

module ComputationStorage (
    Computation_interface comp_if
);
  import CompPkg::*;
  reg [dataSize-1:0] memory[(2**addrSize)-1:0];
  always @(posedge comp_if.CLK) begin
    if (comp_if.RESET) begin
      comp_if.DQ   <= 0;
      comp_if.addA <= 0;
      comp_if.addB <= 0;
      comp_if.addC <= 0;
    end else begin
      case (comp_if.op)
        RD_MEM_CMD: comp_if.DQ <= memory[comp_if.addA];
        WR_MEM_CMD: memory[comp_if.addC] <= comp_if.DQ;
        ADD_CMD: memory[comp_if.addC] <= memory[comp_if.addA] + memory[comp_if.addB];
        SUB_CMD: memory[comp_if.addC] <= memory[comp_if.addA] - memory[comp_if.addB];
      endcase

    end
  end


endmodule
