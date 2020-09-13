
function SetActiveMenu()
{
    var activeMenuName = 'home';

    var pathArray = window.location.pathname.split('/');
    if (pathArray.length > 1) // possible length <= 1 ??
    {
      // - may be empty, if pathname == '/'
      // - may be a file, check if it is something with a '.'
      //   so, DO NOT use a top folder with '.' in the name
      if (pathArray[1] != '' && pathArray[1].indexOf('.') < 0)
      {
        activeMenuName = pathArray[1];
      }
    }

    document.getElementById('menu.' + activeMenuName).classList.add('active');

    if (window.location.hostname == '127.0.0.1')
    {
      document.getElementById('TestOnly').style.display = "inline-block";
    }
}

function UpdateImageAndFitWidth(targetImgId, imgSrc)
{
    var targetImg = document.getElementById(targetImgId);
    targetImg.src = imgSrc;
    targetImg.style.width = '100%';
    targetImg.style.maxWidth = '' + targetImg.naturalWidth + 'px';
}

