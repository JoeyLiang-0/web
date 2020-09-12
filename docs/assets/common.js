
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

function GenerateTopNavigationBar()
{
  /*
    document.write(`
      <div class="topNavBar">
        <a id="home" href="/">Home</a>
        <a id="blog" href="/blog/index.html">Blog</a>
        <a id="contact" href="/contact/index.html">Contact</a>

        <div style="float: right; margin:5pt; font-size:16pt; color: gray;">
          Joey Liang
        </div>
      </div>`);

      SetActiveMenu();
  */
}

