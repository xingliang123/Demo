import { ILang } from '../../interface/i18n/I18n'
//import zhCN from './lang/zh-CN.json'
const zhCN = {
  "contextmenu": {
    "global": {
      "cut": "剪切",
      "copy": "复制",
      "paste": "粘贴",
      "selectAll": "全选",
      "print": "打印"
    },
    "control": {
      "delete": "删除控件"
    },
    "hyperlink": {
      "delete": "删除链接",
      "cancel": "取消链接",
      "edit": "编辑链接"
    },
    "image": {
      "change": "更改图片",
      "saveAs": "另存为图片",
      "textWrap": "文字环绕",
      "textWrapType": {
        "embed": "嵌入型",
        "upDown": "上下型环绕"
      }
    },
    "table": {
      "insertRowCol": "插入行列",
      "insertTopRow": "上方插入1行",
      "insertBottomRow": "下方插入1行",
      "insertLeftCol": "左侧插入1列",
      "insertRightCol": "右侧插入1列",
      "deleteRowCol": "删除行列",
      "deleteRow": "删除1行",
      "deleteCol": "删除1列",
      "deleteTable": "删除整个表格",
      "mergeCell": "合并单元格",
      "mergeCancelCell": "取消合并",
      "verticalAlign": "垂直对齐",
      "verticalAlignTop": "顶端对齐",
      "verticalAlignMiddle": "垂直居中",
      "verticalAlignBottom": "底端对齐",
      "border": "表格边框",
      "borderAll": "所有框线",
      "borderEmpty": "无框线",
      "borderExternal": "外侧框线",
      "borderTd": "单元格边框",
      "borderTdBottom": "下边框",
      "borderTdForward": "正斜线",
      "borderTdBack": "反斜线"
    }
  },
  "datePicker": {
    "now": "此刻",
    "confirm": "确定",
    "return": "返回日期",
    "timeSelect": "时间选择",
    "weeks": {
      "sun": "日",
      "mon": "一",
      "tue": "二",
      "wed": "三",
      "thu": "四",
      "fri": "五",
      "sat": "六"
    },
    "year": "年",
    "month": "月",
    "hour": "时",
    "minute": "分",
    "second": "秒"
  },
  "frame": {
    "header": "页眉",
    "footer": "页脚"
  },
  "pageBreak": {
    "displayName": "分页符"
  }
}
//import en from './lang/en.json'
const en = {
  "contextmenu": {
    "global": {
      "cut": "Cut",
      "copy": "Copy",
      "paste": "Paste",
      "selectAll": "Select all",
      "print": "Print"
    },
    "control": {
      "delete": "Delete control"
    },
    "hyperlink": {
      "delete": "Delete hyperlink",
      "cancel": "Cancel hyperlink",
      "edit": "Edit hyperlink"
    },
    "image": {
      "change": "Change image",
      "saveAs": "Save as image",
      "textWrap": "Text wrap",
      "textWrapType": {
        "embed": "Embed",
        "upDown": "Up down"
      }
    },
    "table": {
      "insertRowCol": "Insert row col",
      "insertTopRow": "Insert top 1 row",
      "insertBottomRow": "Insert bottom 1 row",
      "insertLeftCol": "Insert left 1 col",
      "insertRightCol": "Insert right 1 col",
      "deleteRowCol": "Delete row col",
      "deleteRow": "Delete 1 row",
      "deleteCol": "Delete 1 col",
      "deleteTable": "Delete table",
      "mergeCell": "Merge cell",
      "mergeCancelCell": "Cancel merge cell",
      "verticalAlign": "Vertical align",
      "verticalAlignTop": "Top",
      "verticalAlignMiddle": "Middle",
      "verticalAlignBottom": "Bottom",
      "border": "Table border",
      "borderAll": "All",
      "borderEmpty": "Empty",
      "borderExternal": "External",
      "borderTd": "Table cell border",
      "borderTdBottom": "Bottom",
      "borderTdForward": "forward",
      "borderTdBack": "back"
    }
  },
  "datePicker": {
    "now": "Now",
    "confirm": "Confirm",
    "return": "Return",
    "timeSelect": "Time select",
    "weeks": {
      "sun": "Sun",
      "mon": "Mon",
      "tue": "Tue",
      "wed": "Wed",
      "thu": "Thu",
      "fri": "Fri",
      "sat": "Sat"
    },
    "year": " ",
    "month": " ",
    "hour": "Hour",
    "minute": "Minute",
    "second": "Second"
  },
  "frame": {
    "header": "Header",
    "footer": "Footer"
  },
  "pageBreak": {
    "displayName": "Page Break"
  }
}

import { mergeObject } from '../../utils'
import { DeepPartial } from '../../interface/Common'

export class I18n {
  private langMap: Map<string, ILang> = new Map([
    ['zhCN', zhCN],
    ['en', en]
  ])

  private currentLocale = 'zhCN'

  public registerLangMap(locale: string, lang: DeepPartial<ILang>) {
    const sourceLang = this.langMap.get(locale)
    this.langMap.set(locale, <ILang>mergeObject(sourceLang || zhCN, lang))
  }

  public getLocale(): string {
    return this.currentLocale
  }

  public setLocale(locale: string) {
    this.currentLocale = locale
  }

  public getLang(): ILang {
    return this.langMap.get(this.currentLocale) || zhCN
  }

  public t(path: string): string {
    const keyList = path.split('.')
    let value = ''
    let item = this.getLang()
    for (let k = 0; k < keyList.length; k++) {
      const key = keyList[k]
      const currentValue = Reflect.get(item, key)
      if (currentValue) {
        value = item = currentValue
      } else {
        return ''
      }
    }
    return value
  }
}
