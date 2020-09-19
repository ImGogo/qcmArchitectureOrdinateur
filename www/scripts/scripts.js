function openTab(e, tabName) {
  var tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  e.currentTarget.className += " active";
  document.getElementById(tabName.concat("Btn")).focus();
  document.getElementById(tabName.concat("Btn")).click();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function show(id) {
    var vis = document.getElementById(id).style.visibility;
    if(vis != 'visible') {
      document.getElementById(id).style.transition = '0.5s';
      document.getElementById(id).style.visibility = 'visible';
      document.getElementById(id).style.marginLeft = '0';
      document.getElementById(id).style.zIndex = '2';
    }
}

function hide(id) {
  document.getElementById(id).style.transition = 'none';
  document.getElementById(id).style.visibility = 'hidden';
  document.getElementById(id).style.marginLeft = '-42%';
  document.getElementById(id).style.zIndex = '1';
}

function initPage() {
    document.getElementById("hmeBtn").focus();
    document.getElementById("hmeBtn").click();
}

function hidePopup() {
    document.getElementById("popupContainer").style.visibility = "hidden";
    initPage();
}

function setClassLeftMargin(cls, mar) {
  var all = document.getElementsByClassName(cls);
  for (var i = 0; i < all.length; i++) {
    all[i].style.marginLeft = mar;
  }
}


function toggleSidebar() {
  if (mini) {
    document.getElementById("mySidebar").style.width = "240px";
    setClassLeftMargin("tabcontent", "273px");
    
    this.mini = false;
  } else {
    document.getElementById("mySidebar").style.width = "66px";
    setClassLeftMargin("tabcontent", "100px")
    this.mini = true;
  }
}
