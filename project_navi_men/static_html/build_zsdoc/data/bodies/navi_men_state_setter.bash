

set -o errexit
set -o pipefail
set -o nounset

if [ -z "${NAVI_MEN_STATE_SETTER_INCLUDED+who_cares}" ]
then
  readonly NAVI_MEN_STATE_SETTER_INCLUDED=yes

  NMSS_SCRIPT_PATH=$( cd -- "$(readlink -e "$( dirname -- "${BASH_SOURCE[0]}" )" )" &> /dev/null && pwd )
  readonly NMSS_SCRIPT_PATH
  source "${NMSS_SCRIPT_PATH}/navi_men.conf"
  source "${NMSS_SCRIPT_PATH}/navi_men_states.conf"
  source "${NMSS_SCRIPT_PATH}/navi_men_aux_array.bash"
fi
