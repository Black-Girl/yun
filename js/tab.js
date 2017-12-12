function tab(tabs,obj){
    for(var i = 0 ; i < tabs.length;i++){
        tabs[i].index = i;
        tabs[i].onclick = function(ev){
          var ev = ev || event;
          ev.cancelBubble = true;
          ev.stopPropagation();
          for(var j = 0 ; j < obj.length ; j++){
            tabs[j].className = 'tab-list-item';
            obj[j].style.display = 'none';
          }
          this.className = 'tab-list-item cur';
          obj[this.index].style.display = 'block';
          
          
        }
      }

}