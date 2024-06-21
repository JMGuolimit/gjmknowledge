(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{416:function(a,t,s){"use strict";s.r(t);var v=s(2),r=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_02、java环境变量配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_02、java环境变量配置"}},[a._v("#")]),a._v(" 02、Java环境变量配置")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[a._v("版本：1.0")]),t("p",[a._v("作者：郭嘉铭\n"),t("br"),a._v("\n日期：2023.7.18")])]),t("p",[a._v("因为Java程序必须运行在JVM之上，所以，我们第一件事情就是安装JDK。")]),a._v(" "),t("p",[a._v("从 "),t("a",{attrs:{href:"https://openjdk.org/install/",target:"_blank",rel:"noopener noreferrer"}},[a._v("OpenJDK"),t("OutboundLink")],1),a._v(" 下载JDK")]),a._v(" "),t("p",[a._v("Windows优先选x64 MSI Installer，Linux和macOS要根据自己电脑的CPU是ARM还是x86选择合适的安装包。")]),a._v(" "),t("h2",{attrs:{id:"设置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置环境变量"}},[a._v("#")]),a._v(" 设置环境变量")]),a._v(" "),t("p",[a._v("安装完JDK后，需要设置一个JAVA_HOME的环境变量，它指向JDK的安装目录。在Windows下，它是安装目录，类似：")]),a._v(" "),t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[a._v("C:\\Program Files\\Java\\jdk-20\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("然后，把"),t("strong",[a._v("JAVA_HOME")]),a._v("的bin目录附加到系统环境变量"),t("strong",[a._v("PATH")]),a._v("上。在Windows下，它长这样：")]),a._v(" "),t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[a._v("Path=%JAVA_HOME%\\bin;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("把"),t("strong",[a._v("JAVA_HOME")]),a._v("的bin目录添加到"),t("strong",[a._v("PATH")]),a._v("中是为了在任意文件夹下都可以运行java。打开命令提示符窗口，输入命令java -version，如果一切正常，你会看到如下输出：")]),a._v(" "),t("p",[t("img",{attrs:{src:"images/java/01/0101.png",alt:"0101.png"}})]),a._v(" "),t("h2",{attrs:{id:"jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk"}},[a._v("#")]),a._v(" JDK")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("java：这个可执行程序其实就是JVM，运行Java程序，就是启动JVM，然后让JVM执行指定的编译后的代码；")])]),a._v(" "),t("li",[t("p",[a._v("javac：这是Java的编译器，它用于把Java源码文件（以.java后缀结尾）编译为Java字节码文件（以.class后缀结尾）；")])]),a._v(" "),t("li",[t("p",[a._v("jar：用于把一组.class文件打包成一个.jar文件，便于发布；")])]),a._v(" "),t("li",[t("p",[a._v("javadoc：用于从Java源码中自动提取注释并生成文档；")])]),a._v(" "),t("li",[t("p",[a._v("jdb：Java调试器，用于开发阶段的运行调试。")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);