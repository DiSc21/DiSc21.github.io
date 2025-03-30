

set -o errexit
set -o pipefail
set -o nounset

if [ -z "${NAVI_MEN_CORE_DATA_INCLUDED+who_cares}" ]
then
  readonly NAVI_MEN_CORE_DATA_INCLUDED=yes

  NMCC_SCRIPT_PATH=$( cd -- "$(readlink -e "$( dirname -- "${BASH_SOURCE[0]}" )" )" &> /dev/null && pwd )
  readonly NMCC_SCRIPT_PATH
  source "${NMCC_SCRIPT_PATH}/navi_men.conf"
  source "${NMCC_SCRIPT_PATH}/navi_men_aux_array.bash"
  source "${NMCC_SCRIPT_PATH}/navi_men_aux_jq.bash"
fi
