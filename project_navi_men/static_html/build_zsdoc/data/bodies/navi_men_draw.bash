

set -o errexit
set -o pipefail
set -o nounset

if [ -z "${NAVI_MEN_DRAW_INCLUDED+who_cares}" ]
then
  readonly NAVI_MEN_DRAW_INCLUDED=yes

  NMDR_SCRIPT_PATH=$( cd -- "$(readlink -e "$( dirname -- "${BASH_SOURCE[0]}" )" )" &> /dev/null && pwd )
  readonly NMDR_SCRIPT_PATH
  source "${NMDR_SCRIPT_PATH}/navi_men.conf"
  source "${NMDR_SCRIPT_PATH}/navi_men_states.conf"
  source "${NMDR_SCRIPT_PATH}/navi_men_aux_array.bash"
  source "${NMDR_SCRIPT_PATH}/navi_men_core_data.bash"
fi
