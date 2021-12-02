function Binary_search() {
    c_delay = 0;
    for (var j = 0; j < array_size; j++) 
    {
      var key = div_sizes[j];
      var i = j - 1;
      while (i >= 0 && div_sizes[i] > key) 
      {
        div_sizes[i + 1] = div_sizes[i];
        i -= 1;
      }
      div_sizes[i + 1] = key;
      for (var t = 0; t < j; t++) 
      {
        div_update_fast(divs[t], div_sizes[t], "#FF9E00");
      }
    }
    div_update_fast(divs[j - 1], div_sizes[j - 1], "#FF9E00");
    var low = 0,high = array_size - 1,found_target = 0;
    while (low < high)
    {
      var mid = Math.floor((low+high)/2);
      if (div_sizes[mid] === search_target)
       {
        found_target = mid;
        div_update(divs[mid], div_sizes[mid], "green");
        break;
      } 
      else if (div_sizes[mid] > search_target) 
      {
        high = mid - 1;
        div_update(divs[mid], div_sizes[mid], "red");
      } 
      else if (div_sizes[mid] < search_target)
       {
        low = mid + 1;
        div_update(divs[mid], div_sizes[mid], "red");
      }
    }
    enable_buttons();
  }