const prodErrorDevWarning =
  process.env.NODE_ENV === "production" ? "error" : "warn";

module.exports = {
  parser: "@typescript-eslint/parser",
  env: { browser: true },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: true }],
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-useless-constructor": prodErrorDevWarning,
    "@typescript-eslint/no-unused-vars": [
      prodErrorDevWarning,
      { ignoreRestSiblings: true },
    ],
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "import/no-unresolved": 0,
    "import/order": [
      1,
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    eqeqeq: "error",
    "no-debugger": prodErrorDevWarning,
    "no-console": prodErrorDevWarning,
    "prefer-const": prodErrorDevWarning,
    "no-restricted-globals": [
      "error",
      "atob",
      "addEventListener",
      "blur",
      "btoa",
      "captureEvents",
      "chrome",
      "clientInformation",
      "close",
      "closed",
      "createImageBitmap",
      "crypto",
      "customElements",
      "defaultstatus",
      "defaultStatus",
      "devicePixelRatio",
      "external",
      "find",
      "focus",
      "frameElement",
      "frames",
      "getComputedStyle",
      "getSelection",
      "indexedDB",
      "innerHeight",
      "innerWidth",
      "isSecureContext",
      "length",
      "location",
      "locationbar",
      "matchMedia",
      "menubar",
      "moveBy",
      "moveTo",
      "name",
      "onabort",
      "onafterprint",
      "onanimationend",
      "onanimationiteration",
      "onanimationstart",
      "onappinstalled",
      "onauxclick",
      "onbeforeinstallprompt",
      "onbeforeprint",
      "onbeforeunload",
      "onblur",
      "oncancel",
      "oncanplay",
      "oncanplaythrough",
      "onchange",
      "onclick",
      "onclose",
      "oncontextmenu",
      "oncuechange",
      "ondblclick",
      "ondevicemotion",
      "ondeviceorientation",
      "ondeviceorientationabsolute",
      "ondrag",
      "ondragend",
      "ondragenter",
      "ondragleave",
      "ondragover",
      "ondragstart",
      "ondrop",
      "ondurationchange",
      "onemptied",
      "onended",
      "onerror",
      "onfocus",
      "ongotpointercapture",
      "onhashchange",
      "oninput",
      "oninvalid",
      "onkeydown",
      "onkeypress",
      "onkeyup",
      "onlanguagechange",
      "onload",
      "onloadeddata",
      "onloadedmetadata",
      "onloadstart",
      "onlostpointercapture",
      "onmessage",
      "onmessageerror",
      "onmousedown",
      "onmouseenter",
      "onmouseleave",
      "onmousemove",
      "onmouseout",
      "onmouseover",
      "onmouseup",
      "onmousewheel",
      "onoffline",
      "ononline",
      "onpagehide",
      "onpageshow",
      "onpause",
      "onplay",
      "onplaying",
      "onpointercancel",
      "onpointerdown",
      "onpointerenter",
      "onpointerleave",
      "onpointermove",
      "onpointerout",
      "onpointerover",
      "onpointerup",
      "onpopstate",
      "onprogress",
      "onratechange",
      "onrejectionhandled",
      "onreset",
      "onresize",
      "onscroll",
      "onsearch",
      "onseeked",
      "onseeking",
      "onselect",
      "onstalled",
      "onstorage",
      "onsubmit",
      "onsuspend",
      "ontimeupdate",
      "ontoggle",
      "ontransitionend",
      "onunhandledrejection",
      "onunload",
      "onvolumechange",
      "onwaiting",
      "onwebkitanimationend",
      "onwebkitanimationiteration",
      "onwebkitanimationstart",
      "onwebkittransitionend",
      "onwheel",
      "open",
      "openDatabase",
      "opener",
      "origin",
      "outerHeight",
      "outerWidth",
      "pageXOffset",
      "pageYOffset",
      "parent",
      "performance",
      "personalbar",
      "postMessage",
      "print",
      "releaseEvents",
      "removeEventListener",
      "resizeBy",
      "resizeTo",
      "screen",
      "screenLeft",
      "screenTop",
      "screenX",
      "screenY",
      "scroll",
      "scrollbars",
      "scrollBy",
      "scrollTo",
      "scrollX",
      "scrollY",
      "self",
      "speechSynthesis",
      "status",
      "statusbar",
      "stop",
      "styleMedia",
      "toolbar",
      "top",
      "visualViewport",
      "webkitRequestFileSystem",
      "webkitResolveLocalFileSystemURL",
      "webkitStorageInfo",
      "navigator",
      // "window",
      // "document",
      // "setTimeout",
      // "setInterval",
    ],
  },
};
