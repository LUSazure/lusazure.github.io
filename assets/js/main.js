/* MS Fluent Emoji parse */
fluentemoji.parse(".page-content");

/* giscus 스크립트 커스텀 attr로 생성 */
// function setAttributeInCommon(script) {
//     script.setAttribute("src", "https://giscus.app/client.js");
//     script.setAttribute("data-repo", "LUSazure/lusazure.github.io");
//     script.setAttribute("data-repo-id", "R_kgDOLwMdsw");
//     script.setAttribute("data-category", "Announcements");
//     script.setAttribute("data-category-id", "DIC_kwDOLwMds84CfNvk");
//     script.setAttribute("data-mapping", "pathname");
//     script.setAttribute("data-strict", "1");
//     script.setAttribute("data-reactions-enabled", "1");
//     script.setAttribute("data-emit-metadata", "0");
//     script.setAttribute("data-input-position", "top");
//     script.setAttribute("data-lang", "{{ page.lang | default: site.lang | default: \"en\" }}");
//     script.setAttribute("data-loading", "lazy");
//     script.setAttribute("crossorigin", "anonymous");
// }

// function applyDesiredScript(theme) {
//     let script = document.createElement("script");
//     setAttributeInCommon(script);
//     script.setAttribute("data-theme", theme);
//     document.head.appendChild(script);
// }

// if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     applyDesiredScript("noborder_gray");
// }
// window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
//     const newColorScheme = event.matches ? "dark" : "light";
//     if (newColorScheme == "dark") {
//         // TODO
//     } else {
//         // TODO
//     }
// });