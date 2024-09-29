package CompPkg;
  typedef enum int {
    RD_MEM_CMD = 1,
    WR_MEM_CMD = 2,
    ADD_CMD = 3,
    SUB_CMD = 4
  } operations;
  parameter addrSize = 4;
  parameter dataSize = 8;


endpackage
