file(REMOVE_RECURSE
  "../../../../lib/libcarotene.a"
  "../../../../lib/libcarotene.pdb"
)

# Per-language clean rules from dependency scanning.
foreach(lang CXX)
  include(CMakeFiles/carotene.dir/cmake_clean_${lang}.cmake OPTIONAL)
endforeach()
