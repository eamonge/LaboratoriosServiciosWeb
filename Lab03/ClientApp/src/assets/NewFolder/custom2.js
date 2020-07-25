function LoaderXML() {
  $(document).ready(function () {
    $('#customFile').on('change', function (evt) {
      var txt = document.getElementById('ShowFile');
      var f = evt.target.files[0];
      if (f) {
        var r = new FileReader();
        r.onload = function (e) {
          console.log(e.target.result);
          txt.textContent += e.target.result + '\n\n | \n\n';
        };
        r.readAsText(f);
      } else {
        console.log("failed");
      }
    });
  });
}
