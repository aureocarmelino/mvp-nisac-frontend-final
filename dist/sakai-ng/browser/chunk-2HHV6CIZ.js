import {
  Documentation
} from "./chunk-H34R5TAN.js";
import {
  ProductService
} from "./chunk-TZNPKWFS.js";
import {
  BaseComponent,
  BaseStyle,
  Button,
  ButtonModule,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ConfirmEventType,
  ConfirmationService,
  ContentChild,
  ContentChildren,
  CurrencyPipe,
  DefaultValueAccessor,
  Dialog,
  DialogModule,
  EventEmitter,
  Footer,
  FormsModule,
  IconField,
  IconFieldModule,
  Injectable,
  Input,
  InputIcon,
  InputIconModule,
  InputNumber,
  InputNumberModule,
  InputText,
  InputTextModule,
  MessageService,
  NgClass,
  NgControlStatus,
  NgIf,
  NgModel,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Output,
  PrimeTemplate,
  RadioButton,
  RadioButtonModule,
  Rating,
  RatingModule,
  RequiredValidator,
  RippleModule,
  Select,
  SelectModule,
  SharedModule,
  SortIcon,
  SortableColumn,
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  TableModule,
  Tag,
  TagModule,
  Textarea,
  TextareaModule,
  ToastModule,
  Toolbar,
  ToolbarModule,
  TranslationKeys,
  ViewChild,
  ViewEncapsulation,
  __spreadValues,
  animate,
  animation,
  booleanAttribute,
  findSingle,
  inject,
  numberAttribute,
  setAttribute,
  setClassMetadata,
  signal,
  style,
  transition,
  trigger,
  useAnimation,
  uuid,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-ANAMEIXB.js";

// node_modules/primeng/fesm2022/primeng-confirmdialog.mjs
var _c0 = ["header"];
var _c1 = ["footer"];
var _c2 = ["rejecticon"];
var _c3 = ["accepticon"];
var _c4 = ["message"];
var _c5 = ["icon"];
var _c6 = ["headless"];
var _c7 = [[["p-footer"]]];
var _c8 = ["p-footer"];
var _c9 = (a0, a1, a2) => ({
  $implicit: a0,
  onAccept: a1,
  onReject: a2
});
var _c10 = (a0) => ({
  $implicit: a0
});
function ConfirmDialog_Conditional_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c9, ctx_r1.confirmation, ctx_r1.onAccept.bind(ctx_r1), ctx_r1.onReject.bind(ctx_r1)));
  }
}
function ConfirmDialog_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_2_ng_template_0_Template, 1, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_ng_container_1_Template, 1, 0, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.cx("header"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_Template, 2, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.iconTemplate || ctx_r1._iconTemplate);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.option("icon"));
    \u0275\u0275property("ngClass", ctx_r1.cx("icon"));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_i_0_Template, 1, 3, "i", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.option("icon"));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_Template, 1, 0, null, 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.messageTemplate || ctx_r1._messageTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c10, ctx_r1.confirmation));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.cx("message"))("innerHTML", ctx_r1.option("message"), \u0275\u0275sanitizeHtml);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_Template, 1, 1)(1, ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Template, 1, 1, "i", 9)(2, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_Template, 1, 4)(3, ConfirmDialog_Conditional_3_ng_template_1_Conditional_3_Template, 1, 2, "span", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.iconTemplate || ctx_r1._iconTemplate ? 0 : !ctx_r1.iconTemplate && !ctx_r1._iconTemplate && !ctx_r1._messageTemplate && !ctx_r1.messageTemplate ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.messageTemplate || ctx_r1._messageTemplate ? 2 : 3);
  }
}
function ConfirmDialog_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_Conditional_0_Template, 2, 0)(1, ConfirmDialog_Conditional_3_ng_template_1_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.headerTemplate || ctx_r1._headerTemplate ? 0 : -1);
  }
}
function ConfirmDialog_ng_template_4_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Conditional_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.option("rejectIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Conditional_1_i_0_Template, 1, 2, "i", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", ctx_r1.option("rejectIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_2_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275listener("onClick", function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReject());
    });
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Conditional_1_Template, 1, 1, "i", 14)(2, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_2_Template, 1, 0, null, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.rejectButtonLabel)("styleClass", ctx_r1.getButtonStyleClass("pcRejectButton", "rejectButtonStyleClass"))("ariaLabel", ctx_r1.option("rejectButtonProps", "ariaLabel"))("buttonProps", ctx_r1.getRejectButtonProps());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.rejectIcon && !ctx_r1.rejectIconTemplate && !ctx_r1._rejectIconTemplate ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rejectIconTemplate || ctx_r1._rejectIconTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Conditional_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.option("acceptIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Conditional_1_i_0_Template, 1, 2, "i", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", ctx_r1.option("acceptIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_2_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275listener("onClick", function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAccept());
    });
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Conditional_1_Template, 1, 1, "i", 14)(2, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_2_Template, 1, 0, null, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.acceptButtonLabel)("styleClass", ctx_r1.getButtonStyleClass("pcAcceptButton", "acceptButtonStyleClass"))("ariaLabel", ctx_r1.option("acceptButtonProps", "ariaLabel"))("buttonProps", ctx_r1.getAcceptButtonProps());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.acceptIcon && !ctx_r1._acceptIconTemplate && !ctx_r1.acceptIconTemplate ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.acceptIconTemplate || ctx_r1._acceptIconTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template, 3, 6, "p-button", 12)(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template, 3, 6, "p-button", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.option("rejectVisible"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.option("acceptVisible"));
  }
}
function ConfirmDialog_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_0_Template, 2, 1)(1, ConfirmDialog_ng_template_4_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.footerTemplate || ctx_r1._footerTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.footerTemplate && !ctx_r1._footerTemplate ? 1 : -1);
  }
}
var theme = ({
  dt
}) => `
.p-confirmdialog .p-dialog-content {
    display: flex;
    align-items: center;
    gap:  ${dt("confirmdialog.content.gap")};
}

.p-confirmdialog .p-confirmdialog-icon {
    color: ${dt("confirmdialog.icon.color")};
    font-size: ${dt("confirmdialog.icon.size")};
    width: ${dt("confirmdialog.icon.size")};
    height: ${dt("confirmdialog.icon.size")};
}
`;
var classes = {
  root: "p-confirmdialog",
  icon: "p-confirmdialog-icon",
  message: "p-confirmdialog-message",
  pcRejectButton: "p-confirmdialog-reject-button",
  pcAcceptButton: "p-confirmdialog-accept-button"
};
var ConfirmDialogStyle = class _ConfirmDialogStyle extends BaseStyle {
  name = "confirmdialog";
  theme = theme;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ConfirmDialogStyle_BaseFactory;
    return function ConfirmDialogStyle_Factory(__ngFactoryType__) {
      return (\u0275ConfirmDialogStyle_BaseFactory || (\u0275ConfirmDialogStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ConfirmDialogStyle)))(__ngFactoryType__ || _ConfirmDialogStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmDialogStyle,
    factory: _ConfirmDialogStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogStyle, [{
    type: Injectable
  }], null, null);
})();
var ConfirmDialogClasses;
(function(ConfirmDialogClasses2) {
  ConfirmDialogClasses2["root"] = "p-confirmdialog";
  ConfirmDialogClasses2["icon"] = "p-confirmdialog-icon";
  ConfirmDialogClasses2["message"] = "p-confirmdialog-message";
  ConfirmDialogClasses2["pcRejectButton"] = "p-confirmdialog-reject-button";
  ConfirmDialogClasses2["pcAcceptButton"] = "p-confirmdialog-accept-button";
})(ConfirmDialogClasses || (ConfirmDialogClasses = {}));
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}", style({
  transform: "none",
  opacity: 1
}))]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var ConfirmDialog = class _ConfirmDialog extends BaseComponent {
  confirmationService;
  zone;
  /**
   * Title text of the dialog.
   * @group Props
   */
  header;
  /**
   * Icon to display next to message.
   * @group Props
   */
  icon;
  /**
   * Message of the confirmation.
   * @group Props
   */
  message;
  /**
   * Inline style of the element.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Specify the CSS class(es) for styling the mask element
   * @group Props
   */
  maskStyleClass;
  /**
   * Icon of the accept button.
   * @group Props
   */
  acceptIcon;
  /**
   * Label of the accept button.
   * @group Props
   */
  acceptLabel;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Defines a string that labels the accept button for accessibility.
   * @group Props
   */
  acceptAriaLabel;
  /**
   * Visibility of the accept button.
   * @group Props
   */
  acceptVisible = true;
  /**
   * Icon of the reject button.
   * @group Props
   */
  rejectIcon;
  /**
   * Label of the reject button.
   * @group Props
   */
  rejectLabel;
  /**
   * Defines a string that labels the reject button for accessibility.
   * @group Props
   */
  rejectAriaLabel;
  /**
   * Visibility of the reject button.
   * @group Props
   */
  rejectVisible = true;
  /**
   * Style class of the accept button.
   * @group Props
   */
  acceptButtonStyleClass;
  /**
   * Style class of the reject button.
   * @group Props
   */
  rejectButtonStyleClass;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask;
  /**
   * Determines whether scrolling behavior should be blocked within the component.
   * @group Props
   */
  blockScroll = true;
  /**
   * When enabled dialog is displayed in RTL direction.
   * @group Props
   */
  rtl = false;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable = true;
  /**
   *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo = "body";
  /**
   * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
   * @group Props
   */
  key;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * When enabled, can only focus on elements inside the confirm dialog.
   * @group Props
   */
  focusTrap = true;
  /**
   * Element to receive the focus when the dialog gets visible.
   * @group Props
   */
  defaultFocus = "accept";
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Current visible state as a boolean.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
    this.cd.markForCheck();
  }
  /**
   *  Allows getting the position of the component.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "topleft":
      case "bottomleft":
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "topright":
      case "bottomright":
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
      default:
        this.transformOptions = "scale(0.7)";
        break;
    }
  }
  /**
   * Enables dragging to change the position using header.
   * @group Props
   */
  draggable = true;
  /**
   * Callback to invoke when dialog is hidden.
   * @param {ConfirmEventType} enum - Custom confirm event.
   * @group Emits
   */
  onHide = new EventEmitter();
  footer;
  _componentStyle = inject(ConfirmDialogStyle);
  headerTemplate;
  footerTemplate;
  rejectIconTemplate;
  acceptIconTemplate;
  messageTemplate;
  iconTemplate;
  headlessTemplate;
  templates;
  _headerTemplate;
  _footerTemplate;
  _rejectIconTemplate;
  _acceptIconTemplate;
  _messageTemplate;
  _iconTemplate;
  _headlessTemplate;
  confirmation;
  _visible;
  _style;
  maskVisible;
  dialog;
  wrapper;
  contentContainer;
  subscription;
  preWidth;
  _position = "center";
  transformOptions = "scale(0.7)";
  styleElement;
  id = uuid("pn_id_");
  ariaLabelledBy = this.getAriaLabelledBy();
  translationSubscription;
  get containerClass() {
    return this.cx("root") + " " + this.styleClass || " ";
  }
  constructor(confirmationService, zone) {
    super();
    this.confirmationService = confirmationService;
    this.zone = zone;
    this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
      if (!confirmation) {
        this.hide();
        return;
      }
      if (confirmation.key === this.key) {
        this.confirmation = confirmation;
        const keys = Object.keys(confirmation);
        keys.forEach((key) => {
          this[key] = confirmation[key];
        });
        if (this.confirmation.accept) {
          this.confirmation.acceptEvent = new EventEmitter();
          this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
        }
        if (this.confirmation.reject) {
          this.confirmation.rejectEvent = new EventEmitter();
          this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
        }
        this.visible = true;
      }
    });
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.breakpoints) {
      this.createStyle();
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      if (this.visible) {
        this.cd.markForCheck();
      }
    });
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "message":
          this._messageTemplate = item.template;
          break;
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "rejecticon":
          this._rejectIconTemplate = item.template;
          break;
        case "accepticon":
          this._acceptIconTemplate = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
      }
    });
  }
  getAriaLabelledBy() {
    return this.header !== null ? uuid("pn_id_") + "_header" : null;
  }
  option(name, k) {
    const source = this;
    if (source.hasOwnProperty(name)) {
      if (k) {
        return source[k];
      }
      return source[name];
    }
    return void 0;
  }
  getButtonStyleClass(cx, opt) {
    const cxClass = this.cx(cx);
    const optionClass = this.option(opt);
    return [cxClass, optionClass].filter(Boolean).join(" ");
  }
  getElementToFocus() {
    switch (this.option("defaultFocus")) {
      case "accept":
        return findSingle(this.dialog.el.nativeElement, ".p-confirm-dialog-accept");
      case "reject":
        return findSingle(this.dialog.el.nativeElement, ".p-confirm-dialog-reject");
      case "close":
        return findSingle(this.dialog.el.nativeElement, ".p-dialog-header-close");
      case "none":
        return null;
      //backward compatibility
      default:
        return findSingle(this.dialog.el.nativeElement, ".p-confirm-dialog-accept");
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.document.createElement("style");
      this.styleElement.type = "text/css";
      this.document.head.appendChild(this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${this.id}] {
                            width: ${this.breakpoints[breakpoint]} !important;
                        }
                    }
                `;
      }
      this.styleElement.innerHTML = innerHTML;
      setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  close() {
    if (this.confirmation?.rejectEvent) {
      this.confirmation.rejectEvent.emit(ConfirmEventType.CANCEL);
    }
    this.hide(ConfirmEventType.CANCEL);
  }
  hide(type) {
    this.onHide.emit(type);
    this.visible = false;
    this.unsubscribeConfirmationEvents();
    this.confirmation = null;
  }
  destroyStyle() {
    if (this.styleElement) {
      this.document.head.removeChild(this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.unsubscribeConfirmationEvents();
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    this.destroyStyle();
    super.ngOnDestroy();
  }
  onVisibleChange(value) {
    if (!value) {
      this.close();
    } else {
      this.visible = value;
    }
  }
  onAccept() {
    if (this.confirmation && this.confirmation.acceptEvent) {
      this.confirmation.acceptEvent.emit();
    }
    this.hide(ConfirmEventType.ACCEPT);
  }
  onReject() {
    if (this.confirmation && this.confirmation.rejectEvent) {
      this.confirmation.rejectEvent.emit(ConfirmEventType.REJECT);
    }
    this.hide(ConfirmEventType.REJECT);
  }
  unsubscribeConfirmationEvents() {
    if (this.confirmation) {
      this.confirmation.acceptEvent?.unsubscribe();
      this.confirmation.rejectEvent?.unsubscribe();
    }
  }
  get acceptButtonLabel() {
    return this.option("acceptLabel") || this.config.getTranslation(TranslationKeys.ACCEPT);
  }
  get rejectButtonLabel() {
    return this.option("rejectLabel") || this.config.getTranslation(TranslationKeys.REJECT);
  }
  getAcceptButtonProps() {
    return this.option("acceptButtonProps");
  }
  getRejectButtonProps() {
    return this.option("rejectButtonProps");
  }
  static \u0275fac = function ConfirmDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialog)(\u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ConfirmDialog,
    selectors: [["p-confirmDialog"], ["p-confirmdialog"], ["p-confirm-dialog"]],
    contentQueries: function ConfirmDialog_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, _c3, 4);
        \u0275\u0275contentQuery(dirIndex, _c4, 4);
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, _c6, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rejectIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.acceptIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messageTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      header: "header",
      icon: "icon",
      message: "message",
      style: "style",
      styleClass: "styleClass",
      maskStyleClass: "maskStyleClass",
      acceptIcon: "acceptIcon",
      acceptLabel: "acceptLabel",
      closeAriaLabel: "closeAriaLabel",
      acceptAriaLabel: "acceptAriaLabel",
      acceptVisible: [2, "acceptVisible", "acceptVisible", booleanAttribute],
      rejectIcon: "rejectIcon",
      rejectLabel: "rejectLabel",
      rejectAriaLabel: "rejectAriaLabel",
      rejectVisible: [2, "rejectVisible", "rejectVisible", booleanAttribute],
      acceptButtonStyleClass: "acceptButtonStyleClass",
      rejectButtonStyleClass: "rejectButtonStyleClass",
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
      dismissableMask: [2, "dismissableMask", "dismissableMask", booleanAttribute],
      blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
      rtl: [2, "rtl", "rtl", booleanAttribute],
      closable: [2, "closable", "closable", booleanAttribute],
      appendTo: "appendTo",
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      transitionOptions: "transitionOptions",
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      defaultFocus: "defaultFocus",
      breakpoints: "breakpoints",
      visible: "visible",
      position: "position",
      draggable: [2, "draggable", "draggable", booleanAttribute]
    },
    outputs: {
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([ConfirmDialogStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c8,
    decls: 6,
    vars: 14,
    consts: [["dialog", ""], ["footer", ""], ["headless", ""], ["content", ""], ["header", ""], ["role", "alertdialog", 3, "visibleChange", "visible", "closable", "styleClass", "modal", "header", "closeOnEscape", "blockScroll", "appendTo", "position", "dismissableMask", "draggable"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [4, "ngTemplateOutlet"], [3, "ngClass", "class"], [3, "ngClass", "innerHTML"], [3, "ngClass", "class", 4, "ngIf"], [3, "label", "styleClass", "ariaLabel", "buttonProps", "onClick", 4, "ngIf"], [3, "onClick", "label", "styleClass", "ariaLabel", "buttonProps"], [3, "class"], [3, "class", 4, "ngIf"]],
    template: function ConfirmDialog_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c7);
        \u0275\u0275elementStart(0, "p-dialog", 5, 0);
        \u0275\u0275listener("visibleChange", function ConfirmDialog_Template_p_dialog_visibleChange_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onVisibleChange($event));
        });
        \u0275\u0275template(2, ConfirmDialog_Conditional_2_Template, 2, 0)(3, ConfirmDialog_Conditional_3_Template, 3, 1)(4, ConfirmDialog_ng_template_4_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275property("visible", ctx.visible)("closable", ctx.option("closable"))("styleClass", ctx.containerClass)("modal", true)("header", ctx.option("header"))("closeOnEscape", ctx.option("closeOnEscape"))("blockScroll", ctx.option("blockScroll"))("appendTo", ctx.option("appendTo"))("position", ctx.position)("dismissableMask", ctx.dismissableMask)("draggable", ctx.draggable);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate || ctx._headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, Button, Dialog, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialog, [{
    type: Component,
    args: [{
      selector: "p-confirmDialog, p-confirmdialog, p-confirm-dialog",
      standalone: true,
      imports: [CommonModule, Button, Dialog, SharedModule],
      template: `
        <p-dialog
            #dialog
            [visible]="visible"
            (visibleChange)="onVisibleChange($event)"
            role="alertdialog"
            [closable]="option('closable')"
            [styleClass]="containerClass"
            [modal]="true"
            [header]="option('header')"
            [closeOnEscape]="option('closeOnEscape')"
            [blockScroll]="option('blockScroll')"
            [appendTo]="option('appendTo')"
            [position]="position"
            [style]="style"
            [dismissableMask]="dismissableMask"
            [draggable]="draggable"
        >
            @if (headlessTemplate || _headlessTemplate) {
                <ng-template #headless>
                    <ng-container
                        *ngTemplateOutlet="
                            headlessTemplate || _headlessTemplate;
                            context: {
                                $implicit: confirmation,
                                onAccept: onAccept.bind(this),
                                onReject: onReject.bind(this)
                            }
                        "
                    ></ng-container>
                </ng-template>
            } @else {
                @if (headerTemplate || _headerTemplate) {
                    <ng-template #header>
                        <div [ngClass]="cx('header')">
                            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                        </div>
                    </ng-template>
                }

                <ng-template #content>
                    @if (iconTemplate || _iconTemplate) {
                        <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
                    } @else if (!iconTemplate && !_iconTemplate && !_messageTemplate && !messageTemplate) {
                        <i [ngClass]="cx('icon')" [class]="option('icon')" *ngIf="option('icon')"></i>
                    }
                    @if (messageTemplate || _messageTemplate) {
                        <ng-template *ngTemplateOutlet="messageTemplate || _messageTemplate; context: { $implicit: confirmation }"></ng-template>
                    } @else {
                        <span [ngClass]="cx('message')" [innerHTML]="option('message')"> </span>
                    }
                </ng-template>
            }
            <ng-template #footer>
                @if (footerTemplate || _footerTemplate) {
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                }
                @if (!footerTemplate && !_footerTemplate) {
                    <p-button
                        *ngIf="option('rejectVisible')"
                        [label]="rejectButtonLabel"
                        (onClick)="onReject()"
                        [styleClass]="getButtonStyleClass('pcRejectButton', 'rejectButtonStyleClass')"
                        [ariaLabel]="option('rejectButtonProps', 'ariaLabel')"
                        [buttonProps]="getRejectButtonProps()"
                    >
                        @if (rejectIcon && !rejectIconTemplate && !_rejectIconTemplate) {
                            <i *ngIf="option('rejectIcon')" [class]="option('rejectIcon')"></i>
                        }
                        <ng-template *ngTemplateOutlet="rejectIconTemplate || _rejectIconTemplate"></ng-template>
                    </p-button>
                    <p-button
                        [label]="acceptButtonLabel"
                        (onClick)="onAccept()"
                        [styleClass]="getButtonStyleClass('pcAcceptButton', 'acceptButtonStyleClass')"
                        *ngIf="option('acceptVisible')"
                        [ariaLabel]="option('acceptButtonProps', 'ariaLabel')"
                        [buttonProps]="getAcceptButtonProps()"
                    >
                        @if (acceptIcon && !_acceptIconTemplate && !acceptIconTemplate) {
                            <i *ngIf="option('acceptIcon')" [class]="option('acceptIcon')"></i>
                        }
                        <ng-template *ngTemplateOutlet="acceptIconTemplate || _acceptIconTemplate"></ng-template>
                    </p-button>
                }
            </ng-template>
        </p-dialog>
    `,
      animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ConfirmDialogStyle]
    }]
  }], () => [{
    type: ConfirmationService
  }, {
    type: NgZone
  }], {
    header: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    message: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    maskStyleClass: [{
      type: Input
    }],
    acceptIcon: [{
      type: Input
    }],
    acceptLabel: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    acceptAriaLabel: [{
      type: Input
    }],
    acceptVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rejectIcon: [{
      type: Input
    }],
    rejectLabel: [{
      type: Input
    }],
    rejectAriaLabel: [{
      type: Input
    }],
    rejectVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    acceptButtonStyleClass: [{
      type: Input
    }],
    rejectButtonStyleClass: [{
      type: Input
    }],
    closeOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dismissableMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    blockScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rtl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    defaultFocus: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    draggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onHide: [{
      type: Output
    }],
    footer: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    rejectIconTemplate: [{
      type: ContentChild,
      args: ["rejecticon", {
        descendants: false
      }]
    }],
    acceptIconTemplate: [{
      type: ContentChild,
      args: ["accepticon", {
        descendants: false
      }]
    }],
    messageTemplate: [{
      type: ContentChild,
      args: ["message", {
        descendants: false
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ConfirmDialogModule = class _ConfirmDialogModule {
  static \u0275fac = function ConfirmDialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ConfirmDialogModule,
    imports: [ConfirmDialog, SharedModule],
    exports: [ConfirmDialog, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ConfirmDialog, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogModule, [{
    type: NgModule,
    args: [{
      imports: [ConfirmDialog, SharedModule],
      exports: [ConfirmDialog, SharedModule]
    }]
  }], null, null);
})();

// src/app/pages/crud/crud.ts
var _c02 = ["dt"];
var _c12 = () => ["name", "country.name", "representative.name", "status"];
var _c22 = () => ({ "min-width": "75rem" });
var _c32 = () => [10, 20, 30];
var _c42 = () => ({ width: "450px" });
function Crud_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 11);
    \u0275\u0275listener("onClick", function Crud_ng_template_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 12);
    \u0275\u0275listener("onClick", function Crud_ng_template_1_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelectedProducts());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.selectedProducts || !ctx_r2.selectedProducts.length);
  }
}
function Crud_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275listener("onClick", function Crud_ng_template_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
  }
}
function Crud_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "h5", 15);
    \u0275\u0275text(2, "Manage Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-iconfield");
    \u0275\u0275element(4, "p-inputicon", 16);
    \u0275\u0275elementStart(5, "input", 17);
    \u0275\u0275listener("input", function Crud_ng_template_7_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      const dt_r6 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(ctx_r2.onGlobalFilter(dt_r6, $event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function Crud_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 18);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 19);
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 20);
    \u0275\u0275text(6, " Name ");
    \u0275\u0275element(7, "p-sortIcon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 22);
    \u0275\u0275text(11, " Price ");
    \u0275\u0275element(12, "p-sortIcon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 24);
    \u0275\u0275text(14, " Category ");
    \u0275\u0275element(15, "p-sortIcon", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 26);
    \u0275\u0275text(17, " Reviews ");
    \u0275\u0275element(18, "p-sortIcon", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 28);
    \u0275\u0275text(20, " Status ");
    \u0275\u0275element(21, "p-sortIcon", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "th", 30);
    \u0275\u0275elementEnd();
  }
}
function Crud_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 18);
    \u0275\u0275element(2, "p-tableCheckbox", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "p-rating", 33);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_11_Template_p_rating_ngModelChange_15_listener($event) {
      const product_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(product_r8.rating, $event) || (product_r8.rating = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275element(17, "p-tag", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "p-button", 35);
    \u0275\u0275listener("click", function Crud_ng_template_11_Template_p_button_click_19_listener() {
      const product_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editProduct(product_r8));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p-button", 36);
    \u0275\u0275listener("click", function Crud_ng_template_11_Template_p_button_click_20_listener() {
      const product_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteProduct(product_r8));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", product_r8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r8.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "https://primefaces.org/cdn/primeng/images/demo/product/" + product_r8.image, \u0275\u0275sanitizeUrl)("alt", product_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 15, product_r8.price, "USD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r8.category);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", product_r8.rating);
    \u0275\u0275property("readonly", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", product_r8.inventoryStatus)("severity", ctx_r2.getSeverity(product_r8.inventoryStatus));
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function Crud_ng_template_14_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 62);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", "https://primefaces.org/cdn/primeng/images/demo/product/" + ctx_r2.product.image, \u0275\u0275sanitizeUrl)("alt", ctx_r2.product.image);
  }
}
function Crud_ng_template_14_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 63);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function Crud_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, Crud_ng_template_14_img_1_Template, 1, 2, "img", 38);
    \u0275\u0275elementStart(2, "div")(3, "label", 39);
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.name, $event) || (ctx_r2.product.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Crud_ng_template_14_small_6_Template, 2, 0, "small", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "label", 42);
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 43);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.description, $event) || (ctx_r2.product.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 44);
    \u0275\u0275text(13, "Inventory Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.inventoryStatus, $event) || (ctx_r2.product.inventoryStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "span", 46);
    \u0275\u0275text(17, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 47)(19, "div", 48)(20, "p-radiobutton", 49);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_radiobutton_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.category, $event) || (ctx_r2.product.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 50);
    \u0275\u0275text(22, "Accessories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 48)(24, "p-radiobutton", 51);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_radiobutton_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.category, $event) || (ctx_r2.product.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 52);
    \u0275\u0275text(26, "Clothing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 48)(28, "p-radiobutton", 53);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_radiobutton_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.category, $event) || (ctx_r2.product.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "label", 54);
    \u0275\u0275text(30, "Electronics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 48)(32, "p-radiobutton", 55);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_radiobutton_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.category, $event) || (ctx_r2.product.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "label", 56);
    \u0275\u0275text(34, "Fitness");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 47)(36, "div", 57)(37, "label", 58);
    \u0275\u0275text(38, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p-inputnumber", 59);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_inputnumber_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.price, $event) || (ctx_r2.product.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 57)(41, "label", 60);
    \u0275\u0275text(42, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p-inputnumber", 61);
    \u0275\u0275twoWayListener("ngModelChange", function Crud_ng_template_14_Template_p_inputnumber_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.quantity, $event) || (ctx_r2.product.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.product.image);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.submitted && !ctx_r2.product.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.inventoryStatus);
    \u0275\u0275property("options", ctx_r2.statuses);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.category);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.category);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.category);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.category);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.quantity);
  }
}
function Crud_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 64);
    \u0275\u0275listener("click", function Crud_ng_template_16_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 65);
    \u0275\u0275listener("click", function Crud_ng_template_16_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveProduct());
    });
    \u0275\u0275elementEnd();
  }
}
var Crud = class _Crud {
  productService;
  messageService;
  confirmationService;
  productDialog = false;
  products = signal([]);
  product;
  selectedProducts;
  submitted = false;
  statuses;
  dt;
  exportColumns;
  cols;
  constructor(productService, messageService, confirmationService) {
    this.productService = productService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
  }
  exportCSV() {
    this.dt.exportCSV();
  }
  ngOnInit() {
    this.loadDemoData();
  }
  loadDemoData() {
    this.productService.getProducts().then((data) => {
      this.products.set(data);
    });
    this.statuses = [
      { label: "INSTOCK", value: "instock" },
      { label: "LOWSTOCK", value: "lowstock" },
      { label: "OUTOFSTOCK", value: "outofstock" }
    ];
    this.cols = [
      { field: "code", header: "Code", customExportHeader: "Product Code" },
      { field: "name", header: "Name" },
      { field: "image", header: "Image" },
      { field: "price", header: "Price" },
      { field: "category", header: "Category" }
    ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }
  editProduct(product) {
    this.product = __spreadValues({}, product);
    this.productDialog = true;
  }
  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete the selected products?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.products.set(this.products().filter((val) => !this.selectedProducts?.includes(val)));
        this.selectedProducts = null;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Products Deleted",
          life: 3e3
        });
      }
    });
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
  deleteProduct(product) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete " + product.name + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.products.set(this.products().filter((val) => val.id !== product.id));
        this.product = {};
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Product Deleted",
          life: 3e3
        });
      }
    });
  }
  findIndexById(id) {
    let index = -1;
    for (let i = 0; i < this.products().length; i++) {
      if (this.products()[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
  createId() {
    let id = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
  getSeverity(status) {
    switch (status) {
      case "INSTOCK":
        return "success";
      case "LOWSTOCK":
        return "warn";
      case "OUTOFSTOCK":
        return "danger";
      default:
        return "info";
    }
  }
  saveProduct() {
    this.submitted = true;
    let _products = this.products();
    if (this.product.name?.trim()) {
      if (this.product.id) {
        _products[this.findIndexById(this.product.id)] = this.product;
        this.products.set([..._products]);
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Product Updated",
          life: 3e3
        });
      } else {
        this.product.id = this.createId();
        this.product.image = "product-placeholder.svg";
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Product Created",
          life: 3e3
        });
        this.products.set([..._products, this.product]);
      }
      this.productDialog = false;
      this.product = {};
    }
  }
  static \u0275fac = function Crud_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Crud)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Crud, selectors: [["app-crud"]], viewQuery: function Crud_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService, ProductService, ConfirmationService])], decls: 19, vars: 21, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["content", ""], ["footer", ""], ["styleClass", "mb-6"], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} products", 3, "selectionChange", "value", "rows", "columns", "paginator", "globalFilterFields", "tableStyle", "selection", "rowHover", "showCurrentPageReport", "rowsPerPageOptions"], ["header", "Product Details", 3, "visibleChange", "visible", "modal"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 1, "mr-2", 3, "onClick"], ["severity", "secondary", "label", "Delete", "icon", "pi pi-trash", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], [1, "flex", "items-center", "justify-between"], [1, "m-0"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search...", 3, "input"], [2, "width", "3rem"], [2, "min-width", "16rem"], ["pSortableColumn", "name", 2, "min-width", "16rem"], ["field", "name"], ["pSortableColumn", "price", 2, "min-width", "8rem"], ["field", "price"], ["pSortableColumn", "category", 2, "min-width", "10rem"], ["field", "category"], ["pSortableColumn", "rating", 2, "min-width", "12rem"], ["field", "rating"], ["pSortableColumn", "inventoryStatus", 2, "min-width", "12rem"], ["field", "inventoryStatus"], [2, "min-width", "12rem"], [3, "value"], [1, "rounded", 2, "width", "64px", 3, "src", "alt"], [3, "ngModelChange", "ngModel", "readonly"], [3, "value", "severity"], ["icon", "pi pi-pencil", 1, "mr-2", 3, "click", "rounded", "outlined"], ["icon", "pi pi-trash", "severity", "danger", 3, "click", "rounded", "outlined"], [1, "flex", "flex-col", "gap-6"], ["class", "block m-auto pb-4", 3, "src", "alt", 4, "ngIf"], ["for", "name", 1, "block", "font-bold", "mb-3"], ["type", "text", "pInputText", "", "id", "name", "required", "", "autofocus", "", "fluid", "", 3, "ngModelChange", "ngModel"], ["class", "text-red-500", 4, "ngIf"], ["for", "description", 1, "block", "font-bold", "mb-3"], ["id", "description", "pTextarea", "", "required", "", "rows", "3", "cols", "20", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "inventoryStatus", 1, "block", "font-bold", "mb-3"], ["inputId", "inventoryStatus", "optionLabel", "label", "optionValue", "label", "placeholder", "Select a Status", "fluid", "", 3, "ngModelChange", "ngModel", "options"], [1, "block", "font-bold", "mb-4"], [1, "grid", "grid-cols-12", "gap-4"], [1, "flex", "items-center", "gap-2", "col-span-6"], ["id", "category1", "name", "category", "value", "Accessories", 3, "ngModelChange", "ngModel"], ["for", "category1"], ["id", "category2", "name", "category", "value", "Clothing", 3, "ngModelChange", "ngModel"], ["for", "category2"], ["id", "category3", "name", "category", "value", "Electronics", 3, "ngModelChange", "ngModel"], ["for", "category3"], ["id", "category4", "name", "category", "value", "Fitness", 3, "ngModelChange", "ngModel"], ["for", "category4"], [1, "col-span-6"], ["for", "price", 1, "block", "font-bold", "mb-3"], ["id", "price", "mode", "currency", "currency", "USD", "locale", "en-US", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "quantity", 1, "block", "font-bold", "mb-3"], ["id", "quantity", "fluid", "", 3, "ngModelChange", "ngModel"], [1, "block", "m-auto", "pb-4", 3, "src", "alt"], [1, "text-red-500"], ["label", "Cancel", "icon", "pi pi-times", "text", "", 3, "click"], ["label", "Save", "icon", "pi pi-check", 3, "click"]], template: function Crud_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-toolbar", 8);
      \u0275\u0275template(1, Crud_ng_template_1_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, Crud_ng_template_3_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p-table", 9, 2);
      \u0275\u0275twoWayListener("selectionChange", function Crud_Template_p_table_selectionChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedProducts, $event) || (ctx.selectedProducts = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(7, Crud_ng_template_7_Template, 6, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(9, Crud_ng_template_9_Template, 23, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(11, Crud_ng_template_11_Template, 21, 18, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p-dialog", 10);
      \u0275\u0275twoWayListener("visibleChange", function Crud_Template_p_dialog_visibleChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.productDialog, $event) || (ctx.productDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(14, Crud_ng_template_14_Template, 44, 12, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(16, Crud_ng_template_16_Template, 2, 0, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "p-confirmdialog");
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.products())("rows", 10)("columns", ctx.cols)("paginator", true)("globalFilterFields", \u0275\u0275pureFunction0(16, _c12))("tableStyle", \u0275\u0275pureFunction0(17, _c22));
      \u0275\u0275twoWayProperty("selection", ctx.selectedProducts);
      \u0275\u0275property("rowHover", true)("showCurrentPageReport", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(18, _c32));
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c42));
      \u0275\u0275twoWayProperty("visible", ctx.productDialog);
      \u0275\u0275property("modal", true);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c42));
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    CurrencyPipe,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    TableCheckbox,
    TableHeaderCheckbox,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    RequiredValidator,
    NgModel,
    ButtonModule,
    Button,
    RippleModule,
    ToastModule,
    ToolbarModule,
    Toolbar,
    RatingModule,
    Rating,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    SelectModule,
    Select,
    RadioButtonModule,
    RadioButton,
    InputNumberModule,
    InputNumber,
    DialogModule,
    Dialog,
    TagModule,
    Tag,
    InputIconModule,
    InputIcon,
    IconFieldModule,
    IconField,
    ConfirmDialogModule,
    ConfirmDialog
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Crud, [{
    type: Component,
    args: [{
      selector: "app-crud",
      standalone: true,
      imports: [
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        TextareaModule,
        SelectModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        TagModule,
        InputIconModule,
        IconFieldModule,
        ConfirmDialogModule
      ],
      template: `
        <p-toolbar styleClass="mb-6">
            <ng-template #start>
                <p-button label="New" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNew()" />
                <p-button severity="secondary" label="Delete" icon="pi pi-trash" outlined (onClick)="deleteSelectedProducts()" [disabled]="!selectedProducts || !selectedProducts.length" />
            </ng-template>

            <ng-template #end>
                <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
            </ng-template>
        </p-toolbar>

        <p-table
            #dt
            [value]="products()"
            [rows]="10"
            [columns]="cols"
            [paginator]="true"
            [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
            [tableStyle]="{ 'min-width': '75rem' }"
            [(selection)]="selectedProducts"
            [rowHover]="true"
            dataKey="id"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            [showCurrentPageReport]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
        >
            <ng-template #caption>
                <div class="flex items-center justify-between">
                    <h5 class="m-0">Manage Products</h5>
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Search..." />
                    </p-iconfield>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 3rem">
                        <p-tableHeaderCheckbox />
                    </th>
                    <th style="min-width: 16rem">Code</th>
                    <th pSortableColumn="name" style="min-width:16rem">
                        Name
                        <p-sortIcon field="name" />
                    </th>
                    <th>Image</th>
                    <th pSortableColumn="price" style="min-width: 8rem">
                        Price
                        <p-sortIcon field="price" />
                    </th>
                    <th pSortableColumn="category" style="min-width:10rem">
                        Category
                        <p-sortIcon field="category" />
                    </th>
                    <th pSortableColumn="rating" style="min-width: 12rem">
                        Reviews
                        <p-sortIcon field="rating" />
                    </th>
                    <th pSortableColumn="inventoryStatus" style="min-width: 12rem">
                        Status
                        <p-sortIcon field="inventoryStatus" />
                    </th>
                    <th style="min-width: 12rem"></th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="product" />
                    </td>
                    <td style="min-width: 12rem">{{ product.code }}</td>
                    <td style="min-width: 16rem">{{ product.name }}</td>
                    <td>
                        <img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" style="width: 64px" class="rounded" />
                    </td>
                    <td>{{ product.price | currency: 'USD' }}</td>
                    <td>{{ product.category }}</td>
                    <td>
                        <p-rating [(ngModel)]="product.rating" [readonly]="true" />
                    </td>
                    <td>
                        <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" />
                    </td>
                    <td>
                        <p-button icon="pi pi-pencil" class="mr-2" [rounded]="true" [outlined]="true" (click)="editProduct(product)" />
                        <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (click)="deleteProduct(product)" />
                    </td>
                </tr>
            </ng-template>
        </p-table>

        <p-dialog [(visible)]="productDialog" [style]="{ width: '450px' }" header="Product Details" [modal]="true">
            <ng-template #content>
                <div class="flex flex-col gap-6">
                    <img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.image" class="block m-auto pb-4" *ngIf="product.image" />
                    <div>
                        <label for="name" class="block font-bold mb-3">Name</label>
                        <input type="text" pInputText id="name" [(ngModel)]="product.name" required autofocus fluid />
                        <small class="text-red-500" *ngIf="submitted && !product.name">Name is required.</small>
                    </div>
                    <div>
                        <label for="description" class="block font-bold mb-3">Description</label>
                        <textarea id="description" pTextarea [(ngModel)]="product.description" required rows="3" cols="20" fluid></textarea>
                    </div>

                    <div>
                        <label for="inventoryStatus" class="block font-bold mb-3">Inventory Status</label>
                        <p-select [(ngModel)]="product.inventoryStatus" inputId="inventoryStatus" [options]="statuses" optionLabel="label" optionValue="label" placeholder="Select a Status" fluid />
                    </div>

                    <div>
                        <span class="block font-bold mb-4">Category</span>
                        <div class="grid grid-cols-12 gap-4">
                            <div class="flex items-center gap-2 col-span-6">
                                <p-radiobutton id="category1" name="category" value="Accessories" [(ngModel)]="product.category" />
                                <label for="category1">Accessories</label>
                            </div>
                            <div class="flex items-center gap-2 col-span-6">
                                <p-radiobutton id="category2" name="category" value="Clothing" [(ngModel)]="product.category" />
                                <label for="category2">Clothing</label>
                            </div>
                            <div class="flex items-center gap-2 col-span-6">
                                <p-radiobutton id="category3" name="category" value="Electronics" [(ngModel)]="product.category" />
                                <label for="category3">Electronics</label>
                            </div>
                            <div class="flex items-center gap-2 col-span-6">
                                <p-radiobutton id="category4" name="category" value="Fitness" [(ngModel)]="product.category" />
                                <label for="category4">Fitness</label>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-6">
                            <label for="price" class="block font-bold mb-3">Price</label>
                            <p-inputnumber id="price" [(ngModel)]="product.price" mode="currency" currency="USD" locale="en-US" fluid />
                        </div>
                        <div class="col-span-6">
                            <label for="quantity" class="block font-bold mb-3">Quantity</label>
                            <p-inputnumber id="quantity" [(ngModel)]="product.quantity" fluid />
                        </div>
                    </div>
                </div>
            </ng-template>

            <ng-template #footer>
                <p-button label="Cancel" icon="pi pi-times" text (click)="hideDialog()" />
                <p-button label="Save" icon="pi pi-check" (click)="saveProduct()" />
            </ng-template>
        </p-dialog>

        <p-confirmdialog [style]="{ width: '450px' }" />
    `,
      providers: [MessageService, ProductService, ConfirmationService]
    }]
  }], () => [{ type: ProductService }, { type: MessageService }, { type: ConfirmationService }], { dt: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Crud, { className: "Crud", filePath: "src/app/pages/crud/crud.ts", lineNumber: 213 });
})();

// src/app/pages/empty/empty.ts
var Empty = class _Empty {
  static \u0275fac = function Empty_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Empty)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Empty, selectors: [["app-empty"]], decls: 5, vars: 0, consts: [[1, "card"], [1, "font-semibold", "text-xl", "mb-4"]], template: function Empty_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Empty Page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, "Use this page to start from scratch and place your custom content.");
      \u0275\u0275elementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Empty, [{
    type: Component,
    args: [{
      selector: "app-empty",
      standalone: true,
      template: ` <div class="card">
        <div class="font-semibold text-xl mb-4">Empty Page</div>
        <p>Use this page to start from scratch and place your custom content.</p>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Empty, { className: "Empty", filePath: "src/app/pages/empty/empty.ts", lineNumber: 11 });
})();

// src/app/pages/pages.routes.ts
var pages_routes_default = [
  { path: "documentation", component: Documentation },
  { path: "crud", component: Crud },
  { path: "empty", component: Empty },
  { path: "**", redirectTo: "/notfound" }
];
export {
  pages_routes_default as default
};
//# sourceMappingURL=chunk-2HHV6CIZ.js.map
