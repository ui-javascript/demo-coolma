import { getNextNodeByLatestAncestor, getNextNodeByAncestor, renderVoidElement, getPrevNodeByAncestors, getPrevNodeByLatestAncestor, containNextNode2Section } from "../../utils/utils";
import { h } from "hastscript";
import { trim } from "lodash";
import { toHast } from "mdast-util-to-hast";

export default {
  namespace: "section",
  
  realAnnoRequiredArgNames: null, // 不需要参数
  realAnnoExtArgNames: ['tagName'], // 补充字段, 数组形式, 非必填
  realAnnoShortcutAttrs: null,

  // 参数转换配置
  autoConvertArg2Attr: true,
  needConvertPrevNode2Attr: false, // 默认false, 配置true会优先向前读
  needConvertNextNode2Attr: false, 

  beforeRender: {
    // prevNode2Attr: (node, ancestors, realAnnoRequiredArgNames, prevNode) => {
    //   node.attributes[realAnnoRequiredArgNames[0]] = trim(prevNode.value)
    //   if (node.name === "sub" || node.name === "other") {
    //     renderVoidElement(node) // 取值结束不再需要渲染后置节点
    //   }
    // },
  },
  
  // @advice node.args映射至node.attributes的工作 请在beforeRender的函数内完成
  render: (node, ancestors, realAnnoRequiredArgNames, realAnnoShortcutAttrs, loseAttrs)  => {
    
    if (ancestors.length < 2) {
      return 
    }

    const parentNode = ancestors[ancestors.length - 1];
    const grandNode = ancestors[ancestors.length - 2];
    const hasEnoughChildren = parentNode.children && parentNode.children.length > 1; // 除指令外至少还要有标题
    if (!hasEnoughChildren) {
      return
    }


    const spliceIdxs = containNextNode2Section(node, parentNode, grandNode)

    if (!spliceIdxs) { // 不能有效切割, 提前结束
      return 
    }

    // if (node.name === 'sub' || node.name === 'other') {
    //   spliceIdxs.beginIdx--
    // }


    // console.log("切割下来的块")
 
    const spliceChildren = grandNode.children.splice(spliceIdxs.beginIdx+1, spliceIdxs.endIdx-spliceIdxs.beginIdx)
    grandNode.children.splice(spliceIdxs.beginIdx+1, 0, {
      children: [],
      type: "paragraph"
    })

    // console.log(spliceChildren)
    // console.log(grandNode.children)

    
    // const hast = toHast({
    //   children: spliceChildren,
    //   type: "paragraph"
    // }, {allowDangerousHtml: true})

    const data = grandNode.children[spliceIdxs.beginIdx+1].data || (grandNode.children[spliceIdxs.beginIdx+1].data = {})
    data.hName = node.attributes.tagName || 'article'; // 卡片
    data.hProperties = {
      ...node.attributes
    };
    // data.hChildren = hast.children;
    grandNode.children[spliceIdxs.beginIdx+1].children = spliceChildren

    if (node.name === "sub" || node.name === "other") {
      const summaryHast = h(`summary`, {
        // role:"button",
        ...node.attributes
      }, "详情");
      const summaryData = {}
      summaryData.hName = summaryHast.tagName;
      summaryData.hProperties = summaryHast.properties;
      summaryData.hChildren = summaryHast.children;

      grandNode.children[spliceIdxs.beginIdx+1].children.unshift({
        data: summaryData,
        type: 'text',
      })
    }
    


    // console.log(grandNode.children)

  },
};
