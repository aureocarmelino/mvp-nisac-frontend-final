import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-ANAMEIXB.js";

// src/app/pages/documentation/documentation.ts
var Documentation = class _Documentation {
  static \u0275fac = function Documentation_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Documentation)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Documentation, selectors: [["app-documentation"]], decls: 68, vars: 0, consts: [[1, "card"], [1, "font-semibold", "text-2xl", "mb-4"], [1, "font-semibold", "text-xl", "mb-4"], [1, "text-lg", "mb-4"], [1, "app-code"], [1, "bg-highlight", "px-2", "py-1", "rounded-border", "not-italic", "text-base"], [1, "leading-normal", "list-disc", "pl-8", "text-lg", "mb-4"], [1, "text-primary", "font-medium"]], template: function Documentation_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Documentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275text(4, "Get Started");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Sakai is an application template for Angular and is distributed as a CLI project. Current versions is Angular v19 with PrimeNG v19. In case CLI is not installed already, use the command below to set it up.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "pre", 4)(8, "code");
      \u0275\u0275text(9, "npm install -g @angular/cli");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p", 3);
      \u0275\u0275text(11, ' Once CLI is ready in your system, extract the contents of the zip file distribution, cd to the directory, install the libraries from npm and then execute "ng serve" to run the application in your local environment. ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "pre", 4)(13, "code");
      \u0275\u0275text(14, "git clone https://github.com/primefaces/sakai-ng\nnpm install\nng serve");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p", 3);
      \u0275\u0275text(16, "The application should run at ");
      \u0275\u0275elementStart(17, "i", 5);
      \u0275\u0275text(18, "http://localhost:4200/");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " to view the application in your local environment.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 2);
      \u0275\u0275text(21, "Structure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p", 3);
      \u0275\u0275text(23, "Templates consists of a couple folders, demos and layout have been separated so that you can easily identify what is necessary for your application.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "ul", 6)(25, "li")(26, "span", 7);
      \u0275\u0275text(27, "src/app/layout");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, ": Main layout files, needs to be present.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "li")(30, "span", 7);
      \u0275\u0275text(31, "src/app/pages");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, ": Demo content like Dashboard.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "li")(34, "span", 7);
      \u0275\u0275text(35, "src/assets/demo");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, ": Assets used in demos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "li")(38, "span", 7);
      \u0275\u0275text(39, "src/assets/layout");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, ": SCSS files of the main layout");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 2);
      \u0275\u0275text(42, "Menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 3);
      \u0275\u0275text(44, " Main menu is defined at ");
      \u0275\u0275elementStart(45, "span", 5);
      \u0275\u0275text(46, "src/app/layout/component/app.menu.ts");
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " file. Update the ");
      \u0275\u0275elementStart(48, "i", 5);
      \u0275\u0275text(49, "model");
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " property to define your own menu items. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 2);
      \u0275\u0275text(52, "Layout Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 3)(54, "span", 5);
      \u0275\u0275text(55, "src/app/layout/service/layout.service.ts");
      \u0275\u0275elementEnd();
      \u0275\u0275text(56, " is a service that manages layout state changes, including dark mode, PrimeNG theme, menu modes, and states. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 2);
      \u0275\u0275text(58, "Tailwind CSS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p", 3);
      \u0275\u0275text(60, "The demo pages are developed with Tailwind CSS however the core application shell uses custom CSS.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 2);
      \u0275\u0275text(62, "Variables");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p", 3);
      \u0275\u0275text(64, " CSS variables used in the template are derived from the applied PrimeNG theme. Customize them through the CSS variables in ");
      \u0275\u0275elementStart(65, "span", 5);
      \u0275\u0275text(66, "src/assets/layout/variables");
      \u0275\u0275elementEnd();
      \u0275\u0275text(67, ". ");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule], styles: ["\n\n@media screen and (max-width: 991px) {\n  .video-container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-bottom: 56.25%;\n  }\n  .video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=documentation.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Documentation, [{
    type: Component,
    args: [{ selector: "app-documentation", standalone: true, imports: [CommonModule], template: `
        <div class="card">
            <div class="font-semibold text-2xl mb-4">Documentation</div>
            <div class="font-semibold text-xl mb-4">Get Started</div>
            <p class="text-lg mb-4">Sakai is an application template for Angular and is distributed as a CLI project. Current versions is Angular v19 with PrimeNG v19. In case CLI is not installed already, use the command below to set it up.</p>
            <pre class="app-code">
<code>npm install -g &#64;angular/cli</code></pre>
            <p class="text-lg mb-4">
                Once CLI is ready in your system, extract the contents of the zip file distribution, cd to the directory, install the libraries from npm and then execute "ng serve" to run the application in your local environment.
            </p>
            <pre class="app-code">
<code>git clone https://github.com/primefaces/sakai-ng
npm install
ng serve</code></pre>

            <p class="text-lg mb-4">The application should run at <i class="bg-highlight px-2 py-1 rounded-border not-italic text-base">http://localhost:4200/</i> to view the application in your local environment.</p>

            <div class="font-semibold text-xl mb-4">Structure</div>
            <p class="text-lg mb-4">Templates consists of a couple folders, demos and layout have been separated so that you can easily identify what is necessary for your application.</p>
            <ul class="leading-normal list-disc pl-8 text-lg mb-4">
                <li><span class="text-primary font-medium">src/app/layout</span>: Main layout files, needs to be present.</li>
                <li><span class="text-primary font-medium">src/app/pages</span>: Demo content like Dashboard.</li>
                <li><span class="text-primary font-medium">src/assets/demo</span>: Assets used in demos</li>
                <li><span class="text-primary font-medium">src/assets/layout</span>: SCSS files of the main layout</li>
            </ul>

            <div class="font-semibold text-xl mb-4">Menu</div>
            <p class="text-lg mb-4">
                Main menu is defined at <span class="bg-highlight px-2 py-1 rounded-border not-italic text-base">src/app/layout/component/app.menu.ts</span> file. Update the
                <i class="bg-highlight px-2 py-1 rounded-border not-italic text-base">model</i> property to define your own menu items.
            </p>

            <div class="font-semibold text-xl mb-4">Layout Service</div>
            <p class="text-lg mb-4">
                <span class="bg-highlight px-2 py-1 rounded-border not-italic text-base">src/app/layout/service/layout.service.ts</span> is a service that manages layout state changes, including dark mode, PrimeNG theme, menu modes, and states.
            </p>

            <div class="font-semibold text-xl mb-4">Tailwind CSS</div>
            <p class="text-lg mb-4">The demo pages are developed with Tailwind CSS however the core application shell uses custom CSS.</p>

            <div class="font-semibold text-xl mb-4">Variables</div>
            <p class="text-lg mb-4">
                CSS variables used in the template are derived from the applied PrimeNG theme. Customize them through the CSS variables in <span class="bg-highlight px-2 py-1 rounded-border not-italic text-base">src/assets/layout/variables</span>.
            </p>
        </div>
    `, styles: ["/* angular:styles/component:scss;8e3f0b030d88dc23a8b89f67cf25473a98b55e2c985009a8d6c99cd68a094bfd;C:/Users/aureo/Documents/18 -  Mestrado Portugal/projeto_final/frontend-final/sakai-ng-master/src/app/pages/documentation/documentation.ts */\n@media screen and (max-width: 991px) {\n  .video-container {\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-bottom: 56.25%;\n  }\n  .video-container iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=documentation.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Documentation, { className: "Documentation", filePath: "src/app/pages/documentation/documentation.ts", lineNumber: 73 });
})();

export {
  Documentation
};
//# sourceMappingURL=chunk-H34R5TAN.js.map
