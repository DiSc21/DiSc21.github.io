

set -o errexit
set -o pipefail
set -o nounset

if [ -z "${NAVI_MEN_AUX_ARRAY_INCLUDED+who_cares}" ]
then
  readonly NAVI_MEN_AUX_ARRAY_INCLUDED=yes

  NMAA_SCRIPT_PATH=$( cd -- "$(readlink -e "$( dirname -- "${BASH_SOURCE[0]}" )" )" &> /dev/null && pwd )
  readonly NMAA_SCRIPT_PATH
  source "${NMAA_SCRIPT_PATH}/navi_men.conf"
fi
