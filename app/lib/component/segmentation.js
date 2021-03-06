const getJsData = require('../util/getJsData');
const getBundle = require('../util/getBundle');

const bomJsFiles = [
  './app/lib/mob/js/jquery-min',
  './app/lib/mob/js/polyk',
  './app/lib/mob/js/crypto-js',
  './app/lib/mob/js/rectlib',
  './app/lib/mob/js/bomlib'
];

module.exports = async function(
  driver,
  {
    // 参考：http://bom.ciens.ucv.ve/old_site/
    pac = 10, // pAC represents the granularity. It is an integer value between 0 and 10. 0 small blocks while 10 represent bigger blocks
    pdc = 50, // pDC represents the maximum separation allowed between blocks
    returnType = 'wprima',
    showBox = true
  } = {}
) {
  // 把文档中第三方的js文件读进来，转成字符串
  const jsData = await getJsData(bomJsFiles, 'bomJsFiles');
  const bundle = getBundle('./app/lib/util/domTree.js', 'domTree');

  return await driver.executeScript(
    function() {
      // 这部分代码是在浏览器里面执行的，只能通过executeScript传递参数进去执行
      var data = arguments[0];
      try {
        // 执行字符串形式的js代码
        eval(data.jsData);
        eval(data.bundle);
      } catch (e) {
        console.log(e);
      }
      var domTree = require('domTree');
      // 执行分片
      startSegmentation(
        window,
        data.pac,
        data.pdc,
        data.returnType,
        data.showBox
      );
      let node = domTree.createTree(document.body);
      return node;
    },
    {
      jsData,
      bundle,
      pac,
      pdc,
      returnType,
      showBox
    }
  );
};
