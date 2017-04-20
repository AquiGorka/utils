# formatted grep
# params: search query (regex) & path to look in (folder includes subfolders)
# returns: stdout formatted search results similar to sublime text's find all
# file name (# matches in file) + context with hit
# usage: sF "regex" path_to_a_dir

sF() {
  mySearch=$1
  myPath=$2

  grep -lr $mySearch $myPath | while read file
  do
    echo "\n"
    echo -e "\e[34m$file ($(grep -c $mySearch $file)):\e[0m"
    grep -nh -A3 -B1 --color=always $mySearch $file
  done
}
