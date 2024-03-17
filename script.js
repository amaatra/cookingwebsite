function toggleimgoneshow() {
    var myImg = document.getElementById('stepone');

    var displaySetting = myImg.style.display;

    var clockButton = document.getElementById('steponebtn');

    if (displaySetting == 'block') {
      myImg.style.display = 'none';
      document.getElementById("steponebtn").classList.remove('fa-chevron-up');
      document.getElementById("steponebtn").classList.add('fa-chevron-down');
    }
    else {
      myImg.style.display = 'block';
      document.getElementById("steponebtn").classList.remove('fa-chevron-down');
      document.getElementById("steponebtn").classList.add('fa-chevron-up');
    }
  }

  function toggleimgtwoshow() {
    var myImg = document.getElementById('steptwo');

    var displaySetting = myImg.style.display;

    var clockButton = document.getElementById('steptwobtn');

    if (displaySetting == 'block') {
      myImg.style.display = 'none';
      document.getElementById("steptwobtn").classList.remove('fa-chevron-up');
      document.getElementById("steptwobtn").classList.add('fa-chevron-down');
    }
    else {
      myImg.style.display = 'block';
      document.getElementById("steptwobtn").classList.remove('fa-chevron-down');
      document.getElementById("steptwobtn").classList.add('fa-chevron-up');
    }
  }

  function toggleimgthreeshow() {
    var myImg = document.getElementById('stepthree');

    var displaySetting = myImg.style.display;

    var clockButton = document.getElementById('stepthreebtn');

    if (displaySetting == 'block') {
      myImg.style.display = 'none';
      document.getElementById("stepthreebtn").classList.remove('fa-chevron-up');
      document.getElementById("stepthreebtn").classList.add('fa-chevron-down');
    }
    else {
      myImg.style.display = 'block';
      document.getElementById("stepthreebtn").classList.remove('fa-chevron-down');
      document.getElementById("stepthreebtn").classList.add('fa-chevron-up');
    }
  }

  function toggleimgfourshow() {
    var myImg = document.getElementById('stepfour');

    var displaySetting = myImg.style.display;

    var clockButton = document.getElementById('stepfourbtn');

    if (displaySetting == 'block') {
      myImg.style.display = 'none';
      document.getElementById("stepfourbtn").classList.remove('fa-chevron-up');
      document.getElementById("stepfourbtn").classList.add('fa-chevron-down');
    }
    else {
      myImg.style.display = 'block';
      document.getElementById("stepfourbtn").classList.remove('fa-chevron-down');
      document.getElementById("stepfourbtn").classList.add('fa-chevron-up');
    }
  }