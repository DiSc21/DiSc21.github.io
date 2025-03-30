


set -o errexit
set -o pipefail
set -o nounset

if [ -z "${NAVI_MEN_MENU_INCLUDED+who_cares}" ]
then
  readonly NAVI_MEN_MENU_INCLUDED=yes

  NMME_SCRIPT_PATH=$( cd -- "$(readlink -e "$( dirname -- "${BASH_SOURCE[0]}" )" )" &> /dev/null && pwd )
  readonly NMME_SCRIPT_PATH
  source "${NMME_SCRIPT_PATH}/navi_men.conf"
  source "${NMME_SCRIPT_PATH}/navi_men_states.conf"
  source "${NMME_SCRIPT_PATH}/navi_men_aux_array.bash"
  source "${NMME_SCRIPT_PATH}/navi_men_core_data.bash"
fi
