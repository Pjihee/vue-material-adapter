(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{181:function(e,n,o){"use strict";o.r(n);var t={filters:{clean:function(e){return e.replace(/\s/g,"-")}},data:function(){return{openBasic:!1,openSimple:!1,openAlert:!1,openConfirmation:!1,openScrolling:!1,action:"",selectedIndex:-1,choices:["Never gonna give you up","Host cross buns","None"],picked:"",hasBeenOpened:!1}},methods:{onClosed:function(e){var n=e.action;this.hasBeenOpened=!0,this.action="dismiss"!==n?"Accepted, thanks!":"Declined... Maybe next time?"}}},a=o(13),i=Object(a.a)(t,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"mcw-demo"},[o("div",{staticClass:"mcw-demo mcw-demo--container"},[o("mcw-button",{on:{click:function(n){e.openBasic=!e.openBasic}}},[e._v("Basic Dialog")]),e._v(" "),o("mcw-button",{on:{click:function(n){e.openSimple=!e.openSimple}}},[e._v("Simple Dialog")]),e._v(" "),o("mcw-button",{on:{click:function(n){e.openAlert=!e.openAlert}}},[e._v("Alert Dialog")]),e._v(" "),o("mcw-button",{on:{click:function(n){e.openConfirmation=!e.openConfirmation}}},[e._v("Confirmation Dialog")]),e._v(" "),o("mcw-button",{on:{click:function(n){e.openScrolling=!e.openScrolling}}},[e._v("Scrolling Dialog")])],1),e._v(" "),e.hasBeenOpened?o("mcw-caption",[o("span",{},[e._v(e._s(e.action))])]):e._e(),e._v(" "),e.picked?o("mcw-caption",[e._v("\n    Picked:\n    "),o("span",{},[e._v(e._s(e.picked))])]):e._e(),e._v(" "),e.openBasic?o("mcw-dialog",{attrs:{id:"demo-dialog","escape-key-action":"close","scrim-click-action":"close","auto-stack-buttons":!0},on:{validate:function(e){return e.accept(!1)},validateCancel:function(e){return e.cancel(!1)},"MDCDialog:closing":e.onClosed},model:{value:e.openBasic,callback:function(n){e.openBasic=n},expression:"openBasic"}},[o("mcw-dialog-title",[e._v("Lorem ipsum dolor")]),e._v(" "),o("mcw-dialog-content",[o("div",[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n        commodo consequat.\n      ")])]),e._v(" "),o("mcw-dialog-footer",[o("mcw-dialog-button",{attrs:{action:"dismiss"}},[e._v("Dismiss")]),e._v(" "),o("mcw-dialog-button",{attrs:{action:"accept","is-default":"","is-initial-focus":""}},[e._v("Accept")])],1)],1):e._e(),e._v(" "),e.openSimple?o("mcw-dialog",{attrs:{id:"simple-dialog","escape-key-action":"close","scrim-click-action":"close","auto-stack-buttons":!0},on:{validate:function(e){return e.accept(!1)},validateCancel:function(e){return e.cancel(!1)},"MDCDialog:closing":e.onClosed},model:{value:e.openSimple,callback:function(n){e.openSimple=n},expression:"openSimple"}},[o("mcw-dialog-title",[e._v("Select user")]),e._v(" "),o("mcw-dialog-content",[o("mcw-list",{attrs:{"avatar-list":""}},[o("li",{staticClass:"mdc-list-item",attrs:{role:"checkbox","aria-checked":"false","data-mdc-dialog-action":"test",tabindex:"0"}},[e._v("test")]),e._v(" "),o("li",{staticClass:"mdc-list-item",attrs:{role:"checkbox","aria-checked":"false","data-mdc-dialog-action":"help"}},[e._v("help")])])],1)],1):e._e(),e._v(" "),e.openAlert?o("mcw-dialog",{attrs:{id:"alert-dialog","escape-key-action":"close","scrim-click-action":"close","auto-stack-buttons":!0},on:{validate:function(e){return e.accept(!1)},validateCancel:function(e){return e.cancel(!1)},"MDCDialog:closing":e.onClosed},model:{value:e.openAlert,callback:function(n){e.openAlert=n},expression:"openAlert"}},[o("mcw-dialog-content",[o("p",[e._v("Discard draft?")])]),e._v(" "),o("mcw-dialog-footer",[o("mcw-dialog-button",{attrs:{action:"dismiss"}},[e._v("Cancel")]),e._v(" "),o("mcw-dialog-button",{attrs:{action:"discard","is-default":""}},[e._v("Discard")])],1)],1):e._e(),e._v(" "),e.openConfirmation?o("mcw-dialog",{attrs:{id:"alert-dialog","escape-key-action":"close","scrim-click-action":"close","auto-stack-buttons":!0},on:{validate:function(e){return e.accept(!1)},validateCancel:function(e){return e.cancel(!1)},"MDCDialog:closing":e.onClosed},model:{value:e.openConfirmation,callback:function(n){e.openConfirmation=n},expression:"openConfirmation"}},[o("mcw-dialog-title",[e._v("Chose a Phone Ringtone")]),e._v(" "),o("mcw-dialog-content",[o("mcw-list",{attrs:{"single-selection":""}},e._l(e.choices,(function(n,t){return o("li",{key:t,staticClass:"mdc-list-item",attrs:{role:"checkbox","aria-checked":"false"}},[o("span",{staticClass:"mdc-list-item__graphic"},[o("mcw-radio",{attrs:{id:e._f("clean")(n),name:"ringtone",value:n},model:{value:e.picked,callback:function(n){e.picked=n},expression:"picked"}})],1),e._v(" "),o("label",{attrs:{for:e._f("clean")(n)}},[e._v(e._s(n))])])})),0)],1),e._v(" "),o("mcw-dialog-footer",[o("mcw-dialog-button",{attrs:{action:"dismiss"}},[e._v("Cancel")]),e._v(" "),o("mcw-dialog-button",{attrs:{action:"confirm","is-default":""}},[e._v("Ok")])],1)],1):e._e(),e._v(" "),e.openScrolling?o("mcw-dialog",{attrs:{id:"alert-dialog","escape-key-action":"close","scrim-click-action":"close","auto-stack-buttons":!0},on:{validate:function(e){return e.accept(!1)},validateCancel:function(e){return e.cancel(!1)},"MDCDialog:closing":e.onClosed},model:{value:e.openScrolling,callback:function(n){e.openScrolling=n},expression:"openScrolling"}},[o("mcw-dialog-title",[e._v("The Wonderful Wizard of Oz")]),e._v(" "),o("mcw-dialog-content",[o("p",[o("a",{attrs:{href:"https://www.gutenberg.org/ebooks/55",target:"_blank",rel:"noopener noreferrer"}},[e._v("Read the full book")])]),e._v(" "),o("p",[e._v("\n        Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em,\n        who was the farmer's wife. Their house was small,\n        for the lumber to build it had to be carried by wagon many miles. There were four walls, a\n        floor and a roof, which made one room; and this room contained a\n        rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the\n        beds. Uncle Henry and Aunt Em had a big bed in one corner, and\n        Dorothy a little bed in another corner. There was no garret at all, and no cellar--except\n        a small hole dug in the ground, called a cyclone cellar, where\n        the family could go in case one of those great whirlwinds arose, mighty enough to crush any\n        building in its path. It was reached by a trap door in the middle\n        of the floor, from which a ladder led down into the small, dark hole.\n      ")]),e._v(" "),o("p",[e._v("\n        When Dorothy stood in the doorway and looked around, she could see nothing but the great gray prairie\n        on every side. Not a tree nor a house broke the broad\n        sweep of flat country that reached to the edge of the sky in all directions. The sun had baked the\n        plowed land into a gray mass, with little cracks running\n        through it. Even the grass was not green, for the sun had burned the tops of the long blades until\n        they were the same gray color to be seen everywhere.\n        Once the house had been painted, but the sun blistered the paint and the rains washed it away, and\n        now the house was as dull and gray as everything else.\n      ")]),e._v(" "),o("p",[e._v("\n        When Aunt Em came there to live she was a young, pretty wife. The sun and wind had changed her, too.\n        They had taken the sparkle from her eyes and left them\n        a sober gray; they had taken the red from her cheeks and lips, and they were gray also. She was thin\n        and gaunt, and never smiled now. When Dorothy,\n        who was an orphan, first came to her, Aunt Em had been so startled by the child's laughter that she\n        would scream and press her hand upon her heart\n        whenever Dorothy's merry voice reached her ears; and she still looked at the little girl with wonder\n        that she could find anything to laugh at.\n      ")]),e._v(" "),o("p",[e._v("\n        Uncle Henry never laughed. He worked hard from morning till night and did not know what joy was.\n        He was gray also, from his long beard to his rough boots,\n        and he looked stern and solemn, and rarely spoke.\n      ")]),e._v(" "),o("p",[e._v("\n        It was Toto that made Dorothy laugh, and saved her from growing as gray as her other surroundings.\n        Toto was not gray; he was a little black dog,\n        with long silky hair and small black eyes that twinkled merrily on either side of his funny, wee nose.\n        Toto played all day long, and Dorothy played with him, and loved him dearly.\n      ")]),e._v(" "),o("p",[e._v("\n        Today, however, they were not playing. Uncle Henry sat upon the doorstep and looked anxiously at the sky,\n        which was even grayer than usual.\n        Dorothy stood in the door with Toto in her arms, and looked at the sky too. Aunt Em was washing the dishes.\n      ")]),e._v(" "),o("p",[e._v("\n        From the far north they heard a low wail of the wind, and Uncle Henry and Dorothy could see where\n        the long grass bowed in waves before the\n        coming storm. There now came a sharp whistling in the air from the south, and as they turned their\n        eyes that way they saw ripples in the grass\n        coming from that direction also.\n      ")])]),e._v(" "),o("mcw-dialog-footer",[o("mcw-dialog-button",{attrs:{action:"dismiss"}},[e._v("Cancel")]),e._v(" "),o("mcw-dialog-button",{attrs:{action:"confirm","is-default":""}},[e._v("Ok")])],1)],1):e._e()],1)}),[],!1,null,null,null);n.default=i.exports}}]);
//# sourceMappingURL=56.38a056242a54737482cf.js.map