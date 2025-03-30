

set -o errexit
set -o pipefail
set -o nounset

NM_SCRIPT_PATH=$( cd -- "$(readlink -e "$( dirname -- "${BASH_SOURCE[0]}" )" )" &> /dev/null && pwd )
readonly NM_SCRIPT_PATH
source "${NM_SCRIPT_PATH}/navi_men.conf"
source "${NM_SCRIPT_PATH}/navi_men_states.conf"
source "${NM_SCRIPT_PATH}/navi_men_aux_array.bash"
source "${NM_SCRIPT_PATH}/navi_men_core_data.bash"
source "${NM_SCRIPT_PATH}/navi_men_state_setter.bash"
source "${NM_SCRIPT_PATH}/navi_men_run.bash"
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  main "$@"
fi
