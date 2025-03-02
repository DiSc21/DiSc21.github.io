var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"readme.html","title":"Empty Readme","text":"<p>hello dude hello dude hello dude hello dude hello dude hello dude hello dude hello dude</p> <p>coverage_again</p>"},{"location":"build_zsdoc/doc_docker_run.html","title":"run.sh(1)","text":""},{"location":"build_zsdoc/doc_docker_run.html#name","title":"NAME","text":"<p>run.sh - a shell script</p>"},{"location":"build_zsdoc/doc_docker_run.html#synopsis","title":"SYNOPSIS","text":"<p>Documentation automatically generated with `zsdoc'</p>"},{"location":"build_zsdoc/doc_docker_run.html#functions","title":"FUNCTIONS","text":"<pre><code>buildDocker\ndockerBuildCmd\nintoDocker\nparseInputs\nremoveDocker\nrunCommand\nstartDocker\nstopDocker\n</code></pre>"},{"location":"build_zsdoc/doc_docker_run.html#details","title":"DETAILS","text":""},{"location":"build_zsdoc/doc_docker_run.html#script-body","title":"Script Body","text":"<p>Has 29 line(s). Calls functions:</p> <pre><code>Script-Body\n`-- parseInputs\n</code></pre>"},{"location":"build_zsdoc/doc_docker_run.html#builddocker","title":"buildDocker","text":"<p>Has 1 line(s). Calls functions:</p> <pre><code>buildDocker\n`-- dockerBuildCmd\n</code></pre> <p>Called by:</p> <pre><code>runCommand\n</code></pre>"},{"location":"build_zsdoc/doc_docker_run.html#dockerbuildcmd","title":"dockerBuildCmd","text":"<pre><code># @fn\n</code></pre> <p>Has 1 line(s). Doesn\u2019t call other functions.</p> <p>Called by:</p> <pre><code>buildDocker\n</code></pre>"},{"location":"build_zsdoc/doc_docker_run.html#intodocker","title":"intoDocker","text":"<p>Has 6 line(s). Calls functions:</p> <pre><code>intoDocker\n`-- startDocker\n</code></pre> <p>Not called by script or any function (may be e.g. command_not_found_handle or called indirectly in other way).</p>"},{"location":"build_zsdoc/doc_docker_run.html#parseinputs","title":"parseInputs","text":"<p>Has 20 line(s). Doesn\u2019t call other functions.</p> <p>Called by:</p> <pre><code>Script-Body\n</code></pre>"},{"location":"build_zsdoc/doc_docker_run.html#removedocker","title":"removeDocker","text":"<p>Has 6 line(s). Doesn\u2019t call other functions.</p> <p>Not called by script or any function (may be e.g. command_not_found_handle or called indirectly in other way).</p>"},{"location":"build_zsdoc/doc_docker_run.html#runcommand","title":"runCommand","text":"<p>Has 9 line(s). Calls functions:</p> <pre><code>runCommand\n|-- buildDocker\n|\u00a0\u00a0 `-- dockerBuildCmd\n`-- startDocker\n</code></pre> <p>Not called by script or any function (may be e.g. command_not_found_handle or called indirectly in other way).</p>"},{"location":"build_zsdoc/doc_docker_run.html#startdocker","title":"startDocker","text":"<p>Has 14 line(s). Doesn\u2019t call other functions.</p> <p>Called by:</p> <pre><code>intoDocker\nrunCommand\n</code></pre>"},{"location":"build_zsdoc/doc_docker_run.html#stopdocker","title":"stopDocker","text":"<p>Has 6 line(s). Doesn\u2019t call other functions.</p> <p>Not called by script or any function (may be e.g. command_not_found_handle or called indirectly in other way).</p>"},{"location":"build_zsdoc/doc_navi_men.html","title":"navi_men.sh(1)","text":""},{"location":"build_zsdoc/doc_navi_men.html#name","title":"NAME","text":"<p>navi_men.sh - a shell script</p>"},{"location":"build_zsdoc/doc_navi_men.html#synopsis","title":"SYNOPSIS","text":"<p>Documentation automatically generated with `zsdoc'</p>"},{"location":"build_zsdoc/doc_navi_men.html#functions","title":"FUNCTIONS","text":"<pre><code>createInputData\ncreateMenuItems\ncreateOptionalMenuItems\ndrawMenu\ngetAndCheckStringByKey\ngetJsonType\ngetKeysByNode\ngetNodeAsString\ngetUserInput\nhasNode\nnavi_men\nreadViewCmds\n</code></pre>"},{"location":"build_zsdoc/doc_navi_men.html#details","title":"DETAILS","text":""},{"location":"build_zsdoc/doc_navi_men.html#script-body","title":"Script Body","text":"<p>Has 43 line(s). Calls functions:</p> <pre><code>Script-Body\n`-- navi_men\n    |-- createInputData\n    |-- createMenuItems\n    |-- createOptionalMenuItems\n    |\u00a0\u00a0 `-- getKeysByNode\n    |\u00a0\u00a0     `-- getJsonType\n    |\u00a0\u00a0         `-- hasNode\n    |-- drawMenu\n    |-- getAndCheckStringByKey\n    |\u00a0\u00a0 `-- getNodeAsString\n    |\u00a0\u00a0     `-- getJsonType\n    |\u00a0\u00a0         `-- hasNode\n    |-- getKeysByNode\n    |\u00a0\u00a0 `-- getJsonType\n    |\u00a0\u00a0     `-- hasNode\n    |-- getUserInput\n    `-- readViewCmds\n</code></pre>"},{"location":"build_zsdoc/doc_navi_men.html#createinputdata","title":"createInputData","text":"<pre><code># @fn\n#\n# @brief parses configuration json and assembles a vector of string pairs (data, name)\n#\n# @param1[in] config_json: file name of the json config\n# @param2[out] nria_create_input_data: name-reference to \"return\" parameter\n#\n# @return non\n</code></pre> <p>Has 11 line(s). Doesn\u2019t call other functions.</p> <p>Uses feature(s): read</p> <p>Called by:</p> <pre><code>navi_men\n</code></pre>"},{"location":"build_zsdoc/doc_navi_men.html#createmenuitems","title":"createMenuItems","text":"<pre><code># @fn\n#\n# @brief create vector of menu options printed in selection menu\n#\n# @param1[in] config_json: file name of the json config\n# @param2[in] nraa_get_user_input_menu_items: name-reference for menu items\n# @param3[in] nraa_get_user_input_menu_opts: name-reference for menu options\n#\n# @param4[out] nraa_create_menu_items_return: name-reference for user selection\n#\n# @description: The option strings are assembled column wise in nested for loops to\n# ensure a nicely aligned menu. Hence, the outer for loop takes each column command and\n# evaluates the command for the current column in the first inner for loop which also\n# tracks the widest entry. The second inner loop then just fills the elements of the\n# freshly created options-array with spaces to uniform sizes.\n</code></pre> <p>Has 48 line(s). Doesn\u2019t call other functions.</p> <p>Uses feature(s): eval</p> <p>Called by:</p> <pre><code>navi_men\n</code></pre>"},{"location":"build_zsdoc/doc_navi_men.html#createoptionalmenuitems","title":"createOptionalMenuItems","text":"<pre><code># @fn\n#\n# @brief create vector of optional menu items\n#\n# @param1[in]: configuration JSON\n# @param2[in]: currently active mode\n#\n# @param3[out]: associative array to assemble with optional options\n</code></pre> <p>Has 25 line(s). Calls functions:</p> <pre><code>createOptionalMenuItems\n`-- getKeysByNode\n    `-- getJsonType\n        `-- hasNode\n</code></pre> <p>Called by:</p> <pre><code>navi_men\n</code></pre>"},{"location":"build_zsdoc/doc_navi_men.html#drawmenu","title":"drawMenu","text":"<pre><code># @fn\n#\n# @brief Draws the menu.\n#\n# @param1[in] nraa_draw_menu_items: name-reference for menu items\n# @param2[in] nraa_draw_menu_opts: name-reference for menu options\n</code></pre> <p>Has 18 line(s). Doesn\u2019t call other functions.</p> <p>Called by:</p> <pre><code>navi_men\n</code></pre>"},{"location":"build_zsdoc/doc_navi_men.html#getandcheckstringbykey","title":"getAndCheckStringByKey","text":"<pre><code># @fn\n#\n# @brief read and check validity if default values are given and use first element if not.\n#\n# @param1[in] config_json: file name of the json config\n# @param2[in] json_key: the name of the node if want \"evaluated\"\n# @param3[in] nrai_get_and_check_value_by_key_valid_values: list of valid default values\n# @param4[out] nrai_get_keys_by_node_return: string with parsed keys\n#\n# @return default value either user defined or just first element in list\n</code></pre> <p>Has 31 line(s). Calls functions:</p> <pre><code>getAndCheckStringByKey\n`-- getNodeAsString\n    `-- getJsonType\n        `-- hasNode\n</code></pre> <p>Called by:</p> <pre><code>navi_men\n</code></pre>"},{"location":"build_zsdoc/doc_navi_men.html#getjsontype","title":"getJsonType","text":"<pre><code># @fn\n#\n# @brief get type of json node\n#\n# @param1[in] config_json: file name of the json config\n# @param2[in] node_name: the json node/field to parse\n# @param3[out] nrstr_get_json_type_return: string describing type of the requested node\n#\n# @throws ERR_WRONG_NUM_OF_INPUTS: for wrong number of arguments\n# @throws ERR_FILE_NOT_FOUND (via hasNode): if config json not found\n# @throws ERR_JSON_NODE_NOT_FOUND: if no json-node matching param2 is found\n</code></pre> <p>Has 17 line(s). Calls functions:</p> <pre><code>getJsonType\n`-- hasNode\n</code></pre> <p>Called by:</p> <pre><code>getKeysByNode\ngetNodeAsString\n</code></pre>"},{"location":"build_zsdoc/doc_navi_men.html#getkeysbynode","title":"getKeysByNode","text":"<pre><code># @fn\n#\n# @brief read configuration fields\n#\n# @note only json-objects allowed.\n#\n# @param1[in] config_json: file name of the json config\n# @param2[in] node_name: the json node/field to parse\n# @param3[out] nrai_get_keys_by_node_return: string with parsed keys\n#\n# @throws ERR_WRONG_NUM_OF_INPUTS: for wrong number of arguments\n# @throws ERR_FILE_NOT_FOUND (via getJsonType): if config json not found\n# @throws ERR_JSON_NODE_NOT_FOUND (via getJsonType): if no json-node matching param2 is found\n# @throws ERR_JSON_NODE_WRONG_TYPE: if json-node is not a json-object\n</code></pre> <p>Has 15 line(s). Calls functions:</p> <pre><code>getKeysByNode\n`-- getJsonType\n    `-- hasNode\n</code></pre> <p>Uses feature(s): read</p> <p>Called by:</p> <pre><code>createOptionalMenuItems\nnavi_men\n</code></pre>"},{"location":"build_zsdoc/doc_navi_men.html#getnodeasstring","title":"getNodeAsString","text":"<pre><code># @fn\n#\n# @brief read string/number/boolean-node as string and throw error for other json-node-types\n#\n# @param1[in] config_json: file name of the json config\n# @param2[in] node_name: the name of the node if want \"evaluated\"\n# @param3[out] nrstr_get_value_by_key_return: string with parsed keys\n#\n# @throws ERR_WRONG_NUM_OF_INPUTS: for wrong number of arguments\n# @throws ERR_FILE_NOT_FOUND (via getJsonType): if config json not found\n# @throws ERR_JSON_NODE_NOT_FOUND (via getJsonType): if no json-node matching param2 is found\n# @throws ERR_JSON_NODE_WRONG_TYPE: if json-node is not a json-object\n</code></pre> <p>Has 17 line(s). Calls functions:</p> <pre><code>getNodeAsString\n`-- getJsonType\n    `-- hasNode\n</code></pre> <p>Called by:</p> <pre><code>getAndCheckStringByKey\n</code></pre>"},{"location":"build_zsdoc/doc_navi_men.html#getuserinput","title":"getUserInput","text":"<pre><code># @fn\n#\n# @brief get user input the menu.\n#\n# @param1[in] nraa_get_user_input_menu_items: name-reference for menu items\n# @param2[in] nraa_get_user_input_menu_opts: name-reference for menu options\n#\n# @param3[out] string_get_user_input_return: name-reference for user selection\n</code></pre> <p>Has 23 line(s). Doesn\u2019t call other functions.</p> <p>Uses feature(s): read</p> <p>Called by:</p> <pre><code>navi_men\n</code></pre>"},{"location":"build_zsdoc/doc_navi_men.html#hasnode","title":"hasNode","text":"<pre><code># @fn\n#\n# @brief check if a json node exists\n#\n# @param1[in] config_json: file name of the json config\n# @param2[in] node_name: the json node/field to parse\n# @param3[out] nr_has_node_return: boolean return\n#\n# @throws ERR_WRONG_NUM_OF_INPUTS: for wrong number of arguments\n# @throws ERR_FILE_NOT_FOUND: if config json not found\n#\n# @return true or falls via echo\n</code></pre> <p>Has 35 line(s). Doesn\u2019t call other functions.</p> <p>Uses feature(s): read</p> <p>Called by:</p> <pre><code>getJsonType\n</code></pre>"},{"location":"build_zsdoc/doc_navi_men.html#navi_men","title":"navi_men","text":"<pre><code># @fn\n#\n# @brief .\n#\n# @param:\n</code></pre> <p>Has 31 line(s). Calls functions:</p> <pre><code>navi_men\n|-- createInputData\n|-- createMenuItems\n|-- createOptionalMenuItems\n|\u00a0\u00a0 `-- getKeysByNode\n|\u00a0\u00a0     `-- getJsonType\n|\u00a0\u00a0         `-- hasNode\n|-- drawMenu\n|-- getAndCheckStringByKey\n|\u00a0\u00a0 `-- getNodeAsString\n|\u00a0\u00a0     `-- getJsonType\n|\u00a0\u00a0         `-- hasNode\n|-- getKeysByNode\n|\u00a0\u00a0 `-- getJsonType\n|\u00a0\u00a0     `-- hasNode\n|-- getUserInput\n`-- readViewCmds\n</code></pre> <p>Called by:</p> <pre><code>Script-Body\n</code></pre>"},{"location":"build_zsdoc/doc_navi_men.html#readviewcmds","title":"readViewCmds","text":"<pre><code># @fn\n#\n# @brief reads view commands\n#\n# @param1[in] config_json: file name of the json config\n# @param2[in] json_view: the currently active view\n</code></pre> <p>Has 17 line(s). Doesn\u2019t call other functions.</p> <p>Uses feature(s): read</p> <p>Called by:</p> <pre><code>navi_men\n</code></pre>"}]}