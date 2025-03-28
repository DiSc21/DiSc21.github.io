

set -o errexit
set -o pipefail
set -o nounset
readonly CLR_RED='\033[0;31m'
readonly CLR_NC='\033[0m'
readonly ERROR="${CLR_RED}Error${CLR_NC}"
readonly ERR_WRONG_NUM_OF_INPUTS=10
readonly ERR_FILE_NOT_FOUND=20
readonly ERR_JSON_NODE_NOT_FOUND=30
readonly ERR_JSON_NODE_WRONG_TYPE=31
readonly JSON_KEY_SHARED_OBJECT_METADATA="metadata"

readonly JSON_KEY_METADATA_ATTR_ASCII_ART="ascii_art"
readonly JSON_KEY_METADATA_ATTR_DESCRIPTION="description"
readonly JSON_KEY_METADATA_ATTR_CAPTION="caption"
readonly JSON_KEY_METADATA_ATTR_NAME="name"
readonly JSON_KEY_CORE_OBJECT_CONFIG="config"

readonly JSON_KEY_CONFIG_ATTR_LIST="list"
readonly JSON_KEY_CONFIG_ATTR_DEFAULT_MODE="default_mode"
readonly JSON_KEY_CONFIG_ATTR_DEFAULT_VIEW="default_view"
readonly JSON_KEY_CONFIG_ATTR_DEFAULT_VIEW_CMD_PRE="default_view_cmd_pre"
readonly JSON_KEY_CONFIG_ATTR_DEFAULT_VIEW_CMD_POST="default_view_cmd_post"

readonly VALID_CONFIG_ATTRIBUTES=(   "${JSON_KEY_CONFIG_ATTR_LIST}"   "${JSON_KEY_CONFIG_ATTR_DEFAULT_MODE}"   "${JSON_KEY_CONFIG_ATTR_DEFAULT_VIEW}"   "${JSON_KEY_CONFIG_ATTR_DEFAULT_VIEW_CMD_PRE}"   "${JSON_KEY_CONFIG_ATTR_DEFAULT_VIEW_CMD_POST}" )
readonly JSON_KEY_CORE_OBJECT_MODES="modes"

readonly JSON_KEY_MODE_ATTR_CMD="cmd"
readonly JSON_KEY_MODE_ATTR_CONTINUE="continue"
readonly JSON_KEY_MODE_ATTR_ENABLE_ALL="enable_all"
readonly JSON_KEY_MODE_ATTR_LIST_FILTER="list_filter"
readonly JSON_KEY_MODE_ATTR_REFRESH="refresh_on_call"

readonly VALID_MODE_OBJECT_ATTRIBUTES=(   "${JSON_KEY_MODE_ATTR_CMD}"   "${JSON_KEY_MODE_ATTR_CONTINUE}"   "${JSON_KEY_MODE_ATTR_ENABLE_ALL}"   "${JSON_KEY_MODE_ATTR_REFRESH}"   "${JSON_KEY_MODE_ATTR_LIST_FILTER}" )
readonly JSON_KEY_CORE_OBJECT_VIEWS="views"
readonly ESSENTIAL_JSON_CORE_OBJECTS=(   "${JSON_KEY_CORE_OBJECT_CONFIG}"   "${JSON_KEY_CORE_OBJECT_VIEWS}"   "${JSON_KEY_CORE_OBJECT_MODES}" )

readonly VALID_METADATA_ATTRIBUTES=( "description" "name" "enable_all" "list_filter" "refresh_on_call" )
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  navi_men "$@"
fi
