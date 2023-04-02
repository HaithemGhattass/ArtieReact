file(REMOVE_RECURSE
  "../../lib/libtegra_hal.a"
  "../../lib/libtegra_hal.pdb"
)

# Per-language clean rules from dependency scanning.
foreach(lang CXX)
  include(CMakeFiles/tegra_hal.dir/cmake_clean_${lang}.cmake OPTIONAL)
endforeach()
