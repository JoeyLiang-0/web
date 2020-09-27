
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

    var activeMenu = document.getElementById('menu.' + activeMenuName);
    if (activeMenu != null)
      activeMenu.classList.add('active');
}

function UpdateImageAndFitWidth(targetImgId, imgSrc)
{
    var targetImg = document.getElementById(targetImgId);
    targetImg.src = imgSrc;
    targetImg.style.width = '' + targetImg.naturalWidth + 'px';
}

