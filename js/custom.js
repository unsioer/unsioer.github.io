const converter = OpenCC.Converter({ from: 'tw', to: 'cn' });
const rootNode = document.documentElement;
const HTMLConvertHandler = OpenCC.HTMLConverter(converter, rootNode, 'zh-TW', 'zh-Hans');

function simplifyTextInPage(simplified) {
  if (simplified) {
    HTMLConvertHandler.convert();
    $('#btn-simplify').addClass('simplified');
  } else {
    HTMLConvertHandler.restore();
    $('#btn-simplify').removeClass('simplified');
  }
}

function initializeChineseConversion() {
  var simplified = +$.cookie('simplified');
  if (!simplified) { $('#btn-simplify')[0].innerHTML = "繁"; }
  else { $('#btn-simplify')[0].innerHTML = "简"; }

  simplifyTextInPage(simplified);

  $('#btn-simplify').click(function () {
    simplified = +!simplified;
    if (!simplified) { $('#btn-simplify')[0].innerHTML = "繁"; }
    else { $('#btn-simplify')[0].innerHTML = "简"; }
    $.cookie('simplified', simplified, { expires: 365, path: '/' });
    simplifyTextInPage(simplified);
    $(this).blur();
  });
}
  

$(document).ready(function() {
  initializeChineseConversion();
});
