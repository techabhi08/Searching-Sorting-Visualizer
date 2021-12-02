function Linear_search() {
    c_delay = 0;
    var find_target = [];
    for (var i = 0; i < array_size; i++)
     {
      div_update(divs[i], div_sizes[i], "red");
      if (div_sizes[i] === search_target) 
      {
        find_target.push(i);
        div_update(divs[i], div_sizes[i], "green");
      }
    }
    for (var i = 0,j=0; i < array_size; i++) 
    {
      if (find_target[j] === i)
      {
        div_update(divs[i], div_sizes[i], "green");
        j++;
        continue;
      }
      div_update(divs[i], div_sizes[i], "#FF9E00");
    }
    enable_buttons();
  }