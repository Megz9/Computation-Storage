var g_data = {"21":{"pr":"/top/DUT","t":"inst","br":[{"bs":[{"s":"    if (comp_if.RESET) begin\r","f":138,"i":1,"l":9,"h":1499},{"s":"    end else begin\r","f":138,"i":1,"l":14,"h":13503}],"br":{"s":"    if (comp_if.RESET) begin\r","f":138,"l":9,"i":1,"p":100.00}},{"bs":[{"s":"        RD_MEM_CMD: comp_if.DQ <= memory[comp_if.addA];\r","f":138,"i":1,"l":16,"h":1732},{"s":"        WR_MEM_CMD: memory[comp_if.addC] <= comp_if.DQ;\r","f":138,"i":1,"l":17,"h":8356},{"s":"        ADD_CMD: memory[comp_if.addC] <= memory[comp_if.addA] + memory[comp_if.addB];\r","f":138,"i":1,"l":18,"h":1692},{"s":"        SUB_CMD: memory[comp_if.addC] <= memory[comp_if.addA] - memory[comp_if.addB];\r","f":138,"i":1,"l":19,"h":1722},{"s":"All False","f":138,"i":1,"l":15,"h":1}],"br":{"s":"      case (comp_if.op)\r","f":138,"l":15,"i":1,"p":100.00}}]},"24":{"pr":"/seq_item_pkg","t":"inst","br":[{"bs":[{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"i":1,"l":7,"h":0},{"s":"All False","f":117,"i":1,"l":7,"h":0}],"br":{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"l":7,"i":1,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"i":2,"l":7,"h":0},{"s":"All False","f":117,"i":1,"l":7,"h":0}],"br":{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"l":7,"i":2,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"i":3,"l":7,"h":0},{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"i":4,"l":7,"h":0}],"br":{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"l":7,"i":3,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"i":5,"l":7,"h":0},{"s":"All False","f":117,"i":1,"l":7,"h":0}],"br":{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"l":7,"i":5,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"i":6,"l":7,"h":0},{"s":"All False","f":117,"i":1,"l":7,"h":0}],"br":{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"l":7,"i":6,"p":0.00}},{"bs":[{"s":"        RD_MEM_CMD: return $sformatf(\"operation = %s, addA = %d\", op, addA);\r","f":117,"i":1,"l":25,"h":0},{"s":"        WR_MEM_CMD: return $sformatf(\"operation = %s, addC = %d\", op, addC);\r","f":117,"i":1,"l":27,"h":0},{"s":"        ADD_CMD:\r","f":117,"i":1,"l":29,"h":0},{"s":"        SUB_CMD:\r","f":117,"i":1,"l":32,"h":0},{"s":"All False","f":117,"i":1,"l":22,"h":0}],"br":{"s":"      case (op)\r","f":117,"l":22,"i":1,"p":0.00}}]},"25":{"pr":"/sequences_pkg","t":"inst","br":[{"bs":[{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"i":1,"l":10,"h":0},{"s":"All False","f":118,"i":1,"l":10,"h":0}],"br":{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"l":10,"i":1,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"i":2,"l":10,"h":0},{"s":"All False","f":118,"i":1,"l":10,"h":0}],"br":{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"l":10,"i":2,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"i":3,"l":10,"h":0},{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"i":4,"l":10,"h":0}],"br":{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"l":10,"i":3,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"i":5,"l":10,"h":0},{"s":"All False","f":118,"i":1,"l":10,"h":0}],"br":{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"l":10,"i":5,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"i":6,"l":10,"h":0},{"s":"All False","f":118,"i":1,"l":10,"h":0}],"br":{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"l":10,"i":6,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"i":1,"l":31,"h":0},{"s":"All False","f":118,"i":1,"l":31,"h":0}],"br":{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"l":31,"i":1,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"i":2,"l":31,"h":0},{"s":"All False","f":118,"i":1,"l":31,"h":0}],"br":{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"l":31,"i":2,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"i":3,"l":31,"h":0},{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"i":4,"l":31,"h":0}],"br":{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"l":31,"i":3,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"i":5,"l":31,"h":0},{"s":"All False","f":118,"i":1,"l":31,"h":0}],"br":{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"l":31,"i":5,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"i":6,"l":31,"h":0},{"s":"All False","f":118,"i":1,"l":31,"h":0}],"br":{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"l":31,"i":6,"p":0.00}}]},"33":{"pr":"/config_pkg","t":"inst","br":[{"bs":[{"s":"    `uvm_object_utils(comp_config);\r","f":120,"i":1,"l":6,"h":0},{"s":"All False","f":120,"i":1,"l":6,"h":0}],"br":{"s":"    `uvm_object_utils(comp_config);\r","f":120,"l":6,"i":1,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(comp_config);\r","f":120,"i":2,"l":6,"h":0},{"s":"All False","f":120,"i":1,"l":6,"h":0}],"br":{"s":"    `uvm_object_utils(comp_config);\r","f":120,"l":6,"i":2,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(comp_config);\r","f":120,"i":3,"l":6,"h":0},{"s":"    `uvm_object_utils(comp_config);\r","f":120,"i":4,"l":6,"h":0}],"br":{"s":"    `uvm_object_utils(comp_config);\r","f":120,"l":6,"i":3,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(comp_config);\r","f":120,"i":5,"l":6,"h":0},{"s":"All False","f":120,"i":1,"l":6,"h":0}],"br":{"s":"    `uvm_object_utils(comp_config);\r","f":120,"l":6,"i":5,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(comp_config);\r","f":120,"i":6,"l":6,"h":0},{"s":"All False","f":120,"i":1,"l":6,"h":0}],"br":{"s":"    `uvm_object_utils(comp_config);\r","f":120,"l":6,"i":6,"p":0.00}}]},"34":{"pr":"/scoreboard_pkg","t":"inst","br":[{"bs":[{"s":"      if (!uvm_config_db#(comp_config)::get(this, \"\", \"CFG\", cfg_sb))\r","f":121,"i":1,"l":31,"h":0},{"s":"All False","f":121,"i":1,"l":31,"h":1}],"br":{"s":"      if (!uvm_config_db#(comp_config)::get(this, \"\", \"CFG\", cfg_sb))\r","f":121,"l":31,"i":1,"p":50.00}},{"bs":[{"s":"        `uvm_fatal(\"build_phase\", \"Scoreboard - unable to get conf object from the database\");\r","f":121,"i":1,"l":32,"h":0},{"s":"All False","f":121,"i":1,"l":32,"h":0}],"br":{"s":"        `uvm_fatal(\"build_phase\", \"Scoreboard - unable to get conf object from the database\");\r","f":121,"l":32,"i":1,"p":0.00}},{"bs":[{"s":"        if (seq_item_sb.op == RD_MEM_CMD) begin\r","f":121,"i":1,"l":48,"h":1897},{"s":"All False","f":121,"i":1,"l":48,"h":13105}],"br":{"s":"        if (seq_item_sb.op == RD_MEM_CMD) begin\r","f":121,"l":48,"i":1,"p":100.00}},{"bs":[{"s":"          if (ref_DQ != seq_item_sb.DQ) begin\r","f":121,"i":1,"l":49,"h":0},{"s":"          end else begin\r","f":121,"i":1,"l":55,"h":1897}],"br":{"s":"          if (ref_DQ != seq_item_sb.DQ) begin\r","f":121,"l":49,"i":1,"p":50.00}},{"bs":[{"s":"            `uvm_error(\"SCOREBOARD RUN PHASE\",\r","f":121,"i":1,"l":51,"h":0},{"s":"All False","f":121,"i":1,"l":51,"h":0}],"br":{"s":"            `uvm_error(\"SCOREBOARD RUN PHASE\",\r","f":121,"l":51,"i":1,"p":0.00}},{"bs":[{"s":"            `uvm_info(\"SCOREBOARD RUN PHASE\", $sformatf(\"Correct Transaction\"), UVM_HIGH);\r","f":121,"i":1,"l":56,"h":0},{"s":"All False","f":121,"i":1,"l":56,"h":1897}],"br":{"s":"            `uvm_info(\"SCOREBOARD RUN PHASE\", $sformatf(\"Correct Transaction\"), UVM_HIGH);\r","f":121,"l":56,"i":1,"p":50.00}},{"bs":[{"s":"      if (seq_item_sb.RESET) begin  //reset\r","f":121,"i":1,"l":65,"h":1499},{"s":"      end else begin\r","f":121,"i":1,"l":67,"h":13503}],"br":{"s":"      if (seq_item_sb.RESET) begin  //reset\r","f":121,"l":65,"i":1,"p":100.00}},{"bs":[{"s":"          RD_MEM_CMD: ref_DQ = ref_memory[seq_item_sb.addA];\r","f":121,"i":1,"l":69,"h":1732},{"s":"          WR_MEM_CMD: ref_memory[seq_item_sb.addC] = seq_item_sb.DQ;\r","f":121,"i":1,"l":70,"h":8356},{"s":"          ADD_CMD:\r","f":121,"i":1,"l":71,"h":1692},{"s":"          SUB_CMD:\r","f":121,"i":1,"l":73,"h":1722},{"s":"All False","f":121,"i":1,"l":68,"h":1}],"br":{"s":"        case (seq_item_sb.op)\r","f":121,"l":68,"i":1,"p":100.00}},{"bs":[{"s":"      `uvm_info(\"report phase\", $sformatf(\"Total successful transactions: %0d\", correct_count),\r","f":121,"i":1,"l":88,"h":1},{"s":"All False","f":121,"i":1,"l":88,"h":0}],"br":{"s":"      `uvm_info(\"report phase\", $sformatf(\"Total successful transactions: %0d\", correct_count),\r","f":121,"l":88,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"report phase\", $sformatf(\"Total failed transactions: %0d\", error_count),\r","f":121,"i":1,"l":90,"h":1},{"s":"All False","f":121,"i":1,"l":90,"h":0}],"br":{"s":"      `uvm_info(\"report phase\", $sformatf(\"Total failed transactions: %0d\", error_count),\r","f":121,"l":90,"i":1,"p":50.00}}]},"36":{"pr":"/monitor_pkg","t":"inst","br":[{"bs":[{"s":"        `uvm_info(\"run_phase\", seq_item.convert2string(), UVM_HIGH);\r","f":123,"i":1,"l":37,"h":0},{"s":"All False","f":123,"i":1,"l":37,"h":15002}],"br":{"s":"        `uvm_info(\"run_phase\", seq_item.convert2string(), UVM_HIGH);\r","f":123,"l":37,"i":1,"p":50.00}}]},"37":{"pr":"/driver_pkg","t":"inst","br":[{"bs":[{"s":"      if (!uvm_config_db#(comp_config)::get(this, \"\", \"CFG\", comp_cfg))\r","f":124,"i":1,"l":21,"h":0},{"s":"All False","f":124,"i":1,"l":21,"h":1}],"br":{"s":"      if (!uvm_config_db#(comp_config)::get(this, \"\", \"CFG\", comp_cfg))\r","f":124,"l":21,"i":1,"p":50.00}},{"bs":[{"s":"        `uvm_fatal(\"DRIVER BUILD PHASE\", \"unable to get configuration object\");\r","f":124,"i":1,"l":22,"h":0},{"s":"All False","f":124,"i":1,"l":22,"h":0}],"br":{"s":"        `uvm_fatal(\"DRIVER BUILD PHASE\", \"unable to get configuration object\");\r","f":124,"l":22,"i":1,"p":0.00}},{"bs":[{"s":"      `uvm_info(\"running phase \", \"starting driver\", UVM_MEDIUM);\r","f":124,"i":1,"l":32,"h":1},{"s":"All False","f":124,"i":1,"l":32,"h":0}],"br":{"s":"      `uvm_info(\"running phase \", \"starting driver\", UVM_MEDIUM);\r","f":124,"l":32,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"running phase \", \"ended driver\", UVM_MEDIUM);\r","f":124,"i":1,"l":47,"h":0},{"s":"All False","f":124,"i":1,"l":47,"h":0}],"br":{"s":"      `uvm_info(\"running phase \", \"ended driver\", UVM_MEDIUM);\r","f":124,"l":47,"i":1,"p":0.00}}]},"38":{"pr":"/agent_pkg","t":"inst","br":[{"bs":[{"s":"      if (!uvm_config_db#(comp_config)::get(this, \"\", \"CFG\", cfg))\r","f":125,"i":1,"l":34,"h":0},{"s":"All False","f":125,"i":1,"l":34,"h":1}],"br":{"s":"      if (!uvm_config_db#(comp_config)::get(this, \"\", \"CFG\", cfg))\r","f":125,"l":34,"i":1,"p":50.00}},{"bs":[{"s":"        `uvm_fatal(\"MY_AGENT\", \"FAILED GETTING CONFIG DB\");\r","f":125,"i":1,"l":35,"h":0},{"s":"All False","f":125,"i":1,"l":35,"h":0}],"br":{"s":"        `uvm_fatal(\"MY_AGENT\", \"FAILED GETTING CONFIG DB\");\r","f":125,"l":35,"i":1,"p":0.00}},{"bs":[{"s":"      `uvm_info(\"MY_AGENT\", \"BUILD_PHASE\", UVM_MEDIUM);\r","f":125,"i":1,"l":37,"h":1},{"s":"All False","f":125,"i":1,"l":37,"h":0}],"br":{"s":"      `uvm_info(\"MY_AGENT\", \"BUILD_PHASE\", UVM_MEDIUM);\r","f":125,"l":37,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"connect phase \", \"connecting in agent\", UVM_MEDIUM);\r","f":125,"i":1,"l":44,"h":1},{"s":"All False","f":125,"i":1,"l":44,"h":0}],"br":{"s":"      `uvm_info(\"connect phase \", \"connecting in agent\", UVM_MEDIUM);\r","f":125,"l":44,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"connect phase \", \"connected in env\", UVM_MEDIUM);\r","f":125,"i":1,"l":51,"h":1},{"s":"All False","f":125,"i":1,"l":51,"h":0}],"br":{"s":"      `uvm_info(\"connect phase \", \"connected in env\", UVM_MEDIUM);\r","f":125,"l":51,"i":1,"p":50.00}}]},"39":{"pr":"/env_pkg","t":"inst","br":[{"bs":[{"s":"      `uvm_info(\"connect phase \", \"connecting in env\", UVM_MEDIUM);\r","f":126,"i":1,"l":32,"h":1},{"s":"All False","f":126,"i":1,"l":32,"h":0}],"br":{"s":"      `uvm_info(\"connect phase \", \"connecting in env\", UVM_MEDIUM);\r","f":126,"l":32,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"connect phase \", \"connected in env\", UVM_MEDIUM);\r","f":126,"i":1,"l":36,"h":1},{"s":"All False","f":126,"i":1,"l":36,"h":0}],"br":{"s":"      `uvm_info(\"connect phase \", \"connected in env\", UVM_MEDIUM);\r","f":126,"l":36,"i":1,"p":50.00}}]},"40":{"pr":"/test_pkg","t":"inst","br":[{"bs":[{"s":"      if (!uvm_config_db#(virtual Computation_interface)::get(\r","f":127,"i":1,"l":27,"h":0},{"s":"All False","f":127,"i":1,"l":27,"h":1}],"br":{"s":"      if (!uvm_config_db#(virtual Computation_interface)::get(\r","f":127,"l":27,"i":1,"p":50.00}},{"bs":[{"s":"        `uvm_fatal(\"TEST\", \"Couldn't get the virtual interface\");\r","f":127,"i":1,"l":30,"h":0},{"s":"All False","f":127,"i":1,"l":30,"h":0}],"br":{"s":"        `uvm_fatal(\"TEST\", \"Couldn't get the virtual interface\");\r","f":127,"l":30,"i":1,"p":0.00}},{"bs":[{"s":"      `uvm_info(\"run_phase\", \"Started reset sequence\", UVM_MEDIUM);\r","f":127,"i":1,"l":38,"h":1},{"s":"All False","f":127,"i":1,"l":38,"h":0}],"br":{"s":"      `uvm_info(\"run_phase\", \"Started reset sequence\", UVM_MEDIUM);\r","f":127,"l":38,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"run_phase\", \"Ended reset sequence\", UVM_MEDIUM);\r","f":127,"i":1,"l":40,"h":1},{"s":"All False","f":127,"i":1,"l":40,"h":0}],"br":{"s":"      `uvm_info(\"run_phase\", \"Ended reset sequence\", UVM_MEDIUM);\r","f":127,"l":40,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"run_phase\", \"Started main sequence\", UVM_MEDIUM);\r","f":127,"i":1,"l":42,"h":1},{"s":"All False","f":127,"i":1,"l":42,"h":0}],"br":{"s":"      `uvm_info(\"run_phase\", \"Started main sequence\", UVM_MEDIUM);\r","f":127,"l":42,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"run_phase\", \"Ended main sequence\", UVM_MEDIUM);\r","f":127,"i":1,"l":44,"h":1},{"s":"All False","f":127,"i":1,"l":44,"h":0}],"br":{"s":"      `uvm_info(\"run_phase\", \"Ended main sequence\", UVM_MEDIUM);\r","f":127,"l":44,"i":1,"p":50.00}}]},"12":{"pr":"work.agent_pkg","t":"du","br":[{"bs":[{"s":"      if (!uvm_config_db#(comp_config)::get(this, \"\", \"CFG\", cfg))\r","f":125,"i":1,"l":34,"h":0},{"s":"All False","f":125,"i":1,"l":34,"h":1}],"br":{"s":"      if (!uvm_config_db#(comp_config)::get(this, \"\", \"CFG\", cfg))\r","f":125,"l":34,"i":1,"p":50.00}},{"bs":[{"s":"        `uvm_fatal(\"MY_AGENT\", \"FAILED GETTING CONFIG DB\");\r","f":125,"i":1,"l":35,"h":0},{"s":"All False","f":125,"i":1,"l":35,"h":0}],"br":{"s":"        `uvm_fatal(\"MY_AGENT\", \"FAILED GETTING CONFIG DB\");\r","f":125,"l":35,"i":1,"p":0.00}},{"bs":[{"s":"      `uvm_info(\"MY_AGENT\", \"BUILD_PHASE\", UVM_MEDIUM);\r","f":125,"i":1,"l":37,"h":1},{"s":"All False","f":125,"i":1,"l":37,"h":0}],"br":{"s":"      `uvm_info(\"MY_AGENT\", \"BUILD_PHASE\", UVM_MEDIUM);\r","f":125,"l":37,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"connect phase \", \"connecting in agent\", UVM_MEDIUM);\r","f":125,"i":1,"l":44,"h":1},{"s":"All False","f":125,"i":1,"l":44,"h":0}],"br":{"s":"      `uvm_info(\"connect phase \", \"connecting in agent\", UVM_MEDIUM);\r","f":125,"l":44,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"connect phase \", \"connected in env\", UVM_MEDIUM);\r","f":125,"i":1,"l":51,"h":1},{"s":"All False","f":125,"i":1,"l":51,"h":0}],"br":{"s":"      `uvm_info(\"connect phase \", \"connected in env\", UVM_MEDIUM);\r","f":125,"l":51,"i":1,"p":50.00}}]},"7":{"pr":"work.config_pkg","t":"du","br":[{"bs":[{"s":"    `uvm_object_utils(comp_config);\r","f":120,"i":1,"l":6,"h":0},{"s":"All False","f":120,"i":1,"l":6,"h":0}],"br":{"s":"    `uvm_object_utils(comp_config);\r","f":120,"l":6,"i":1,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(comp_config);\r","f":120,"i":2,"l":6,"h":0},{"s":"All False","f":120,"i":1,"l":6,"h":0}],"br":{"s":"    `uvm_object_utils(comp_config);\r","f":120,"l":6,"i":2,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(comp_config);\r","f":120,"i":3,"l":6,"h":0},{"s":"    `uvm_object_utils(comp_config);\r","f":120,"i":4,"l":6,"h":0}],"br":{"s":"    `uvm_object_utils(comp_config);\r","f":120,"l":6,"i":3,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(comp_config);\r","f":120,"i":5,"l":6,"h":0},{"s":"All False","f":120,"i":1,"l":6,"h":0}],"br":{"s":"    `uvm_object_utils(comp_config);\r","f":120,"l":6,"i":5,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(comp_config);\r","f":120,"i":6,"l":6,"h":0},{"s":"All False","f":120,"i":1,"l":6,"h":0}],"br":{"s":"    `uvm_object_utils(comp_config);\r","f":120,"l":6,"i":6,"p":0.00}}]},"11":{"pr":"work.driver_pkg","t":"du","br":[{"bs":[{"s":"      if (!uvm_config_db#(comp_config)::get(this, \"\", \"CFG\", comp_cfg))\r","f":124,"i":1,"l":21,"h":0},{"s":"All False","f":124,"i":1,"l":21,"h":1}],"br":{"s":"      if (!uvm_config_db#(comp_config)::get(this, \"\", \"CFG\", comp_cfg))\r","f":124,"l":21,"i":1,"p":50.00}},{"bs":[{"s":"        `uvm_fatal(\"DRIVER BUILD PHASE\", \"unable to get configuration object\");\r","f":124,"i":1,"l":22,"h":0},{"s":"All False","f":124,"i":1,"l":22,"h":0}],"br":{"s":"        `uvm_fatal(\"DRIVER BUILD PHASE\", \"unable to get configuration object\");\r","f":124,"l":22,"i":1,"p":0.00}},{"bs":[{"s":"      `uvm_info(\"running phase \", \"starting driver\", UVM_MEDIUM);\r","f":124,"i":1,"l":32,"h":1},{"s":"All False","f":124,"i":1,"l":32,"h":0}],"br":{"s":"      `uvm_info(\"running phase \", \"starting driver\", UVM_MEDIUM);\r","f":124,"l":32,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"running phase \", \"ended driver\", UVM_MEDIUM);\r","f":124,"i":1,"l":47,"h":0},{"s":"All False","f":124,"i":1,"l":47,"h":0}],"br":{"s":"      `uvm_info(\"running phase \", \"ended driver\", UVM_MEDIUM);\r","f":124,"l":47,"i":1,"p":0.00}}]},"13":{"pr":"work.env_pkg","t":"du","br":[{"bs":[{"s":"      `uvm_info(\"connect phase \", \"connecting in env\", UVM_MEDIUM);\r","f":126,"i":1,"l":32,"h":1},{"s":"All False","f":126,"i":1,"l":32,"h":0}],"br":{"s":"      `uvm_info(\"connect phase \", \"connecting in env\", UVM_MEDIUM);\r","f":126,"l":32,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"connect phase \", \"connected in env\", UVM_MEDIUM);\r","f":126,"i":1,"l":36,"h":1},{"s":"All False","f":126,"i":1,"l":36,"h":0}],"br":{"s":"      `uvm_info(\"connect phase \", \"connected in env\", UVM_MEDIUM);\r","f":126,"l":36,"i":1,"p":50.00}}]},"10":{"pr":"work.monitor_pkg","t":"du","br":[{"bs":[{"s":"        `uvm_info(\"run_phase\", seq_item.convert2string(), UVM_HIGH);\r","f":123,"i":1,"l":37,"h":0},{"s":"All False","f":123,"i":1,"l":37,"h":15002}],"br":{"s":"        `uvm_info(\"run_phase\", seq_item.convert2string(), UVM_HIGH);\r","f":123,"l":37,"i":1,"p":50.00}}]},"8":{"pr":"work.scoreboard_pkg","t":"du","br":[{"bs":[{"s":"      if (!uvm_config_db#(comp_config)::get(this, \"\", \"CFG\", cfg_sb))\r","f":121,"i":1,"l":31,"h":0},{"s":"All False","f":121,"i":1,"l":31,"h":1}],"br":{"s":"      if (!uvm_config_db#(comp_config)::get(this, \"\", \"CFG\", cfg_sb))\r","f":121,"l":31,"i":1,"p":50.00}},{"bs":[{"s":"        `uvm_fatal(\"build_phase\", \"Scoreboard - unable to get conf object from the database\");\r","f":121,"i":1,"l":32,"h":0},{"s":"All False","f":121,"i":1,"l":32,"h":0}],"br":{"s":"        `uvm_fatal(\"build_phase\", \"Scoreboard - unable to get conf object from the database\");\r","f":121,"l":32,"i":1,"p":0.00}},{"bs":[{"s":"        if (seq_item_sb.op == RD_MEM_CMD) begin\r","f":121,"i":1,"l":48,"h":1897},{"s":"All False","f":121,"i":1,"l":48,"h":13105}],"br":{"s":"        if (seq_item_sb.op == RD_MEM_CMD) begin\r","f":121,"l":48,"i":1,"p":100.00}},{"bs":[{"s":"          if (ref_DQ != seq_item_sb.DQ) begin\r","f":121,"i":1,"l":49,"h":0},{"s":"          end else begin\r","f":121,"i":1,"l":55,"h":1897}],"br":{"s":"          if (ref_DQ != seq_item_sb.DQ) begin\r","f":121,"l":49,"i":1,"p":50.00}},{"bs":[{"s":"            `uvm_error(\"SCOREBOARD RUN PHASE\",\r","f":121,"i":1,"l":51,"h":0},{"s":"All False","f":121,"i":1,"l":51,"h":0}],"br":{"s":"            `uvm_error(\"SCOREBOARD RUN PHASE\",\r","f":121,"l":51,"i":1,"p":0.00}},{"bs":[{"s":"            `uvm_info(\"SCOREBOARD RUN PHASE\", $sformatf(\"Correct Transaction\"), UVM_HIGH);\r","f":121,"i":1,"l":56,"h":0},{"s":"All False","f":121,"i":1,"l":56,"h":1897}],"br":{"s":"            `uvm_info(\"SCOREBOARD RUN PHASE\", $sformatf(\"Correct Transaction\"), UVM_HIGH);\r","f":121,"l":56,"i":1,"p":50.00}},{"bs":[{"s":"      if (seq_item_sb.RESET) begin  //reset\r","f":121,"i":1,"l":65,"h":1499},{"s":"      end else begin\r","f":121,"i":1,"l":67,"h":13503}],"br":{"s":"      if (seq_item_sb.RESET) begin  //reset\r","f":121,"l":65,"i":1,"p":100.00}},{"bs":[{"s":"          RD_MEM_CMD: ref_DQ = ref_memory[seq_item_sb.addA];\r","f":121,"i":1,"l":69,"h":1732},{"s":"          WR_MEM_CMD: ref_memory[seq_item_sb.addC] = seq_item_sb.DQ;\r","f":121,"i":1,"l":70,"h":8356},{"s":"          ADD_CMD:\r","f":121,"i":1,"l":71,"h":1692},{"s":"          SUB_CMD:\r","f":121,"i":1,"l":73,"h":1722},{"s":"All False","f":121,"i":1,"l":68,"h":1}],"br":{"s":"        case (seq_item_sb.op)\r","f":121,"l":68,"i":1,"p":100.00}},{"bs":[{"s":"      `uvm_info(\"report phase\", $sformatf(\"Total successful transactions: %0d\", correct_count),\r","f":121,"i":1,"l":88,"h":1},{"s":"All False","f":121,"i":1,"l":88,"h":0}],"br":{"s":"      `uvm_info(\"report phase\", $sformatf(\"Total successful transactions: %0d\", correct_count),\r","f":121,"l":88,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"report phase\", $sformatf(\"Total failed transactions: %0d\", error_count),\r","f":121,"i":1,"l":90,"h":1},{"s":"All False","f":121,"i":1,"l":90,"h":0}],"br":{"s":"      `uvm_info(\"report phase\", $sformatf(\"Total failed transactions: %0d\", error_count),\r","f":121,"l":90,"i":1,"p":50.00}}]},"4":{"pr":"work.seq_item_pkg","t":"du","br":[{"bs":[{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"i":1,"l":7,"h":0},{"s":"All False","f":117,"i":1,"l":7,"h":0}],"br":{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"l":7,"i":1,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"i":2,"l":7,"h":0},{"s":"All False","f":117,"i":1,"l":7,"h":0}],"br":{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"l":7,"i":2,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"i":3,"l":7,"h":0},{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"i":4,"l":7,"h":0}],"br":{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"l":7,"i":3,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"i":5,"l":7,"h":0},{"s":"All False","f":117,"i":1,"l":7,"h":0}],"br":{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"l":7,"i":5,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"i":6,"l":7,"h":0},{"s":"All False","f":117,"i":1,"l":7,"h":0}],"br":{"s":"    `uvm_object_utils(sequence_item);\r","f":117,"l":7,"i":6,"p":0.00}},{"bs":[{"s":"        RD_MEM_CMD: return $sformatf(\"operation = %s, addA = %d\", op, addA);\r","f":117,"i":1,"l":25,"h":0},{"s":"        WR_MEM_CMD: return $sformatf(\"operation = %s, addC = %d\", op, addC);\r","f":117,"i":1,"l":27,"h":0},{"s":"        ADD_CMD:\r","f":117,"i":1,"l":29,"h":0},{"s":"        SUB_CMD:\r","f":117,"i":1,"l":32,"h":0},{"s":"All False","f":117,"i":1,"l":22,"h":0}],"br":{"s":"      case (op)\r","f":117,"l":22,"i":1,"p":0.00}}]},"5":{"pr":"work.sequences_pkg","t":"du","br":[{"bs":[{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"i":1,"l":10,"h":0},{"s":"All False","f":118,"i":1,"l":10,"h":0}],"br":{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"l":10,"i":1,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"i":2,"l":10,"h":0},{"s":"All False","f":118,"i":1,"l":10,"h":0}],"br":{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"l":10,"i":2,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"i":3,"l":10,"h":0},{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"i":4,"l":10,"h":0}],"br":{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"l":10,"i":3,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"i":5,"l":10,"h":0},{"s":"All False","f":118,"i":1,"l":10,"h":0}],"br":{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"l":10,"i":5,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"i":6,"l":10,"h":0},{"s":"All False","f":118,"i":1,"l":10,"h":0}],"br":{"s":"    `uvm_object_utils(reset_sequence)\r","f":118,"l":10,"i":6,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"i":1,"l":31,"h":0},{"s":"All False","f":118,"i":1,"l":31,"h":0}],"br":{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"l":31,"i":1,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"i":2,"l":31,"h":0},{"s":"All False","f":118,"i":1,"l":31,"h":0}],"br":{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"l":31,"i":2,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"i":3,"l":31,"h":0},{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"i":4,"l":31,"h":0}],"br":{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"l":31,"i":3,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"i":5,"l":31,"h":0},{"s":"All False","f":118,"i":1,"l":31,"h":0}],"br":{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"l":31,"i":5,"p":0.00}},{"bs":[{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"i":6,"l":31,"h":0},{"s":"All False","f":118,"i":1,"l":31,"h":0}],"br":{"s":"    `uvm_object_utils(main_sequence)\r","f":118,"l":31,"i":6,"p":0.00}}]},"14":{"pr":"work.test_pkg","t":"du","br":[{"bs":[{"s":"      if (!uvm_config_db#(virtual Computation_interface)::get(\r","f":127,"i":1,"l":27,"h":0},{"s":"All False","f":127,"i":1,"l":27,"h":1}],"br":{"s":"      if (!uvm_config_db#(virtual Computation_interface)::get(\r","f":127,"l":27,"i":1,"p":50.00}},{"bs":[{"s":"        `uvm_fatal(\"TEST\", \"Couldn't get the virtual interface\");\r","f":127,"i":1,"l":30,"h":0},{"s":"All False","f":127,"i":1,"l":30,"h":0}],"br":{"s":"        `uvm_fatal(\"TEST\", \"Couldn't get the virtual interface\");\r","f":127,"l":30,"i":1,"p":0.00}},{"bs":[{"s":"      `uvm_info(\"run_phase\", \"Started reset sequence\", UVM_MEDIUM);\r","f":127,"i":1,"l":38,"h":1},{"s":"All False","f":127,"i":1,"l":38,"h":0}],"br":{"s":"      `uvm_info(\"run_phase\", \"Started reset sequence\", UVM_MEDIUM);\r","f":127,"l":38,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"run_phase\", \"Ended reset sequence\", UVM_MEDIUM);\r","f":127,"i":1,"l":40,"h":1},{"s":"All False","f":127,"i":1,"l":40,"h":0}],"br":{"s":"      `uvm_info(\"run_phase\", \"Ended reset sequence\", UVM_MEDIUM);\r","f":127,"l":40,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"run_phase\", \"Started main sequence\", UVM_MEDIUM);\r","f":127,"i":1,"l":42,"h":1},{"s":"All False","f":127,"i":1,"l":42,"h":0}],"br":{"s":"      `uvm_info(\"run_phase\", \"Started main sequence\", UVM_MEDIUM);\r","f":127,"l":42,"i":1,"p":50.00}},{"bs":[{"s":"      `uvm_info(\"run_phase\", \"Ended main sequence\", UVM_MEDIUM);\r","f":127,"i":1,"l":44,"h":1},{"s":"All False","f":127,"i":1,"l":44,"h":0}],"br":{"s":"      `uvm_info(\"run_phase\", \"Ended main sequence\", UVM_MEDIUM);\r","f":127,"l":44,"i":1,"p":50.00}}]}};
processBranchesData(g_data);