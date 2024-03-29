let isFrame = false;

function generateBookmarklet() {
  var ifrm = document.createElement('iframe');
  ifrm.setAttribute('src', document.getElementById("code-textarea").value);
  ifrm.style.width = '100%';
  ifrm.style.height = '600px';
  ifrm.id = "iframe"
  document.body.appendChild(ifrm);

  document.getElementById("state").innerHTML = 'State: complete, scroll down';
  document.getElementById("warning").classList.add("center-div");
  
  isFrame = true;
}

function reloadFrame() {
  if (isFrame) {
    try {
      document.getElementById('iframe').contentWindow.location.reload();
    } catch(e) {
      document.getElementById("state").innerHTML = 'State: unknown error, reload & contact support.';
    }
  } else {
    alert(`There is no current iFrame :(`)
  }
}
