/* @ds-bundle: {"format":4,"namespace":"SlateDesignSystem_df4b74","components":[{"name":"Price","sourcePath":"components/commerce/Price.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Media","sourcePath":"components/core/Media.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/commerce/Price.jsx":"c0408ded6f69","components/commerce/ProductCard.jsx":"73ac172a29ff","components/core/Badge.jsx":"086df2cbada9","components/core/Button.jsx":"72ccd1d2c9d8","components/core/Icon.jsx":"e4b7ef8618bc","components/core/IconButton.jsx":"7fc56af23990","components/core/Media.jsx":"11c94a86d9e8","components/core/Tag.jsx":"d3c012e069d6","components/core/Wordmark.jsx":"a78664fb2afe","components/feedback/Dialog.jsx":"243c07a484ab","components/feedback/Toast.jsx":"b06d8aa07ce0","components/feedback/Tooltip.jsx":"56b3dc79e6bc","components/forms/Checkbox.jsx":"100b00e0edd8","components/forms/Input.jsx":"d9f4b9bc2689","components/forms/QuantityStepper.jsx":"2972a920ebc4","components/forms/Radio.jsx":"f98b3f704820","components/forms/Select.jsx":"f13c00905e44","components/forms/Switch.jsx":"acf4570e2d2e","components/navigation/Tabs.jsx":"86674d3d62ef","ui_kits/app/app-screens.js":"55b63f668afa","ui_kits/app/chrome.js":"e83a9dad7bc6","ui_kits/kiosk/kiosk-screens.js":"d871f2a9d78c","ui_kits/shared/data.js":"c00ab0341586","ui_kits/website/cart.js":"8e579a4c13c5","ui_kits/website/header.js":"0de3d66090dc","ui_kits/website/home.js":"11e7b3c3836a","ui_kits/website/listing.js":"2bc552867dd5","ui_kits/website/product.js":"ad1de03e35de"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SlateDesignSystem_df4b74 = window.SlateDesignSystem_df4b74 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/Price.jsx
try { (() => {
const fmt = n => '₩' + Number(n).toLocaleString('ko-KR');
function Price({
  amount,
  compareAt,
  size = 'm',
  inverse = false,
  style
}) {
  const fs = {
    s: 13,
    m: 15,
    l: 20,
    kiosk: 28
  }[size] || 15;
  const off = compareAt && compareAt > amount ? Math.round((1 - amount / compareAt) * 100) : 0;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      color: inverse ? 'var(--text-inverse)' : 'var(--text-primary)',
      ...style
    }
  }, off > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ice-700)'
    }
  }, off, "%"), /*#__PURE__*/React.createElement("span", null, fmt(amount)), off > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: fs * 0.85,
      color: 'var(--text-tertiary)',
      textDecoration: 'line-through'
    }
  }, fmt(compareAt)));
}
Object.assign(__ds_scope, { Price });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Price.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const T = {
  neutral: ['var(--surface-muted)', 'var(--text-primary)'],
  inverse: ['var(--surface-inverse)', 'var(--text-inverse)'],
  accent: ['var(--ice-200)', 'var(--charcoal-900)'],
  outline: ['transparent', 'var(--text-primary)'],
  success: ['var(--status-success-bg)', 'var(--status-success)'],
  warning: ['var(--status-warning-bg)', 'var(--status-warning)'],
  error: ['var(--status-error-bg)', 'var(--status-error)']
};
function Badge({
  tone = 'neutral',
  children,
  style
}) {
  const [bg, fg] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 20,
      padding: '0 7px',
      background: bg,
      color: fg,
      border: tone === 'outline' ? '1px solid var(--border-strong)' : 'none',
      borderRadius: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: 10,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const BASE = 'https://unpkg.com/lucide-static@0.460.0/icons/';
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  label,
  style
}) {
  const m = `url(${BASE}${name}.svg) center/contain no-repeat`;
  return /*#__PURE__*/React.createElement("span", {
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      background: color,
      WebkitMask: m,
      mask: m,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  s: [36, 14, 11, 16],
  m: [44, 20, 12, 16],
  l: [56, 28, 13, 18],
  kiosk: [80, 40, 18, 24]
};
function Button({
  variant = 'primary',
  size = 'm',
  fullWidth = false,
  iconLeft,
  iconRight,
  disabled = false,
  type = 'button',
  onClick,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const [H, px, fs, is] = SIZES[size] || SIZES.m;
  const V = {
    primary: [p ? 'var(--action-primary-press)' : h ? 'var(--action-primary-hover)' : 'var(--action-primary)', 'var(--text-inverse)', 'transparent'],
    secondary: [h ? 'var(--surface-subtle)' : 'transparent', 'var(--text-primary)', 'var(--border-strong)'],
    accent: [h ? 'var(--action-accent-hover)' : 'var(--action-accent)', 'var(--text-on-accent)', 'transparent'],
    ghost: [h ? 'var(--surface-muted)' : 'transparent', 'var(--text-primary)', 'transparent'],
    inverse: [h ? 'var(--charcoal-100)' : 'var(--white)', 'var(--text-primary)', 'transparent']
  }[variant] || [];
  let [bg, fg, bd] = V;
  if (disabled) {
    bg = variant === 'ghost' || variant === 'secondary' ? 'transparent' : 'var(--surface-muted)';
    fg = 'var(--text-disabled)';
    bd = variant === 'secondary' ? 'var(--border-hairline)' : 'transparent';
  }
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: size === 'kiosk' ? 12 : 8,
      height: H,
      padding: `0 ${px}px`,
      border: `1px solid ${bd}`,
      borderRadius: 0,
      background: bg,
      color: fg,
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: fs,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      transition: 'background var(--dur-fast) var(--ease-standard),color var(--dur-fast)',
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: is
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: is
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'm',
  count,
  disabled = false,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const S = {
    s: [36, 16],
    m: [44, 20],
    l: [56, 24],
    kiosk: [80, 28]
  }[size] || [44, 20];
  const V = {
    ghost: [h ? 'var(--surface-muted)' : 'transparent', 'var(--text-primary)', 'transparent'],
    secondary: [h ? 'var(--surface-subtle)' : 'transparent', 'var(--text-primary)', 'var(--border-default)'],
    primary: [h ? 'var(--action-primary-hover)' : 'var(--action-primary)', 'var(--text-inverse)', 'transparent'],
    inverse: [h ? 'rgba(255,255,255,.12)' : 'transparent', 'var(--text-inverse)', 'transparent']
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: S[0],
      height: S[0],
      padding: 0,
      background: V[0],
      color: disabled ? 'var(--text-disabled)' : V[1],
      border: `1px solid ${V[2]}`,
      borderRadius: 0,
      cursor: disabled ? 'default' : 'pointer',
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: S[1]
  }), count > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: S[0] * 0.14,
      right: S[0] * 0.1,
      minWidth: 16,
      height: 16,
      padding: '0 4px',
      background: 'var(--ice-300)',
      color: 'var(--charcoal-900)',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      lineHeight: '16px',
      textAlign: 'center'
    }
  }, count));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Media.jsx
try { (() => {
const TONE = {
  subtle: 'var(--surface-subtle)',
  muted: 'var(--charcoal-200)',
  accent: 'var(--ice-100)',
  dark: 'var(--charcoal-800)'
};
function Media({
  src,
  alt = '',
  ratio = '4/5',
  tone = 'subtle',
  label,
  style,
  children
}) {
  const [ok, setOk] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      background: TONE[tone] || TONE.subtle,
      overflow: 'hidden',
      ...style
    }
  }, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onLoad: () => setOk(true),
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: ok ? 1 : 0,
      transition: 'opacity var(--dur-image) var(--ease-standard)'
    }
  }), !src && label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 10,
      bottom: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.02em',
      color: tone === 'dark' ? 'var(--charcoal-400)' : 'var(--text-tertiary)'
    }
  }, label), children);
}
Object.assign(__ds_scope, { Media });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Media.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function ProductCard({
  image,
  name,
  brand,
  price,
  compareAt,
  badge,
  badgeTone = 'accent',
  colors,
  wished = false,
  onWish,
  onClick,
  onQuickAdd,
  soldOut = false,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      cursor: onClick ? 'pointer' : 'default',
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Media, {
    src: image,
    ratio: "4/5",
    label: image ? undefined : 'PRODUCT 4:5'
  }, (badge || soldOut) && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: soldOut ? 'inverse' : badgeTone
  }, soldOut ? 'Sold out' : badge)), onWish && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 2
    },
    onClick: e => {
      e.stopPropagation();
      onWish();
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "heart",
    label: "\uC704\uC2DC\uB9AC\uC2A4\uD2B8",
    size: "s",
    style: {
      color: wished ? 'var(--ice-700)' : undefined
    }
  })), onQuickAdd && !soldOut && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onQuickAdd();
    },
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 40,
      border: 0,
      background: 'var(--surface-header-glass)',
      backdropFilter: 'var(--blur-header)',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: 11,
      color: 'var(--text-primary)',
      opacity: h ? 1 : 0,
      transform: h ? 'none' : 'translateY(8px)',
      transition: 'all var(--dur-base) var(--ease-standard)'
    }
  }, "Quick add")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, brand && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: 10,
      color: 'var(--text-tertiary)'
    }
  }, brand), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: 1.4,
      color: soldOut ? 'var(--text-tertiary)' : 'var(--text-primary)',
      textDecoration: h && onClick ? 'underline' : 'none',
      textUnderlineOffset: 3
    }
  }, name), /*#__PURE__*/React.createElement(__ds_scope.Price, {
    amount: price,
    compareAt: compareAt,
    size: "s",
    style: {
      color: soldOut ? 'var(--text-tertiary)' : undefined
    }
  }), colors && colors.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 4,
      marginTop: 4
    }
  }, colors.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 10,
      height: 10,
      background: c,
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.12)'
    }
  })))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected = false,
  onClick,
  onRemove,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 32,
      padding: onRemove ? '0 8px 0 12px' : '0 12px',
      cursor: onClick ? 'pointer' : 'default',
      background: selected ? 'var(--surface-inverse)' : h && onClick ? 'var(--surface-subtle)' : 'transparent',
      color: selected ? 'var(--text-inverse)' : 'var(--text-primary)',
      border: `1px solid ${selected ? 'var(--border-strong)' : h && onClick ? 'var(--border-strong)' : 'var(--border-default)'}`,
      borderRadius: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      whiteSpace: 'nowrap',
      transition: 'all var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "\uC0AD\uC81C",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function Wordmark({
  size = 20,
  inverse = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-label": "Slate",
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontStretch: '118%',
      fontSize: size,
      letterSpacing: '0.32em',
      marginRight: '-0.32em',
      lineHeight: 1,
      color: inverse ? 'var(--text-inverse)' : 'var(--text-primary)',
      ...style
    }
  }, "SLATE");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  actions,
  variant = 'center',
  width = 480,
  style
}) {
  if (!open) return null;
  const drawer = variant === 'drawer';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--z-overlay)',
      background: 'var(--surface-overlay)',
      display: 'flex',
      alignItems: drawer ? 'stretch' : 'center',
      justifyContent: drawer ? 'flex-end' : 'center',
      padding: drawer ? 0 : 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: drawer ? Math.max(width, 420) : width,
      maxWidth: '100%',
      maxHeight: drawer ? '100%' : '90vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-page)',
      boxShadow: 'var(--shadow-overlay)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 16px 16px 28px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-h4)',
      fontWeight: 500
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "\uB2EB\uAE30",
    size: "s",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      overflow: 'auto',
      flex: drawer ? 1 : 'none'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end',
      padding: '16px 28px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  action,
  onAction,
  icon,
  onClose,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 16,
      minHeight: 48,
      padding: '0 8px 0 18px',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      boxShadow: 'var(--shadow-float)',
      fontSize: 14,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: "var(--ice-300)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      background: 'transparent',
      border: 0,
      color: 'var(--ice-300)',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: 11,
      padding: '0 10px',
      height: 36
    }
  }, action), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "\uB2EB\uAE30",
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 0,
      color: 'var(--text-inverse-secondary)',
      cursor: 'pointer',
      display: 'inline-flex',
      padding: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  placement = 'top',
  children,
  style
}) {
  const [o, setO] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 6px)'
  } : {
    bottom: 'calc(100% + 6px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      zIndex: 'var(--z-tooltip)',
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      fontSize: 12,
      lineHeight: 1.3,
      pointerEvents: 'none',
      opacity: o ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-standard)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  const [i, setI] = React.useState(defaultChecked);
  const on = checked ?? i;
  const t = () => {
    if (disabled) return;
    setI(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: e => {
      e.preventDefault();
      t();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'default' : 'pointer',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      fontSize: 15,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1px solid ${on ? 'var(--border-strong)' : 'var(--border-default)'}`,
      background: on ? 'var(--action-primary)' : 'var(--surface-page)',
      color: 'var(--white)',
      opacity: disabled ? .4 : 1,
      transition: 'background var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  iconLeft,
  suffix,
  variant = 'box',
  size = 'm',
  disabled = false,
  style
}) {
  const [f, setF] = React.useState(false);
  const H = {
    m: 44,
    l: 56,
    kiosk: 72
  }[size] || 44;
  const bc = error ? 'var(--status-error)' : f ? 'var(--border-strong)' : 'var(--border-default)';
  const box = variant === 'underline' ? {
    borderBottom: `1px solid ${bc}`
  } : {
    border: `1px solid ${bc}`,
    padding: '0 14px'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: 11,
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: H,
      background: disabled ? 'var(--surface-subtle)' : 'var(--surface-page)',
      ...box,
      transition: 'border-color var(--dur-fast)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      padding: 0,
      height: '100%',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)',
      fontSize: size === 'kiosk' ? 20 : 15
    }
  }), suffix), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--status-error)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value,
  defaultValue = 1,
  min = 1,
  max = 99,
  onChange,
  size = 'm',
  style
}) {
  const [i, setI] = React.useState(defaultValue);
  const v = value ?? i;
  const H = {
    s: 32,
    m: 44,
    kiosk: 72
  }[size] || 44;
  const set = n => {
    n = Math.max(min, Math.min(max, n));
    setI(n);
    onChange && onChange(n);
  };
  const b = (d, ic, dis) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": d > 0 ? '수량 늘리기' : '수량 줄이기',
    disabled: dis,
    onClick: () => set(v + d),
    style: {
      width: H,
      height: '100%',
      border: 0,
      background: 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: dis ? 'default' : 'pointer',
      color: dis ? 'var(--text-disabled)' : 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: size === 'kiosk' ? 24 : 16
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: H,
      border: '1px solid var(--border-default)',
      ...style
    }
  }, b(-1, 'minus', v <= min), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: H * 0.8,
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: size === 'kiosk' ? 22 : 14
    }
  }, v), b(1, 'plus', v >= max));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column',
  disabled = false,
  style
}) {
  const [i, setI] = React.useState(defaultValue);
  const cur = value ?? i;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 24 : 12,
      ...style
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const on = cur === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      onClick: () => {
        if (disabled) return;
        setI(v);
        onChange && onChange(v);
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        fontSize: 15,
        color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      style: {
        width: 18,
        height: 18,
        flex: 'none',
        border: `1px solid ${on ? 'var(--border-strong)' : 'var(--border-default)'}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface-page)'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        background: 'var(--action-primary)'
      }
    })), l);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled = false,
  style
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: 11,
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 44,
      border: `1px solid ${f ? 'var(--border-strong)' : 'var(--border-default)'}`,
      background: disabled ? 'var(--surface-subtle)' : 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      flex: 1,
      height: '100%',
      border: 0,
      outline: 0,
      background: 'transparent',
      padding: '0 40px 0 14px',
      borderRadius: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    disabled: o.disabled
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  const [i, setI] = React.useState(defaultChecked);
  const on = checked ?? i;
  return /*#__PURE__*/React.createElement("label", {
    onClick: e => {
      e.preventDefault();
      if (disabled) return;
      setI(!on);
      onChange && onChange(!on);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      fontSize: 15,
      opacity: disabled ? .4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    style: {
      position: 'relative',
      width: 36,
      height: 20,
      flex: 'none',
      background: on ? 'var(--action-primary)' : 'var(--charcoal-200)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 18 : 2,
      width: 16,
      height: 16,
      background: 'var(--white)',
      transition: 'left var(--dur-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  fullWidth = false,
  style
}) {
  const [i, setI] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const cur = value ?? i;
  const [h, setH] = React.useState(null);
  const seg = variant === 'segmented';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: seg ? 0 : 28,
      borderBottom: seg ? 'none' : '1px solid var(--border-hairline)',
      border: seg ? '1px solid var(--border-strong)' : undefined,
      width: fullWidth ? '100%' : undefined,
      ...style
    }
  }, items.map(t => {
    const on = t.id === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setI(t.id);
        onChange && onChange(t.id);
      },
      onMouseEnter: () => setH(t.id),
      onMouseLeave: () => setH(null),
      style: {
        flex: fullWidth ? 1 : 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        height: seg ? 40 : 44,
        padding: seg ? '0 18px' : 0,
        marginBottom: seg ? 0 : -1,
        border: 0,
        borderRadius: 0,
        cursor: 'pointer',
        background: seg && on ? 'var(--surface-inverse)' : 'transparent',
        color: seg && on ? 'var(--text-inverse)' : on || h === t.id ? 'var(--text-primary)' : 'var(--text-tertiary)',
        borderBottom: seg ? 'none' : `1.5px solid ${on ? 'var(--border-strong)' : 'transparent'}`,
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        fontSize: 12,
        transition: 'color var(--dur-fast)'
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: 0,
        opacity: .7
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/app-screens.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Media,
  ProductCard,
  Button,
  Input,
  Tag,
  Price,
  Badge,
  QuantityStepper,
  IconButton,
  Tabs,
  Switch
} = window.SlateDesignSystem_df4b74;
const Lb = ({
  children,
  c
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    color: c || 'var(--text-secondary)'
  }
}, children);
const Scroll = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    overflow: 'auto'
  }
}, children);
function HomeScreen({
  open,
  add
}) {
  const P = window.SLATE_DATA.products;
  return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement(Media, {
    ratio: "4/5",
    tone: "dark",
    label: "HERO 4:5"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Lb, {
    c: "var(--ice-200)"
  }, "2026 Winter Edit"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 40,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, "Less, but", /*#__PURE__*/React.createElement("br", null), "considered."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 20px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Lb, null, "New in"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 500
    }
  }, "\uC624\uB298 \uB4E4\uC5B4\uC628 \uAC83")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, "\uC804\uCCB4 \uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      overflowX: 'auto',
      padding: '24px 20px 0'
    }
  }, P.slice(0, 5).map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      width: 150,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(ProductCard, _extends({}, p, {
    onClick: () => open(p.id)
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '48px 20px',
      background: 'var(--surface-accent)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Lb, null, "Pop-up \xB7 Seongsu"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1.3
    }
  }, "\uACA8\uC6B8\uC758 \uBB3C\uAC74\uB4E4. 3\uC8FC \uB3D9\uC548\uB9CC."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "11.20 \u2014 12.08 \xB7 \uC5F0\uBB34\uC7A5\uAE38 42"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "s"
  }, "\uBC29\uBB38 \uC608\uC57D"))));
}
function ShopScreen({
  open
}) {
  const D = window.SLATE_DATA;
  const [c, setC] = React.useState('all');
  const [q, setQ] = React.useState('');
  const P = D.products.filter(p => (c === 'all' || p.cat === c) && p.name.includes(q));
  return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Input, {
    variant: "underline",
    iconLeft: "search",
    placeholder: "\uBB34\uC5C7\uC744 \uCC3E\uC73C\uC138\uC694",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement(Tabs, {
    value: c,
    onChange: setC,
    items: D.cats,
    fullWidth: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '32px 8px',
      padding: '20px 20px 32px'
    }
  }, P.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    onClick: () => open(p.id),
    onWish: () => {}
  })))));
}
function ProductScreen({
  id,
  add
}) {
  const p = window.SLATE_DATA.products.find(x => x.id === id);
  const [s, setS] = React.useState(p.sizes[0]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement(Media, {
    ratio: "4/5",
    label: "PRODUCT 4:5"
  }, p.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, p.badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Lb, null, p.brand), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 500
    }
  }, p.name), /*#__PURE__*/React.createElement(Price, {
    amount: p.price,
    compareAt: p.compareAt
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, p.sizes.map(z => /*#__PURE__*/React.createElement(Tag, {
    key: z,
    selected: z === s,
    onClick: () => setS(z),
    style: {
      minWidth: 48,
      justifyContent: 'center'
    }
  }, z))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 16,
      fontSize: 13,
      color: 'var(--text-secondary)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uC131\uC218 \uD31D\uC5C5 \uC7AC\uACE0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-primary)'
    }
  }, "1")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      gap: 8,
      padding: '12px 20px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    label: "\uC704\uC2DC\uB9AC\uC2A4\uD2B8",
    variant: "secondary"
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    disabled: p.soldOut,
    onClick: () => add(p),
    style: {
      flex: 1
    }
  }, p.soldOut ? '품절' : '담기')));
}
function BagScreen({
  cart,
  setQty
}) {
  const fmt = window.SLATE_DATA.fmt;
  const sub = cart.reduce((s, i) => s + i.p.price * i.q, 0);
  if (!cart.length) return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '120px 20px',
      textAlign: 'center',
      color: 'var(--text-secondary)',
      fontSize: 14
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4."));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px'
    }
  }, cart.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.p.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gap: 14,
      padding: '16px 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    ratio: "4/5"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, it.p.name), /*#__PURE__*/React.createElement(Price, {
    amount: it.p.price,
    size: "s"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    size: "s",
    value: it.q,
    min: 0,
    onChange: v => setQty(i, v)
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\uC0C1\uD488 \uAE08\uC561"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, fmt(sub))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\uBC30\uC1A1\uBE44"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, sub >= 50000 ? '무료' : fmt(3000))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '12px 20px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "l"
  }, fmt(sub + (sub >= 50000 ? 0 : 3000)), " \uACB0\uC81C\uD558\uAE30")));
}
function PopupScreen() {
  return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement(Media, {
    ratio: "1/1",
    tone: "muted",
    label: "POP-UP INTERIOR 1:1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Lb, null, "Pop-up \xB7 Seongsu"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 500
    }
  }, "\uACA8\uC6B8\uC758 \uBB3C\uAC74\uB4E4"), [['기간', '11.20 — 12.08'], ['시간', '12:00 — 20:00'], ['위치', '성동구 연무장길 42']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14,
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, a), /*#__PURE__*/React.createElement("span", null, b))), /*#__PURE__*/React.createElement(Switch, {
    label: "\uC624\uD508 \uC54C\uB9BC \uBC1B\uAE30",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    iconLeft: "calendar"
  }, "\uBC29\uBB38 \uC608\uC57D")));
}
function MeScreen() {
  return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 500
    }
  }, "\uAE40\uC2AC\uB808\uC774\uD2B8 \uB2D8"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Member \xB7 \uC801\uB9BD\uAE08 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "\u20A94,200"))), ['주문 내역', '위시리스트', '재입고 알림', '매장 영수증', '설정'].map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 56,
      margin: '0 20px',
      borderTop: '1px solid var(--border-hairline)',
      fontSize: 15
    }
  }, x, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, "\u203A"))));
}
Object.assign(window, {
  HomeScreen,
  ShopScreen,
  ProductScreen,
  BagScreen,
  PopupScreen,
  MeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app-screens.js", error: String((e && e.message) || e) }); }

// ui_kits/app/chrome.js
try { (() => {
const {
  Wordmark,
  IconButton,
  Icon
} = window.SlateDesignSystem_df4b74;
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      background: '#fff',
      border: '1px solid var(--charcoal-900)',
      boxShadow: 'var(--shadow-overlay)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 14
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 14
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 16
  }))), children);
}
function AppBar({
  title,
  onBack,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 52,
      flex: 'none',
      display: 'grid',
      gridTemplateColumns: '52px 1fr auto',
      alignItems: 'center',
      padding: '0 4px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, onBack && /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    label: "\uB4A4\uB85C",
    onClick: onBack
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: onBack ? 'center' : 'left',
      paddingLeft: onBack ? 0 : 12
    }
  }, title || /*#__PURE__*/React.createElement(Wordmark, {
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minWidth: 52,
      justifyContent: 'flex-end'
    }
  }, right));
}
function TabBar({
  tab,
  setTab,
  count
}) {
  const T = [['home', 'Home', 'house'], ['shop', 'Shop', 'search'], ['popup', 'Pop-up', 'map-pin'], ['bag', 'Bag', 'shopping-bag'], ['me', 'My', 'user']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 84,
      flex: 'none',
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      borderTop: '1px solid var(--border-hairline)',
      paddingBottom: 24,
      background: '#fff'
    }
  }, T.map(([id, l, ic]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      border: 0,
      background: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
      cursor: 'pointer',
      color: tab === id ? 'var(--text-primary)' : 'var(--text-tertiary)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontSize: 9
    }
  }, l), id === 'bag' && count > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      left: '56%',
      minWidth: 14,
      height: 14,
      background: 'var(--ice-300)',
      color: 'var(--charcoal-900)',
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      lineHeight: '14px',
      textAlign: 'center'
    }
  }, count), tab === id && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: '30%',
      right: '30%',
      height: 1.5,
      background: 'var(--charcoal-900)'
    }
  }))));
}
Object.assign(window, {
  Phone,
  AppBar,
  TabBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/chrome.js", error: String((e && e.message) || e) }); }

// ui_kits/kiosk/kiosk-screens.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Wordmark,
  Media,
  Button,
  IconButton,
  Tabs,
  ProductCard,
  Price,
  Badge,
  QuantityStepper,
  Icon
} = window.SlateDesignSystem_df4b74;
const KL = ({
  children,
  c,
  s = 18
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    fontSize: s,
    color: c || 'var(--text-secondary)'
  }
}, children);
function KioskTop({
  onHome,
  count,
  onBag
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 64px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onHome,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 28
  })), /*#__PURE__*/React.createElement(KL, {
    s: 16
  }, "Pop-up \xB7 Seongsu"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "shopping-bag",
    label: "\uC7A5\uBC14\uAD6C\uB2C8",
    size: "kiosk",
    count: count,
    onClick: onBag
  }));
}
function Attract({
  start
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: start,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-inverse)',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '96px 80px 0'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 40,
    inverse: true
  })), /*#__PURE__*/React.createElement(Media, {
    ratio: "1/1",
    tone: "dark",
    label: "ATTRACT LOOP \u2014 1:1",
    style: {
      margin: '96px 80px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      flex: 1,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(KL, {
    c: "var(--ice-200)",
    s: 20
  }, "Winter objects \xB7 11.20 \u2014 12.08"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 112,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, "Less, but", /*#__PURE__*/React.createElement("br", null), "considered."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '1px solid var(--border-inverse)',
      paddingTop: 40,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32
    }
  }, "\uD654\uBA74\uC744 \uD130\uCE58\uD574 \uC2DC\uC791\uD558\uC138\uC694"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 40
  }))));
}
function Browse({
  open
}) {
  const D = window.SLATE_DATA;
  const [c, setC] = React.useState('all');
  const P = D.products.filter(p => c === 'all' || p.cat === c);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '56px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 56,
      fontWeight: 500,
      letterSpacing: '-0.01em'
    }
  }, "\uBB34\uC5C7\uC744 \uCC3E\uC73C\uC138\uC694"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "kiosk",
    iconLeft: "scan-line"
  }, "\uBC14\uCF54\uB4DC \uC2A4\uCE94")), /*#__PURE__*/React.createElement(Tabs, {
    value: c,
    onChange: setC,
    items: D.cats,
    fullWidth: true,
    style: {
      transform: 'scale(1.5)',
      transformOrigin: 'left',
      width: '66.6%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '56px 24px',
      marginTop: 56
    }
  }, P.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    onClick: () => open(p.id)
  })))));
}
function KioskProduct({
  id,
  add,
  back
}) {
  const p = window.SLATE_DATA.products.find(x => x.id === id);
  const [s, setS] = React.useState(p.sizes[0]);
  const [q, setQ] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    ratio: "1/1",
    label: "PRODUCT 1:1"
  }, p.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 32,
      left: 32,
      transform: 'scale(1.6)',
      transformOrigin: 'left top'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, p.badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(KL, null, p.brand), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 48,
      fontWeight: 500,
      lineHeight: 1.2
    }
  }, p.name), /*#__PURE__*/React.createElement(Price, {
    amount: p.price,
    compareAt: p.compareAt,
    size: "kiosk"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, p.sizes.map(z => /*#__PURE__*/React.createElement("button", {
    key: z,
    onClick: () => setS(z),
    style: {
      minWidth: 112,
      height: 80,
      border: '1px solid ' + (z === s ? 'var(--border-strong)' : 'var(--border-default)'),
      background: z === s ? 'var(--surface-inverse)' : '#fff',
      color: z === s ? '#fff' : 'var(--text-primary)',
      fontSize: 24,
      cursor: 'pointer'
    }
  }, z))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 24,
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\uC774 \uB9E4\uC7A5 \uC7AC\uACE0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, p.soldOut ? '0' : '3')))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      gap: 16,
      padding: '32px 64px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "kiosk",
    onClick: back
  }, "\uB4A4\uB85C"), /*#__PURE__*/React.createElement(QuantityStepper, {
    size: "kiosk",
    value: q,
    onChange: setQ
  }), /*#__PURE__*/React.createElement(Button, {
    size: "kiosk",
    fullWidth: true,
    disabled: p.soldOut,
    onClick: () => add(p, q),
    style: {
      flex: 1
    }
  }, p.soldOut ? '품절' : '담기')));
}
function Checkout({
  cart,
  pay,
  back
}) {
  const fmt = window.SLATE_DATA.fmt;
  const sub = cart.reduce((s, i) => s + i.p.price * i.q, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '56px 64px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 56,
      fontWeight: 500
    }
  }, "\uC8FC\uBB38 \uD655\uC778"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, cart.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.p.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '160px 1fr auto',
      gap: 32,
      alignItems: 'center',
      padding: '28px 0',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    ratio: "4/5"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(KL, {
    s: 14
  }, it.p.brand), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28
    }
  }, it.p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 20,
      color: 'var(--text-secondary)'
    }
  }, "\xD7 ", it.q)), /*#__PURE__*/React.createElement(Price, {
    amount: it.p.price * it.q,
    size: "kiosk"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: '1.5px solid var(--border-strong)',
      paddingTop: 32,
      fontSize: 28
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD569\uACC4"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 44
    }
  }, fmt(sub)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      background: 'var(--surface-accent)',
      padding: '48px 64px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "credit-card",
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32,
      fontWeight: 500
    }
  }, "\uCE74\uB4DC\uB97C \uB2E8\uB9D0\uAE30\uC5D0 \uAF42\uC544\uC8FC\uC138\uC694"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      color: 'var(--text-secondary)'
    }
  }, "\uC0BC\uC131\uD398\uC774 \xB7 \uC560\uD50C\uD398\uC774 \xB7 \uC571 \uBC14\uCF54\uB4DC \uAC00\uB2A5"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      gap: 16,
      padding: '32px 64px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "kiosk",
    onClick: back
  }, "\uACC4\uC18D \uC1FC\uD551"), /*#__PURE__*/React.createElement(Button, {
    size: "kiosk",
    fullWidth: true,
    disabled: !cart.length,
    onClick: pay,
    style: {
      flex: 1
    }
  }, "\uACB0\uC81C \uC9C4\uD589")));
}
function Done({
  restart
}) {
  React.useEffect(() => {
    const t = setTimeout(restart, 8000);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 80px',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 80
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 72,
      fontWeight: 500,
      lineHeight: 1.15
    }
  }, "\uACB0\uC81C\uAC00", /*#__PURE__*/React.createElement("br", null), "\uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      color: 'var(--text-secondary)'
    }
  }, "\uC601\uC218\uC99D\uC740 \uC571\uACFC \uBB38\uC790\uB85C \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), "\uCE74\uC6B4\uD130\uC5D0\uC11C \uC0C1\uD488\uC744 \uBC1B\uC544\uAC00\uC138\uC694."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 120,
      marginTop: 24
    }
  }, "A-042"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "kiosk",
    onClick: restart
  }, "\uCC98\uC74C\uC73C\uB85C")));
}
Object.assign(window, {
  KioskTop,
  Attract,
  Browse,
  KioskProduct,
  Checkout,
  Done
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kiosk/kiosk-screens.js", error: String((e && e.message) || e) }); }

// ui_kits/shared/data.js
try { (() => {
window.SLATE_DATA = {
  products: [{
    id: 'p1',
    brand: 'Slate',
    name: '워시드 리넨 오버셔츠',
    price: 128000,
    cat: 'apparel',
    badge: 'New',
    colors: ['#3A3F43', '#CFE4EF', '#E1E3E5'],
    sizes: ['S', 'M', 'L', 'XL'],
    desc: '두께감 있는 워싱 리넨. 드롭 숄더, 여유 있는 품.'
  }, {
    id: 'p2',
    brand: 'Norrby',
    name: '울 캐시미어 머플러',
    price: 96000,
    compareAt: 128000,
    cat: 'apparel',
    colors: ['#7A8086', '#1F2224'],
    sizes: ['ONE'],
    desc: '울 70 / 캐시미어 30. 180 × 30cm.'
  }, {
    id: 'p3',
    brand: 'Kiln & Co',
    name: '스톤웨어 머그 — 애쉬',
    price: 32000,
    cat: 'objects',
    badge: 'Only here',
    colors: ['#C8CCCF'],
    sizes: ['ONE'],
    desc: '손으로 빚은 스톤웨어. 320ml.'
  }, {
    id: 'p4',
    brand: 'Form Study',
    name: '알루미늄 데스크 램프',
    price: 210000,
    cat: 'home',
    soldOut: true,
    colors: ['#A3A8AD'],
    sizes: ['ONE'],
    desc: '아노다이징 알루미늄, 조광 기능.'
  }, {
    id: 'p5',
    brand: 'Slate',
    name: '코튼 트윌 와이드 팬츠',
    price: 118000,
    cat: 'apparel',
    colors: ['#2A2E31', '#B3D3E4'],
    sizes: ['S', 'M', 'L'],
    desc: '단단한 코튼 트윌, 와이드 스트레이트.'
  }, {
    id: 'p6',
    brand: 'Haus Ritual',
    name: '린넨 룸 스프레이 100ml',
    price: 42000,
    cat: 'home',
    badge: 'New',
    colors: null,
    sizes: ['ONE'],
    desc: '베티버, 화이트 티, 젖은 돌.'
  }, {
    id: 'p7',
    brand: 'Kiln & Co',
    name: '오크 서빙 보드',
    price: 58000,
    cat: 'objects',
    colors: null,
    sizes: ['ONE'],
    desc: '오일 마감 화이트 오크. 40 × 20cm.'
  }, {
    id: 'p8',
    brand: 'Slate',
    name: '메리노 크루넥 니트',
    price: 148000,
    cat: 'apparel',
    colors: ['#E1E3E5', '#565C61'],
    sizes: ['S', 'M', 'L', 'XL'],
    desc: '엑스트라 파인 메리노 100%.'
  }],
  cats: [{
    id: 'all',
    label: 'All'
  }, {
    id: 'apparel',
    label: 'Apparel'
  }, {
    id: 'objects',
    label: 'Objects'
  }, {
    id: 'home',
    label: 'Home'
  }],
  fmt: n => '₩' + Number(n).toLocaleString('ko-KR')
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shared/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/cart.js
try { (() => {
const {
  Dialog,
  Button,
  Media,
  QuantityStepper,
  Price,
  Toast
} = window.SlateDesignSystem_df4b74;
function CartDrawer({
  open,
  onClose,
  items,
  setQty
}) {
  const sub = items.reduce((s, i) => s + i.p.price * i.q, 0);
  const fmt = window.SLATE_DATA.fmt;
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    variant: "drawer",
    title: '장바구니 ' + items.reduce((s, i) => s + i.q, 0),
    width: 440,
    actions: items.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", null, "\uD569\uACC4"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)'
      }
    }, fmt(sub))), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "l"
    }, "\uACB0\uC81C\uD558\uAE30")) : null
  }, !items.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 0',
      textAlign: 'center',
      color: 'var(--text-secondary)',
      fontSize: 14
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.p.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '88px 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Media, {
    ratio: "4/5",
    label: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, it.p.brand), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, it.p.name), /*#__PURE__*/React.createElement(Price, {
    amount: it.p.price,
    size: "s"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    size: "s",
    value: it.q,
    min: 0,
    onChange: v => setQty(i, v)
  }), /*#__PURE__*/React.createElement("a", {
    onClick: () => setQty(i, 0),
    style: {
      fontSize: 12,
      cursor: 'pointer',
      color: 'var(--text-secondary)'
    }
  }, "\uC0AD\uC81C")))))));
}
Object.assign(window, {
  CartDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/cart.js", error: String((e && e.message) || e) }); }

// ui_kits/website/header.js
try { (() => {
const {
  Wordmark,
  IconButton
} = window.SlateDesignSystem_df4b74;
function SiteHeader({
  go,
  cartCount,
  openCart,
  page
}) {
  const nav = [['Apparel', 'apparel'], ['Objects', 'objects'], ['Home', 'home'], ['Pop-up', 'popup']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      fontSize: 12,
      letterSpacing: '.02em'
    }
  }, "5\uB9CC\uC6D0 \uC774\uC0C1 \uBB34\uB8CC\uBC30\uC1A1 \xB7 \uC131\uC218 \uD31D\uC5C5 11.20 \u2014 12.08"), /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      padding: '0 var(--gutter-desktop)',
      background: 'var(--surface-header-glass)',
      backdropFilter: 'var(--blur-header)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, nav.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go('list', id),
    style: {
      cursor: 'pointer',
      textDecoration: page === id ? 'underline' : 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, l))), /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    label: "\uAC80\uC0C9"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "user",
    label: "\uACC4\uC815"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    label: "\uC704\uC2DC\uB9AC\uC2A4\uD2B8"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "shopping-bag",
    label: "\uC7A5\uBC14\uAD6C\uB2C8",
    count: cartCount,
    onClick: openCart
  }))));
}
function SiteFooter() {
  const cols = [['Shop', ['Apparel', 'Objects', 'Home', 'Gift card']], ['Visit', ['성수 플래그십', 'Pop-up 일정', '키오스크 안내']], ['Help', ['배송', '교환 및 반품', '문의하기']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      padding: '96px var(--gutter-desktop) 48px',
      marginTop: 128
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 18,
    inverse: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-inverse-secondary)',
      fontSize: 14,
      maxWidth: 280,
      lineHeight: 1.7
    }
  }, "\uC9C0\uAE08 \uD544\uC694\uD55C \uB9CC\uD07C\uB9CC. \uC637\uACFC \uBB3C\uAC74, \uACF5\uAC04\uC744 \uC704\uD55C \uD3B8\uC9D1\uC20D.")), cols.map(([h, ls]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--charcoal-400)'
    }
  }, h), ls.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: 14
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96,
      paddingTop: 20,
      borderTop: '1px solid var(--border-inverse)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--charcoal-400)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Slate"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "KRW \xB7 \uD55C\uAD6D\uC5B4")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/header.js", error: String((e && e.message) || e) }); }

// ui_kits/website/home.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Media,
  Button,
  ProductCard
} = window.SlateDesignSystem_df4b74;
const Label = ({
  children,
  inv
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    color: inv ? 'var(--ice-200)' : 'var(--text-secondary)'
  }
}, children);
function HomePage({
  go,
  addToCart
}) {
  const P = window.SLATE_DATA.products;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Media, {
    ratio: "16/7",
    tone: "dark",
    label: "HERO \u2014 LIFESTYLE 16:7",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--gutter-desktop)',
      bottom: 64,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    inv: true
  }, "2026 Winter Edit"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 72,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, "Less, but", /*#__PURE__*/React.createElement("br", null), "considered."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    iconRight: "arrow-right",
    onClick: () => go('list', 'all')
  }, "Shop the edit")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '128px var(--gutter-desktop) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Label, null, "New in"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: '-0.01em'
    }
  }, "\uC624\uB298 \uB4E4\uC5B4\uC628 \uAC83")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: "arrow-right",
    onClick: () => go('list', 'all')
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 16
    }
  }, P.slice(0, 4).map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    onClick: () => go('product', p.id),
    onWish: () => {},
    onQuickAdd: () => addToCart(p)
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      margin: '128px 0 0',
      background: 'var(--surface-accent)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    ratio: "4/3",
    tone: "muted",
    label: "POP-UP INTERIOR 4:3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 96px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Pop-up \xB7 Seongsu"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '-0.01em'
    }
  }, "\uACA8\uC6B8\uC758 \uBB3C\uAC74\uB4E4.", /*#__PURE__*/React.createElement("br", null), "3\uC8FC \uB3D9\uC548\uB9CC."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      maxWidth: 380
    }
  }, "\uC131\uC218\uB3D9 \uC5F0\uBB34\uC7A5\uAE38 42. 11\uC6D4 20\uC77C\uBD80\uD130 12\uC6D4 8\uC77C\uAE4C\uC9C0. \uD0A4\uC624\uC2A4\uD06C\uB85C \uC7AC\uACE0\uB97C \uD655\uC778\uD558\uACE0 \uBC14\uB85C \uACB0\uC81C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "\uBC29\uBB38 \uC608\uC57D"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "map-pin"
  }, "\uAE38\uCC3E\uAE30")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '128px var(--gutter-desktop) 0',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, [['Apparel', 'apparel'], ['Objects', 'objects'], ['Home', 'home']].map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go('list', id),
    style: {
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Media, {
    ratio: "4/5",
    tone: "subtle",
    label: l.toUpperCase() + ' 4:5'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, l, /*#__PURE__*/React.createElement("span", null, "\u2192"))))));
}
Object.assign(window, {
  HomePage,
  Label
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.js", error: String((e && e.message) || e) }); }

// ui_kits/website/listing.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Tabs,
  Tag,
  Select,
  ProductCard
} = window.SlateDesignSystem_df4b74;
function ListingPage({
  cat,
  go,
  addToCart
}) {
  const D = window.SLATE_DATA;
  const [c, setC] = React.useState(cat || 'all');
  const [f, setF] = React.useState({
    stock: false
  });
  React.useEffect(() => setC(cat || 'all'), [cat]);
  let P = D.products.filter(p => c === 'all' || p.cat === c);
  if (f.stock) P = P.filter(p => !p.soldOut);
  const label = (D.cats.find(x => x.id === c) || {
    label: 'All'
  }).label;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '48px var(--gutter-desktop) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)',
      marginBottom: 24
    }
  }, "Home / ", label), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 32px',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 48,
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--text-tertiary)',
      marginLeft: 12,
      letterSpacing: 0,
      verticalAlign: 'top'
    }
  }, P.length)), /*#__PURE__*/React.createElement(Tabs, {
    value: c,
    onChange: setC,
    items: D.cats.map(x => ({
      ...x,
      count: D.products.filter(p => x.id === 'all' || p.cat === x.id).length
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: f.stock,
    onClick: () => setF({
      ...f,
      stock: !f.stock
    })
  }, "\uC7AC\uACE0 \uC788\uC74C"), /*#__PURE__*/React.createElement(Tag, null, "Linen"), /*#__PURE__*/React.createElement(Tag, null, "Wool"), /*#__PURE__*/React.createElement(Tag, null, "\u20A9100,000 \uC774\uD558")), /*#__PURE__*/React.createElement(Select, {
    options: ['신상품순', '낮은 가격순', '높은 가격순'],
    style: {
      width: 180
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: '48px 16px'
    }
  }, P.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    onClick: () => go('product', p.id),
    onWish: () => {},
    onQuickAdd: () => addToCart(p)
  })))));
}
Object.assign(window, {
  ListingPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/listing.js", error: String((e && e.message) || e) }); }

// ui_kits/website/product.js
try { (() => {
const {
  Media,
  Badge,
  Price,
  Button,
  IconButton,
  QuantityStepper,
  Tag
} = window.SlateDesignSystem_df4b74;
function ProductPage({
  id,
  go,
  addToCart
}) {
  const D = window.SLATE_DATA;
  const p = D.products.find(x => x.id === id) || D.products[0];
  const [size, setSize] = React.useState(p.sizes[0]);
  const [col, setCol] = React.useState(0);
  const [q, setQ] = React.useState(1);
  const [open, setOpen] = React.useState('detail');
  const rows = [['detail', '상품 정보', p.desc], ['ship', '배송 및 반품', '5만원 이상 무료배송. 수령 후 14일 이내 교환/반품.'], ['store', '매장 재고', '성수 플래그십 3 · 성수 팝업 1']];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)',
      gap: 64,
      padding: '0 var(--gutter-desktop) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Media, {
    ratio: "4/5",
    label: "FRONT 4:5",
    style: {
      gridColumn: '1 / 3'
    }
  }), /*#__PURE__*/React.createElement(Media, {
    ratio: "4/5",
    label: "DETAIL",
    tone: "accent"
  }), /*#__PURE__*/React.createElement(Media, {
    ratio: "4/5",
    label: "ON BODY",
    tone: "muted"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 128,
      alignSelf: 'start',
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, p.brand), p.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, p.badge)), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: '-0.01em',
      lineHeight: 1.25
    }
  }, p.name), /*#__PURE__*/React.createElement(Price, {
    amount: p.price,
    compareAt: p.compareAt,
    size: "l"
  })), p.colors && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Color"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, p.colors.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCol(i),
    "aria-label": c,
    style: {
      width: 32,
      height: 32,
      padding: 3,
      border: '1px solid ' + (i === col ? 'var(--border-strong)' : 'var(--border-hairline)'),
      background: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      background: c
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Size"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, p.sizes.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    selected: s === size,
    onClick: () => setSize(s),
    style: {
      minWidth: 48,
      justifyContent: 'center'
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: q,
    onChange: setQ
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "m",
    disabled: p.soldOut,
    onClick: () => addToCart(p, q),
    style: {
      flex: 1
    }
  }, p.soldOut ? '품절' : '장바구니 담기'), /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    label: "\uC704\uC2DC\uB9AC\uC2A4\uD2B8",
    variant: "secondary"
  })), /*#__PURE__*/React.createElement("div", null, rows.map(([k, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === k ? null : k),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 52,
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      fontSize: 14,
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)'
    }
  }, t, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, open === k ? '−' : '+')), open === k && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontSize: 14,
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, b))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  }))));
}
Object.assign(window, {
  ProductPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/product.js", error: String((e && e.message) || e) }); }

__ds_ns.Price = __ds_scope.Price;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Media = __ds_scope.Media;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
