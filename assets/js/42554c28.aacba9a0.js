"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[13890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return n?o.createElement(f,a(a({ref:t},m),{},{components:n})):o.createElement(f,a({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),i=(n(67294),n(3905));const r={id:"extend-snmp",title:"SNMP Protocol Custom Monitoring",sidebar_label:"SNMP Protocol Custom Monitoring"},a=void 0,l={unversionedId:"advanced/extend-snmp",id:"advanced/extend-snmp",title:"SNMP Protocol Custom Monitoring",description:"From Custom Monitoring, you are familiar with how to customize types, Metrics, protocols, etc. Here we will introduce in detail how to use SNMP to customize Metric monitoring.",source:"@site/docs/advanced/extend-snmp.md",sourceDirName:"advanced",slug:"/advanced/extend-snmp",permalink:"/docs/advanced/extend-snmp",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/advanced/extend-snmp.md",tags:[],version:"current",frontMatter:{id:"extend-snmp",title:"SNMP Protocol Custom Monitoring",sidebar_label:"SNMP Protocol Custom Monitoring"},sidebar:"docs",previous:{title:"JMX Protocol Custom Monitoring",permalink:"/docs/advanced/extend-jmx"},next:{title:"Push Style Custom Monitoring",permalink:"/docs/advanced/extend-push"}},p={},s=[{value:"SNMP protocol collection process",id:"snmp-protocol-collection-process",level:3},{value:"Data parsing method",id:"data-parsing-method",level:3},{value:"Custom Steps",id:"custom-steps",level:3},{value:"Monitoring Templates YML",id:"monitoring-templates-yml",level:3}],m={toc:s};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"From ",(0,i.kt)("a",{parentName:"p",href:"extend-point"},"Custom Monitoring"),", you are familiar with how to customize types, Metrics, protocols, etc. Here we will introduce in detail how to use SNMP to customize Metric monitoring.\nJMX protocol custom monitoring allows us to easily monitor Metrics we want by config SNMP MIB OIDs.")),(0,i.kt)("h3",{id:"snmp-protocol-collection-process"},"SNMP protocol collection process"),(0,i.kt)("p",null,"\u3010",(0,i.kt)("strong",{parentName:"p"},"Peer Server Enable SNMP Service"),"\u3011->\u3010",(0,i.kt)("strong",{parentName:"p"},"HertzBeat Connect Peer Server SNMP"),"\u3011->\u3010",(0,i.kt)("strong",{parentName:"p"},"Query Oids Data"),"\u3011->\u3010",(0,i.kt)("strong",{parentName:"p"},"Metric data extraction"),"\u3011"),(0,i.kt)("p",null,"It can be seen from the process that we define a monitoring type of Snmp protocol. We need to configure Snmp request parameters, configure which Metrics to obtain, and configure oids."),(0,i.kt)("h3",{id:"data-parsing-method"},"Data parsing method"),(0,i.kt)("p",null,"By configuring the metrics ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"aliasFields"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"oids")," under the ",(0,i.kt)("inlineCode",{parentName:"p"},"snmp")," protocol of the monitoring template YML to capture the data specified by the peer and parse the mapping."),(0,i.kt)("h3",{id:"custom-steps"},"Custom Steps"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HertzBeat Dashboard")," -> ",(0,i.kt)("strong",{parentName:"p"},"Monitoring Templates")," -> ",(0,i.kt)("strong",{parentName:"p"},"New Template")," -> ",(0,i.kt)("strong",{parentName:"p"},"Config Monitoring Template Yml")," -> ",(0,i.kt)("strong",{parentName:"p"},"Save and Apply")," -> ",(0,i.kt)("strong",{parentName:"p"},"Add A Monitoring with The New Monitoring Type")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(80047).Z,width:"4064",height:"2166"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Configuration usages of the monitoring templates yml are detailed below."),(0,i.kt)("h3",{id:"monitoring-templates-yml"},"Monitoring Templates YML"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We define all monitoring collection types (mysql,jvm,k8s) as yml monitoring templates, and users can import these templates to support corresponding types of monitoring.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Monitoring template is used to define ",(0,i.kt)("em",{parentName:"p"},"the name of monitoring type(international), request parameter mapping, index information, collection protocol configuration information"),", etc.")),(0,i.kt)("p",null,"eg\uff1aDefine a custom monitoring type ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," named ",(0,i.kt)("inlineCode",{parentName:"p"},"example_windows")," which use the SNMP protocol to collect data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring mid-middleware custom-custom monitoring os-operating system monitoring\ncategory: os\n# The monitoring type eg: linux windows tomcat mysql aws...\napp: windows\n# The monitoring i18n name\nname:\n  zh-CN: Windows\u64cd\u4f5c\u7cfb\u7edf\n  en-US: OS Windows\n# Input params define for monitoring(render web ui by the definition)\nparams:\n  # field-param field key\n  - field: host\n    # name-param field display i18n name\n    name:\n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    # type-param field type(most mapping the html input type)\n    type: host\n    # required-true or false\n    required: true\n  # field-param field key\n  - field: port\n    # name-param field display i18n name\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    # type-param field type(most mapping the html input type)\n    type: number\n    # when type is number, range is required\n    range: '[0,65535]'\n    # required-true or false\n    required: true\n    # default value\n    defaultValue: 161\n  # field-param field key\n  - field: version\n    # name-param field display i18n name\n    name:\n      zh-CN: SNMP \u7248\u672c\n      en-US: SNMP Version\n    # type-param field type(radio mapping the html radio tag)\n    type: radio\n    # required-true or false\n    required: true\n    # when type is radio checkbox, use option to show optional values {name1:value1,name2:value2}\n    options:\n      - label: SNMPv1\n        value: 0\n      - label: SNMPv2c\n        value: 1\n  # field-param field key\n  - field: community\n    # name-param field display i18n name\n    name:\n      zh-CN: SNMP \u56e2\u4f53\u5b57\n      en-US: SNMP Community\n    # type-param field type(most mapping the html input type)\n    type: text\n    # when type is text, use limit to limit string length\n    limit: 100\n    # required-true or false\n    required: true\n    # param field input placeholder\n    placeholder: 'Snmp community for v1 v2c'\n  # field-param field key\n  - field: timeout\n    # name-param field display i18n name\n    name:\n      zh-CN: \u8d85\u65f6\u65f6\u95f4(ms)\n      en-US: Timeout(ms)\n    # type-param field type(most mapping the html input type)\n    type: number\n    # when type is number, range is required\n    range: '[0,100000]'\n    # required-true or false\n    required: false\n    # hide-is hide this field and put it in advanced layout\n    hide: true\n    # default value\n    defaultValue: 6000\n# collect metrics config list\nmetrics:\n  # metrics - system\n  - name: system\n    # metrics scheduling priority(0->127)->(high->low), metrics with the same priority will be scheduled in parallel\n    # priority 0's metrics is availability metrics, it will be scheduled first, only availability metrics collect success will the scheduling continue\n    priority: 0\n    # collect metrics content\n    fields:\n      # field-metric name, type-metric type(0-number,1-string), unit-metric unit('%','ms','MB'), label-if is metrics label\n      - field: name\n        type: 1\n      - field: descr\n        type: 1\n      - field: uptime\n        type: 1\n      - field: numUsers\n        type: 0\n      - field: services\n        type: 0\n      - field: processes\n        type: 0\n      - field: responseTime\n        type: 0\n        unit: ms\n      - field: location\n        type: 1\n    # the protocol used for monitoring, eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: snmp\n    # the config content when protocol is snmp\n    snmp:\n      # server host: ipv4 ipv6 domain\n      host: ^_^host^_^\n      # server port\n      port: ^_^port^_^\n      # snmp connect timeout\n      timeout: ^_^timeout^_^\n      # snmp community\n      community: ^_^community^_^\n      # snmp version\n      version: ^_^version^_^\n      # snmp operation: get, walk\n      operation: get\n      # metrics oids: metric_name - oid_value\n      oids:\n        name: 1.3.6.1.2.1.1.5.0\n        descr: 1.3.6.1.2.1.1.1.0\n        uptime: 1.3.6.1.2.1.25.1.1.0\n        numUsers: 1.3.6.1.2.1.25.1.5.0\n        services: 1.3.6.1.2.1.1.7.0\n        processes: 1.3.6.1.2.1.25.1.6.0\n        location: 1.3.6.1.2.1.1.6.0\n")))}c.isMDXComponent=!0},80047:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/extend-point-1-0175fbb6d4bd1105c2596f7ccae83938.png"}}]);