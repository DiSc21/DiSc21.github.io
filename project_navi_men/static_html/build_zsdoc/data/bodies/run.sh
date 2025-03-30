

set -o errexit
set -o pipefail
set -o nounset

declare -A FUNCTION_BY_CMD
FUNCTION_BY_CMD["--build"]="buildDocker"
FUNCTION_BY_CMD["--into"]="intoDocker"
FUNCTION_BY_CMD["--start"]="startDocker"
FUNCTION_BY_CMD["--stop"]="stopDocker"
FUNCTION_BY_CMD["--remove"]="removeDocker"
FUNCTION_BY_CMD["--cmd"]="runCommand"
readonly FUNCTION_BY_CMD

tmp_abs_project_path="$(readlink -e "$(dirname "${BASH_SOURCE[0]}")/../")"
readonly tmp_abs_project_path
. "${tmp_abs_project_path}/docker/config.sh"

RUNNING_DOCKER_CONTAINER="$(docker ps --format "{{.Names}}" || echo " " | grep -q "${DOCKER_NAME}")"
echo "Docker name: ${DOCKER_NAME}"
echo "Dockers running: ${RUNNING_DOCKER_CONTAINER}"
readonly RUNNING_DOCKER_CONTAINER
EXISTING_DOCKER_CONTAINER="$(docker ps -a --format "{{.Names}}" || echo " " | grep -q "${DOCKER_NAME}")"
readonly EXISTING_DOCKER_CONTAINER
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]
then
  echo "hello $(id -u)"
  parseInputs "$@"
fi
