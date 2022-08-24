"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[375],{4758:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return k}});var n=a(358),o=(a(2983),a(4256)),i=["components"],p={title:"Set-Cookie",slug:"http/set-cookie",tags:["http"]},l={_frontmatter:p};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"响应标头 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Set-Cookie"))," 被用来由服务器端向用户代理发送 cookie，所以用户代理可再后续的请求中将其发送回服务器。服务器要发送多个 cookie，则应该在同一响应中发送多个 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Set-Cookie"))," 标头。"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"警告：")," 根据 Fetch 规范，",(0,o.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," 是一个",(0,o.kt)("a",{parentName:"p",href:"https://fetch.spec.whatwg.org/#forbidden-response-header-name"},"禁止的响应标头"),"，对应的响应在被暴露给前端代码前，",(0,o.kt)("a",{parentName:"p",href:"https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0"},"必须滤除"),"这一响应标头，即浏览器会阻止前端 JavaScript 代码访问 ",(0,o.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," 标头。")),(0,o.kt)("p",null,"更多信息请查阅这篇指南：",(0,o.kt)("a",{parentName:"p",href:"/http/cookies"},"HTTP cookie"),"。"),(0,o.kt)("table",{className:"properties"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"标头类型"),(0,o.kt)("td",null,"响应标头")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"禁止修改的标头"),(0,o.kt)("td",null,"否")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"禁止的响应标头"),(0,o.kt)("td",null,"是")))),(0,o.kt)("h2",null,"语法"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Set-Cookie: <cookie-name>=<cookie-value>\nSet-Cookie: <cookie-name>=<cookie-value>; Expires=<date>\nSet-Cookie: <cookie-name>=<cookie-value>; Max-Age=<number>\nSet-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>\nSet-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>\nSet-Cookie: <cookie-name>=<cookie-value>; Secure\nSet-Cookie: <cookie-name>=<cookie-value>; HttpOnly\n\nSet-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict\nSet-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax\nSet-Cookie: <cookie-name>=<cookie-value>; SameSite=None; Secure\n\n// Multiple attributes are also possible, for example:\nSet-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly\n")),(0,o.kt)("h2",null,"指令"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<cookie-name>=<cookie-value>")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"一个 cookie 开始于一个名称/值对："),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<cookie-name>")," 可以是除了控制字符、空格或制表符之外的任何 US-ASCII 字符。同时不能包含以下分隔字符：",(0,o.kt)("inlineCode",{parentName:"li"},'( ) < > @ , ; : \\ " / [ ] ? = { }'),"。"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<cookie-value>")," 是可选的，如果存在的话，那么需要包含在双引号里面。支持除了控制字符、空格、双引号、逗号、分号以及反斜线之外的任意 US-ASCII 字符。")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"关于编码"),"：许多应用会对 cookie 值按照 URL 编码规则进行编码，但是按照 RFC 规范，这不是必须的。不过满足规范中对于 ",(0,o.kt)("inlineCode",{parentName:"p"},"<cookie-value>")," 所允许使用的字符的要求是有用的。"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"备注：")," 一些 ",(0,o.kt)("inlineCode",{parentName:"p"},"<cookie-name>")," 具有特殊的语义："),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"__Secure-")," 前缀"),"：以 ",(0,o.kt)("inlineCode",{parentName:"p"},"__Secure-")," 为前缀的 cookie（其中连接符是前缀的一部分），必须与 ",(0,o.kt)("inlineCode",{parentName:"p"},"secure")," 属性一同设置，同时必须应用于安全页面（即使用 HTTPS 访问的页面）。"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"__Host-")," 前缀"),"：以 ",(0,o.kt)("inlineCode",{parentName:"p"},"__Host-")," 为前缀的 cookie，必须与 ",(0,o.kt)("inlineCode",{parentName:"p"},"secure")," 属性一同设置，必须应用于安全页面（即使用 HTTPS 访问的页面），也禁止设置 domain 属性（也就不会发送给子域），同时 path 属性的值必须为 ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),"。"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Expires=<date>")," (可选)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"cookie 的最长有效时间，形式为符合 HTTP-date 规范的时间戳。参见 Date 可以获取详细信息。")),(0,o.kt)("p",{parentName:"li"},"如果没有设置这个属性，那么表示这是一个",(0,o.kt)("strong",{parentName:"p"},"会话期 cookie"),"。一个会话结束于客户端被关闭时，这意味着会话期 cookie 在彼时会被移除。"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"警告：")," 然而，很多 Web 浏览器支持会话恢复功能，这个功能可以使浏览器保留所有的 tab 标签，然后在重新打开浏览器的时候将其还原。与此同时，cookie 也会恢复，就跟从来没有关闭浏览器一样。")),(0,o.kt)("p",{parentName:"li"},"如果设置了 ",(0,o.kt)("inlineCode",{parentName:"p"},"Expires")," 属性，其截止时间与",(0,o.kt)("em",{parentName:"p"},"客户端"),"相关，而非服务器的时间。")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Max-Age=<number>")," (可选)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"在 cookie 失效之前需要经过的秒数。秒数为 0 或 -1 将会使 cookie 直接过期。假如 ",(0,o.kt)("inlineCode",{parentName:"li"},"Expires")," 和 ",(0,o.kt)("inlineCode",{parentName:"li"},"Max-Age")," 属性均存在，那么 ",(0,o.kt)("inlineCode",{parentName:"li"},"Max-Age")," 的优先级更高。"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Domain=<domain-value>")," (可选)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"指定 cookie 可以送达的主机名。")),(0,o.kt)("p",{parentName:"li"},"假如没有指定，那么默认值为当前文档访问地址中的主机部分（但是不包含子域名）。"),(0,o.kt)("p",{parentName:"li"},"与之前的规范不同的是，域名（",(0,o.kt)("inlineCode",{parentName:"p"},".example.com"),"）之前的点号会被忽略。"),(0,o.kt)("p",{parentName:"li"},"多个主机/域名的值是",(0,o.kt)("em",{parentName:"p"},"不"),"被允许的，但如果指定了一个域，则其子域也会被包含。")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Path=<path-value>")," (可选)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"指定一个 URL 路径，这个路径",(0,o.kt)("em",{parentName:"li"},"必须"),"出现在要请求的资源的路径中才可以发送 ",(0,o.kt)("inlineCode",{parentName:"li"},"Cookie")," 标头。")),(0,o.kt)("p",{parentName:"li"},"字符 ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," 可以解释为文件目录分隔符，此目录的下级目录也满足匹配的条件（例如，如果 ",(0,o.kt)("inlineCode",{parentName:"p"},"path=/docs"),"，那么"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/docs"),"、",(0,o.kt)("inlineCode",{parentName:"li"},"/docs/"),"、",(0,o.kt)("inlineCode",{parentName:"li"},"/docs/Web/")," 和 ",(0,o.kt)("inlineCode",{parentName:"li"},"/docs/Web/HTTP")," 都满足匹配条件。"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/"),"、",(0,o.kt)("inlineCode",{parentName:"li"},"/docsets")," 或者 ",(0,o.kt)("inlineCode",{parentName:"li"},"/fr/docs")," 则不满足匹配条件。"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Secure")," (可选)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"一个带有安全属性的 cookie 只有在请求使用 ",(0,o.kt)("inlineCode",{parentName:"p"},"https:")," 协议（localhost 不受此限制）的时候才会被发送到服务器。以阻止中间人攻击。"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"备注：")," 不要假设 ",(0,o.kt)("inlineCode",{parentName:"p"},"Secure")," 会阻止所有的对 cookie 中敏感信息（session key、登录信息，等等）的访问。携带这一属性的 cookie 在不设置 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpOnly")," 的情况下仍能从客户端的硬盘或是从 JavaScript 中访问。"),(0,o.kt)("p",{parentName:"blockquote"},"非安全站点（",(0,o.kt)("inlineCode",{parentName:"p"},"http:"),"）已经不能在 cookie 中设置 ",(0,o.kt)("inlineCode",{parentName:"p"},"Secure")," 属性了（在 Chrome 52 和 Firefox 52 中新引入的限制）。对于 Firefox，",(0,o.kt)("inlineCode",{parentName:"p"},"Secure")," 属性的 ",(0,o.kt)("inlineCode",{parentName:"p"},"https:")," 限制会在域为 localhost 时被忽略（从 Firefox 75 开始）。"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"HttpOnly")," (可选)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"用于阻止 JavaScript 通过 Document.cookie 属性访问 cookie。注意，设置了 ",(0,o.kt)("inlineCode",{parentName:"li"},"HttpOnly")," 的 cookie 在 JavaScript 初始化的请求中仍然会被发送。例如，调用 XMLHttpRequest.send() 或 fetch()。其用于防范跨站脚本攻击（XSS）。"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"SameSite=<samesite-value>")," (可选)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"允许服务器设定一则 cookie 不随着跨站请求一起发送，这样可以在一定程度上防范跨站请求伪造攻击（CSRF）。")),(0,o.kt)("p",{parentName:"li"},"可选的属性值有："),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Strict")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"这意味浏览器仅对同一站点的请求发送 ",(0,o.kt)("inlineCode",{parentName:"li"},"cookie"),"，即请求来自设置 cookie 的站点。如果请求来自不同的域或协议（即使是相同域），则携带有 ",(0,o.kt)("inlineCode",{parentName:"li"},"SameSite=Strict")," 属性的 cookie 将不会被发送。"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Lax")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"这意味着 cookie 不会在跨站请求中被发送，如：加载图像或 frame 的请求。但 cookie 在用户从外部站点导航到源站时，cookie 也将被发送（例如，跟随一个链接）。这是 ",(0,o.kt)("inlineCode",{parentName:"li"},"SameSite")," 属性未被设置时的默认行为。"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"None")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"这意味着浏览器会在跨站和同站请求中均发送 cookie。在设置这一属性值时，必须同时设置 ",(0,o.kt)("inlineCode",{parentName:"li"},"Secure")," 属性，就像这样：",(0,o.kt)("inlineCode",{parentName:"li"},"SameSite=None; Secure"),"。")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"备注：")," 与 ",(0,o.kt)("a",{parentName:"p",href:"/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite"},"SameSite Cookie")," 相关的标准作了如下变动："),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"SameSite")," 属性未被指定时，其默认行为是 ",(0,o.kt)("inlineCode",{parentName:"li"},"SameSite=Lax"),"。在过去，若未指定，所有的 cookie 均会被发送。"),(0,o.kt)("li",{parentName:"ol"},"现在，携带 ",(0,o.kt)("inlineCode",{parentName:"li"},"SameSite=None")," 属性的 cookie 必须同时设置 ",(0,o.kt)("inlineCode",{parentName:"li"},"Secure")," 属性（换句话说，其仅能用于安全上下文）"),(0,o.kt)("li",{parentName:"ol"},"来自同一域的 cookie 若使用了不同的协议（",(0,o.kt)("inlineCode",{parentName:"li"},"http:")," 或 ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTPS:"),"），将不再被视为来自同一站点。")),(0,o.kt)("p",{parentName:"blockquote"},"参见浏览器兼容性表以了解不同浏览器的实线情况（行：“",(0,o.kt)("inlineCode",{parentName:"p"},"SameSite"),": Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"Lax"),"”、“",(0,o.kt)("inlineCode",{parentName:"p"},"SameSite"),": Secure context required”和“",(0,o.kt)("inlineCode",{parentName:"p"},"SameSite"),': URL scheme-aware ("schemeful")”）。')))))),(0,o.kt)("h2",null,"示例"),(0,o.kt)("h3",null,"会话期 cookie"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"会话期 cookie")," 将会在客户端关闭时被移除。会话期 cookie 不设置 ",(0,o.kt)("inlineCode",{parentName:"p"},"Expires")," 或 ",(0,o.kt)("inlineCode",{parentName:"p"},"Max-Age")," 属性。"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Set-Cookie: sessionId=38afes7a8\n")),(0,o.kt)("h3",null,"持久化 cookie"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"持久化 cookie")," 不会在客户端关闭时失效，而是在特定的日期（",(0,o.kt)("inlineCode",{parentName:"p"},"Expires"),"）或者经过一段特定的时间之后（",(0,o.kt)("inlineCode",{parentName:"p"},"Max-Age"),"）才会失效。"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Set-Cookie: id=a3fWa; Max-Age=2592000\n")),(0,o.kt)("h3",null,"非法域"),(0,o.kt)("p",null,"属于特定域的 cookie，假如域名不能涵盖原始服务器的域名，那么",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6265#section-4.1.2.3"},"应该被用户代理拒绝"),"。"),(0,o.kt)("p",null,"以下的 cookie 假如是被域名为 ",(0,o.kt)("inlineCode",{parentName:"p"},"originalcompany.com")," 的服务器设置的，则会被拒绝："),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk\n")),(0,o.kt)("p",null,"服务器尝试为其域名的子域名设置的 cookie 也会被拒绝。"),(0,o.kt)("p",null,"以下的 cookie 假如是被域名为 ",(0,o.kt)("inlineCode",{parentName:"p"},"example.com")," 的服务器设置的，则会被拒绝："),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com\n")),(0,o.kt)("h3",null,"Cookie 前缀"),(0,o.kt)("p",null,"名称中包含 ",(0,o.kt)("inlineCode",{parentName:"p"},"__Secure-")," 或 ",(0,o.kt)("inlineCode",{parentName:"p"},"__Host-")," 前缀的 cookie，只可以应用在使用了安全连接（HTTPS）的域中，需要同时设置 ",(0,o.kt)("inlineCode",{parentName:"p"},"secure")," 属性。"),(0,o.kt)("p",null,"另外，假如 cookie 以 ",(0,o.kt)("inlineCode",{parentName:"p"},"__Host-")," 为前缀，那么 path 属性的值必须为 ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),"（表示整个站点），且不能含有 ",(0,o.kt)("inlineCode",{parentName:"p"},"Domain")," 属性。"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"警告：")," 对于不支持 cookie 前缀的客户端，无法保证这些附加的条件成立，所以 cookie 总是被接受的。")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// 当响应来自于一个安全域（HTTPS）的时候，二者都可以被客户端接受\nSet-Cookie: __Secure-ID=123; Secure; Domain=example.com\nSet-Cookie: __Host-ID=123; Secure; Path=/\n\n// 缺少 Secure 指令，会被拒绝\nSet-Cookie: __Secure-id=1\n\n// 缺少 Path=/ 指令，会被拒绝\nSet-Cookie: __Host-id=1; Secure\n\n// 由于设置了 domain 属性，会被拒绝\nSet-Cookie: __Host-id=1; Secure; Path=/; domain=example.com\n")),(0,o.kt)("h3",null,"关于兼容性的注意事项"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"从 Chrome 52 和 Firefox 52 开始，非安全站点（",(0,o.kt)("inlineCode",{parentName:"li"},"http:"),"）已经不能在 cookie 中设置 ",(0,o.kt)("inlineCode",{parentName:"li"},"Secure")," 属性了。")),(0,o.kt)("h2",null,"参见"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/http/cookies"},"HTTP cookie"))))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-http-set-cookie-mdx-4e8deadc1933138552aa.js.map