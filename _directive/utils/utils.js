import { h } from "hastscript";

// @todo 暂时先伪装成块内元素
export function renderVoidElement(node) {
  const nodeData = node.data || (node.data = {});
  nodeData.hName = h("span", {}).tagName;
}

export function initAliasMeta(annoAliasMeta, annoName, aliaName, config) {
  if (!annoAliasMeta[aliaName]) {
    annoAliasMeta[aliaName] = {};
  }
  annoAliasMeta[aliaName].attachAnno = annoName;
  annoAliasMeta[aliaName].properties = config
}

export function registerAnno(annoName, annoAlias, node, ancestors, regFn) {
  let aliasAttributes = null;

  if (node.name !== annoName) {
    let isOk = false;
    for (let key in annoAlias) {
      if (node.name === key && annoAlias[key].attachAnno === annoName) {
        isOk = true;
        aliasAttributes = annoAlias[key]['properties'];
        break;
      }
    }

    if (!isOk) {
      return;
    }
  }

  if (aliasAttributes) {
    // @fix 小心aliasAttributes被覆盖
    node.attributes = Object.assign({}, aliasAttributes, node.attributes || {});
  }

  regFn(node, ancestors);
}
