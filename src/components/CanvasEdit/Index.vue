<template>
  <div class="editbox">
    <div class="menu" editor-component="menu">
      <!-- <div class="menu-item"> -->

      <!-- </div> -->
      <!-- <div class="menu-divider"></div> -->
      <div class="menu-item">
        <div class="menu-item__undo">
          <i></i>
        </div>
        <div class="menu-item__redo">
          <i></i>
        </div>
        <div class="menu-item__painter" title="格式刷(双击可连续使用)">
          <i></i>
        </div>
        <div class="menu-item__format" title="清除格式">
          <i></i>
        </div>
        <div class="menu-item__font">
          <span class="select" title="字体">微软雅黑</span>
          <div class="options">
            <ul>
              <li data-family="Yahei" style="font-family:'Yahei';">微软雅黑</li>
              <li data-family="宋体" style="font-family:'宋体';">宋体</li>
              <li data-family="黑体" style="font-family:'黑体';">黑体</li>
              <li data-family="仿宋" style="font-family:'仿宋';">仿宋</li>
              <li data-family="楷体" style="font-family:'楷体';">楷体</li>
              <li data-family="等线" style="font-family:'等线';">等线</li>
              <li data-family="华文琥珀" style="font-family:'华文琥珀';">华文琥珀</li>
              <li data-family="华文楷体" style="font-family:'华文楷体';">华文楷体</li>
              <li data-family="华文隶书" style="font-family:'华文隶书';">华文隶书</li>
              <li data-family="华文新魏" style="font-family:'华文新魏';">华文新魏</li>
              <li data-family="华文行楷" style="font-family:'华文行楷';">华文行楷</li>
              <li data-family="华文中宋" style="font-family:'华文中宋';">华文中宋</li>
              <li data-family="华文彩云" style="font-family:'华文彩云';">华文彩云</li>
              <li data-family="Arial" style="font-family:'Arial';">Arial</li>
              <li data-family="Segoe UI" style="font-family:'Segoe UI';">Segoe UI</li>
              <li data-family="Ink Free" style="font-family:'Ink Free';">Ink Free</li>
              <li data-family="Fantasy" style="font-family:'Fantasy';">Fantasy</li>
            </ul>
          </div>
        </div>
        <div class="menu-item__size">
          <span class="select" title="字体">小四</span>
          <div class="options">
            <ul>
              <li data-size="56">初号</li>
              <li data-size="48">小初</li>
              <li data-size="34">一号</li>
              <li data-size="32">小一</li>
              <li data-size="29">二号</li>
              <li data-size="24">小二</li>
              <li data-size="21">三号</li>
              <li data-size="20">小三</li>
              <li data-size="18">四号</li>
              <li data-size="16">小四</li>
              <li data-size="14">五号</li>
              <li data-size="12">小五</li>
              <li data-size="10">六号</li>
              <li data-size="8">小六</li>
              <li data-size="7">七号</li>
              <li data-size="6">八号</li>
            </ul>
          </div>
        </div>
        <div class="menu-item__size-add">
          <i></i>
        </div>
        <div class="menu-item__size-minus">
          <i></i>
        </div>
        <div class="menu-item__bold">
          <i></i>
        </div>
        <div class="menu-item__italic">
          <i></i>
        </div>
        <div class="menu-item__underline">
          <i></i>
        </div>
        <div class="menu-item__strikeout" title="删除线(Ctrl+Shift+X)">
          <i></i>
        </div>
        <div class="menu-item__superscript">
          <i></i>
        </div>
        <div class="menu-item__subscript">
          <i></i>
        </div>
        <div class="menu-item__color" title="字体颜色">
          <i></i>
          <span></span>
          <input type="color" id="color" />
        </div>
        <div class="menu-item__highlight" title="高亮">
          <i></i>
          <span></span>
          <input type="color" id="highlight">
        </div>
        <div class="menu-item__search" data-menu="search">
          <i></i>
        </div>
        <div class="menu-item__search__collapse" data-menu="search">
          <div class="menu-item__search__collapse__search">
            <input type="text" />
            <label class="search-result"></label>
            <div class="arrow-left">
              <i></i>
            </div>
            <div class="arrow-right">
              <i></i>
            </div>
            <span>×</span>
          </div>
          <div class="menu-item__search__collapse__replace">
            <input type="text">
            <button>替换</button>
          </div>
        </div>
        <div class="menu-item__print" data-menu="print">
          <i></i>
        </div>
      </div>
      <!-- <div class="menu-divider"></div> -->
      <div class="menu-item">
        <div class="menu-item__title">
          <i></i>
          <span class="select" title="切换标题">正文</span>
          <div class="options">
            <ul>
              <li style="font-size:16px;">正文</li>
              <li data-level="first" style="font-size:26px;">标题1</li>
              <li data-level="second" style="font-size:24px;">标题2</li>
              <li data-level="third" style="font-size:22px;">标题3</li>
              <li data-level="fourth" style="font-size:20px;">标题4</li>
              <li data-level="fifth" style="font-size:18px;">标题5</li>
              <li data-level="sixth" style="font-size:16px;">标题6</li>
            </ul>
          </div>
        </div>
        <div class="menu-item__left">
          <i></i>
        </div>
        <div class="menu-item__center">
          <i></i>
        </div>
        <div class="menu-item__right">
          <i></i>
        </div>
        <div class="menu-item__alignment">
          <i></i>
        </div>
        <div class="menu-item__row-margin">
          <i title="行间距"></i>
          <div class="options">
            <ul>
              <li data-rowmargin='1'>1</li>
              <li data-rowmargin="1.25">1.25</li>
              <li data-rowmargin="1.5">1.5</li>
              <li data-rowmargin="1.75">1.75</li>
              <li data-rowmargin="2">2</li>
              <li data-rowmargin="2.5">2.5</li>
              <li data-rowmargin="3">3</li>
            </ul>
          </div>
        </div>
        <div class="menu-item__list">
          <i></i>
          <div class="options">
            <ul>
              <li>
                <label>取消列表</label>
              </li>
              <li data-list-type="ol" data-list-style='decimal'>
                <label>有序列表：</label>
                <ol>
                  <li>________</li>
                </ol>
              </li>
              <li data-list-type="ul" data-list-style='disc'>
                <label>实心圆点列表：</label>
                <ul style="list-style-type: disc;">
                  <li>________</li>
                </ul>
              </li>
              <li data-list-type="ul" data-list-style='circle'>
                <label>空心圆点列表：</label>
                <ul style="list-style-type: circle;">
                  <li>________</li>
                </ul>
              </li>
              <li data-list-type="ul" data-list-style='square'>
                <label>空心方块列表：</label>
                <ul style="list-style-type: square;">
                  <li>________</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="menu-item__table">
          <i title="表格"></i>
        </div>
        <div class="menu-item__table__collapse">
          <div class="table-close">×</div>
          <div class="table-title">
            <span class="table-select">插入</span>
            <span>表格</span>
          </div>
          <div class="table-panel"></div>
        </div>
        <div class="menu-item__image">
          <i title="图片"></i>
          <input type="file" id="image" accept=".png, .jpg, .jpeg, .svg, .gif">
        </div>
        <div class="menu-item__hyperlink">
          <i title="超链接"></i>
        </div>
        <div class="menu-item__separator">
          <i title="分割线"></i>
          <div class="options">
            <ul>
              <li data-separator='0,0'>
                <i></i>
              </li>
              <li data-separator="1,1">
                <i></i>
              </li>
              <li data-separator="3,1">
                <i></i>
              </li>
              <li data-separator="4,4">
                <i></i>
              </li>
              <li data-separator="7,3,3,3">
                <i></i>
              </li>
              <li data-separator="6,2,2,2,2,2">
                <i></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="menu-item__watermark">
          <i title="水印(添加、删除)"></i>
          <div class="options">
            <ul>
              <li data-menu="add">添加水印</li>
              <li data-menu="delete">删除水印</li>
            </ul>
          </div>
        </div>
        <div class="menu-item__codeblock" title="代码块">
          <i></i>
        </div>
        <div class="menu-item__page-break" title="分页符">
          <i></i>
        </div>
        <div class="menu-item__control">
          <i title="控件"></i>
          <div class="options">
            <ul>
              <li data-control='text'>文本</li>
              <li data-control="select">列举</li>
              <li data-control="checkbox">复选框</li>
            </ul>
          </div>
        </div>
        <div class="menu-item__checkbox" title="复选框">
          <i></i>
        </div>
        <div class="menu-item__latex" title="LateX">
          <i></i>
        </div>
        <div class="menu-item__date">
          <i title="日期"></i>
          <div class="options">
            <ul>
              <li data-format="yyyy-MM-dd"></li>
              <li data-format="yyyy-MM-dd hh:mm:ss"></li>
            </ul>
          </div>
        </div>
        <div class="menu-item__block" title="内容块">
          <i></i>
        </div>

      </div>

    </div>

    <div :class="!!editId?'canvas'+editId + ' editor':'editor'" id="canvas"></div>
    <div class="comment" editor-component="comment"></div>
    <div class="footer" editor-component="footer">
      <div>
        <div class="catalog-mode" title="目录">
          <i></i>
        </div>
        <div class="page-mode">
          <i title="页面模式(分页、连页)"></i>
          <div class="options">
            <ul>
              <li data-page-mode="paging" class="active">分页</li>
              <li data-page-mode="continuity">连页</li>
            </ul>
          </div>
        </div>
        <span>可见页码：<span class="page-no-list">1</span></span>
        <span>页面：<span class="page-no">1</span>/<span class="page-size">1</span></span>
        <span>字数：<span class="word-count">0</span></span>
      </div>
      <div class="editor-mode" title="编辑模式(编辑、清洁、只读、表单)">编辑模式</div>
      <div>
        <div class="page-scale-minus" title="缩小(Ctrl+-)">
          <i></i>
        </div>
        <span class="page-scale-percentage" title="显示比例(点击可复原Ctrl+0)">100%</span>
        <div class="page-scale-add" title="放大(Ctrl+=)">
          <i></i>
        </div>
        <div class="paper-size">
          <i title="纸张类型"></i>
          <div class="options">
            <ul>
              <li data-paper-size="794*1123" class="active">A4</li>
              <li data-paper-size="1593*2251">A2</li>
              <li data-paper-size="1125*1593">A3</li>
              <li data-paper-size="565*796">A5</li>
              <li data-paper-size="412*488">5号信封</li>
              <li data-paper-size="450*866">6号信封</li>
              <li data-paper-size="609*862">7号信封</li>
              <li data-paper-size="862*1221">9号信封</li>
              <li data-paper-size="813*1266">法律用纸</li>
              <li data-paper-size="813*1054">信纸</li>
            </ul>
          </div>
        </div>
        <div class="paper-direction">
          <i title="纸张方向"></i>
          <div class="options">
            <ul>
              <li data-paper-direction="vertical" class="active">纵向</li>
              <li data-paper-direction="horizontal">横向</li>
            </ul>
          </div>
        </div>
        <div class="paper-margin" title="页边距">
          <i></i>
        </div>
        <div class="fullscreen" title="全屏显示">
          <i></i>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import {
    windowOnload,
    containerExport,
    recoveryTableFun,
    instanceExport
  } from "../CanvasEdit/main"
  import {
    formatElementList
  } from './editor/utils/element'
  export default {
    components: {},
    props: {
      editId: {
        type: String,
        default: ''
      }

    },
    data() {
      return {
        otherFiileShow: false,
        htmlContent: '',
        editVale: "",
        htmlForm: {
          html: ''
        },
        tempData: {}
      }
    },
    mounted() {
      console.log(this.$props)
      windowOnload(this.editId)
      //let instanceExport = JSON.parse(sessionStorage.getItem("canvas" + this.editId))
      document.addEventListener('keydown', (e) => {
        if (!instanceExport) {
          return
        }
        instanceExport.listener.contentChange()
      })
    },
    methods: {
      //添加字段
      setFileLabel(item) {
        console.log(item)
        let instanceExport = JSON.parse(sessionStorage.getItem("canvas" + this.editId))
        const labelName = item.jghmbZdnr
        const labelZd = item.hxzd
        if (item.srklx == '3') {
          let selectList = []
          if (item.sjylx == 2) {

            item.dictDataList.forEach(el => {
              selectList.push({
                value: el.dataName,
                code: el.dataName
              })
            })
          } else if (item.sjylx == 1) {
            let sjyArr = item.sjy.split("^") || []
            sjyArr.forEach(el => {
              selectList.push({
                value: el,
                code: el
              })
            })
          } else if (item.sjylx == 3) {
            item.sqlResult.forEach(el => {
              selectList.push({
                value: el,
                code: el
              })
            })
          }
          const placeholder = '请选择' + item.jghmbZdnr
          const valueSets = selectList
          const code = item.mrz

          const type = 'select'
          instanceExport.command.executeInsertElementList([{
            type: 'control',
            value: '',
            control: {
              type,
              code,
              labelName,
              labelZd,
              value: '',
              placeholder,
              valueSets: valueSets
            }
          }])
        } else if (item.srklx == '1' || item.srklx == '4' || item.srklx == '5') {
          const placeholder = '请输入' + item.jghmbZdnr
          const value = item.mrz || ''
          const type = 'text'
          instanceExport.command.executeInsertElementList([{
            type: 'control',
            value: '',
            control: {
              type,
              value: value ? [{
                value
              }] : null,
              placeholder,
              labelName,
              labelZd
            }
          }])
        } else if (item.srklx == '2') {
          const dateFormat = 'yyyy-MM-dd hh:mm'
          instanceExport.command.executeInsertElementList([{
            type: 'date',
            value: '',
            dateFormat,
            valueList: [{
              value: '请选择' + item.jghmbZdnr,
              labelName: labelName + '：',
              labelZd: labelZd
            }]
          }])
        }

      },
      //添加表格
      setTabel(htmlArr) {
        let instanceExport = JSON.parse(sessionStorage.getItem("canvas" + this.editId))
        htmlArr.forEach((el, index) => {
          debugger
          instanceExport.command.executeInsertElementList([el])
        })
        //  instanceExport.command.executeInsertTable(1, tableHeadr.length, tableHeadr, tableName, tableBm)

      },
      //获取编辑器内容
      getContent() {
        let instanceExport = JSON.parse(sessionStorage.getItem("canvas" + this.editId))
        console.log(instanceExport.command.getContainer())
        return instanceExport.command.getHTML()
      },
      getContentValue() {
        let instanceExport = JSON.parse(sessionStorage.getItem("canvas" + this.editId))
        return instanceExport.command.getValue()
      },
      //加载选中模板数据
      setTempHtml(html) {
        debugger
        let instanceExport = JSON.parse(sessionStorage.getItem("canvas" + this.editId))
        console.log(instanceExport.command)
        instanceExport.command.executeSetHTML({
          header: [],
          main: [],
          footer: []
        })
        let htmlArr = JSON.parse(html)
        htmlArr.forEach((el, index) => {
          if ((!!el.control && !!el.control.labelName)) {
            el.control.labelName = ''
          }
          if ((el.type == 'date' && el.valueList.length > 0)) {
            el.valueList.forEach(n => {
              n.labelName = ''
            })
          }
          instanceExport.command.executeInsertElementList([el])
        })

      },
    }
  }

</script>
<style scoped>
  .editbox {
    width: 794px;
    height: calc(100% - 80px);
    display: flex;
    position: relative;
    margin: 0 auto;
  }

  .contentHtml {
    width: 595px !important;
    height: 842px !important;
    background: #fff;
  }

  #printHtml {
    width: 100%;
    page-break-after: always;
  }

  .left-edit {
    width: 595px;
    height: 100%;
    display: inline-block;
  }

  #canvas {
    width: 100%;
    height: 100%;
    /* height: calc(100vh - 75px); */
    overflow-y: auto;
  }

  .center-btn {
    width: 500px;
    display: inline-block;
    height: 900px;
    border: 1px solid #ededed;
    background: #fff;
  }

  @media print {

    @page {

      size: 1108px 1600px;

    }

  }

  .ownInput:empty::before {
    content: attr(placeholder);
  }

  >>>.ownInput {
    display: inline-block;
    width: 150px;
    height: 28px;
  }

  >>>tr {
    page-break-inside: avoid;
  }

  .dio {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 99;
    opacity: 0;
  }

</style>
<style scoped lang="scss">
  .menu {
    width: 794px;
    height: 90px;
    display: block;
    top: 148px;
  }

  .menu-item {
    height: 42px;
    padding-left: 20px;
  }

  .footer {
    position: absolute;
    left: 0;
    width: 794px;
  }

  .editor>div {
    margin: 95px auto;
  }

</style>
<style>
  .menu {
    width: 808px;
    height: 90px;
    display: block;
    top: 87px;
  }

  .menu-item {
    height: 42px;
    padding-left: 20px;
  }

  .footer {
    position: absolute;
    left: 0;
    width: 808px;
  }

  .editor>div {
    margin: 95px auto;
  }

</style>
