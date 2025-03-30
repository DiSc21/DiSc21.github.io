

set -o errexit
set -o pipefail
set -o nounset

if [ -z "${NAVI_MEN_RUN_INCLUDED+who_cares}" ]
then
  readonly NAVI_MEN_RUN_INCLUDED=yes

  NMRU_SCRIPT_PATH=$( cd -- "$(readlink -e "$( dirname -- "${BASH_SOURCE[0]}" )" )" &> /dev/null && pwd )
  readonly NMRU_SCRIPT_PATH
  source "${NMRU_SCRIPT_PATH}/navi_men.conf"
  source "${NMRU_SCRIPT_PATH}/navi_men_states.conf"
  source "${NMRU_SCRIPT_PATH}/navi_men_aux_array.bash"
  source "${NMRU_SCRIPT_PATH}/navi_men_core_data.bash"
  source "${NMRU_SCRIPT_PATH}/navi_men_state_setter.bash"
  source "${NMRU_SCRIPT_PATH}/navi_men_menu.bash"
  source "${NMRU_SCRIPT_PATH}/navi_men_draw.bash"
fi
