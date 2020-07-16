"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _ReactBootstrap = ReactBootstrap,
    Row = _ReactBootstrap.Row,
    Col = _ReactBootstrap.Col,
    Form = _ReactBootstrap.Form;
var RangeSlider = ReactBootstrapRangeSlider;

var SimpleSlider = function SimpleSlider() {
  var _React$useState = React.useState(50),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return /*#__PURE__*/React.createElement(RangeSlider, {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  });
};

var SliderWithLabel = function SliderWithLabel() {
  var _React$useState3 = React.useState(50),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(Form.Label, null, "My Label"), /*#__PURE__*/React.createElement(RangeSlider, {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  })));
};

var SliderWithColumnLayoutLabel = function SliderWithColumnLayoutLabel() {
  var _React$useState5 = React.useState(50),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      value = _React$useState6[0],
      setValue = _React$useState6[1];

  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Group, {
    as: Row
  }, /*#__PURE__*/React.createElement(Form.Label, {
    column: true,
    sm: "4"
  }, "My Other Label"), /*#__PURE__*/React.createElement(Col, {
    sm: "8"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  }))));
};

var SliderWithInputFormControl = function SliderWithInputFormControl() {
  var _React$useState7 = React.useState(25),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      value = _React$useState8[0],
      setValue = _React$useState8[1];

  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Group, {
    as: Row
  }, /*#__PURE__*/React.createElement(Col, {
    xs: "9"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Col, {
    xs: "3"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  }))));
};

var Sizes = function Sizes() {
  var _React$useState9 = React.useState(20),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      value1 = _React$useState10[0],
      setValue1 = _React$useState10[1];

  var _React$useState11 = React.useState(50),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      value2 = _React$useState12[0],
      setValue2 = _React$useState12[1];

  var _React$useState13 = React.useState(80),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      value3 = _React$useState14[0],
      setValue3 = _React$useState14[1];

  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Group, {
    as: Row
  }, /*#__PURE__*/React.createElement(Col, {
    xs: "4"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    value: value1,
    size: "sm",
    onChange: function onChange(e) {
      return setValue1(e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Col, {
    xs: "8"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value1,
    onChange: function onChange(e) {
      return setValue1(e.target.value);
    },
    size: "sm"
  }))), /*#__PURE__*/React.createElement(Form.Group, {
    as: Row
  }, /*#__PURE__*/React.createElement(Col, {
    xs: "4"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    value: value2,
    onChange: function onChange(e) {
      return setValue2(e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Col, {
    xs: "8"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value2,
    onChange: function onChange(e) {
      return setValue2(e.target.value);
    }
  }))), /*#__PURE__*/React.createElement(Form.Group, {
    as: Row
  }, /*#__PURE__*/React.createElement(Col, {
    xs: "4"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    value: value3,
    size: "lg",
    onChange: function onChange(e) {
      return setValue3(e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Col, {
    xs: "8"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value3,
    onChange: function onChange(e) {
      return setValue3(e.target.value);
    },
    size: "lg"
  }))));
};

var Variants = function Variants() {
  var _React$useState15 = React.useState(30),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      value1 = _React$useState16[0],
      setValue1 = _React$useState16[1];

  var _React$useState17 = React.useState(30),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      value2 = _React$useState18[0],
      setValue2 = _React$useState18[1];

  var _React$useState19 = React.useState(30),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      value3 = _React$useState20[0],
      setValue3 = _React$useState20[1];

  var _React$useState21 = React.useState(30),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      value4 = _React$useState22[0],
      setValue4 = _React$useState22[1];

  var _React$useState23 = React.useState(70),
      _React$useState24 = _slicedToArray(_React$useState23, 2),
      value5 = _React$useState24[0],
      setValue5 = _React$useState24[1];

  var _React$useState25 = React.useState(70),
      _React$useState26 = _slicedToArray(_React$useState25, 2),
      value6 = _React$useState26[0],
      setValue6 = _React$useState26[1];

  var _React$useState27 = React.useState(70),
      _React$useState28 = _slicedToArray(_React$useState27, 2),
      value7 = _React$useState28[0],
      setValue7 = _React$useState28[1];

  var _React$useState29 = React.useState(70),
      _React$useState30 = _slicedToArray(_React$useState29, 2),
      value8 = _React$useState30[0],
      setValue8 = _React$useState30[1];

  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Group, {
    as: Row
  }, /*#__PURE__*/React.createElement(Col, {
    xs: "3"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value1,
    onChange: function onChange(e) {
      return setValue1(e.target.value);
    },
    variant: "primary"
  })), /*#__PURE__*/React.createElement(Col, {
    xs: "3"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value2,
    onChange: function onChange(e) {
      return setValue2(e.target.value);
    },
    variant: "secondary"
  })), /*#__PURE__*/React.createElement(Col, {
    xs: "3"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value3,
    onChange: function onChange(e) {
      return setValue3(e.target.value);
    },
    variant: "success"
  })), /*#__PURE__*/React.createElement(Col, {
    xs: "3"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value4,
    onChange: function onChange(e) {
      return setValue4(e.target.value);
    },
    variant: "danger"
  }))), /*#__PURE__*/React.createElement(Form.Group, {
    as: Row
  }, /*#__PURE__*/React.createElement(Col, {
    xs: "3"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value5,
    onChange: function onChange(e) {
      return setValue5(e.target.value);
    },
    variant: "warning"
  })), /*#__PURE__*/React.createElement(Col, {
    xs: "3"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value6,
    onChange: function onChange(e) {
      return setValue6(e.target.value);
    },
    variant: "info"
  })), /*#__PURE__*/React.createElement(Col, {
    xs: "3"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value7,
    onChange: function onChange(e) {
      return setValue7(e.target.value);
    },
    variant: "dark"
  })), /*#__PURE__*/React.createElement(Col, {
    xs: "3"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value8,
    onChange: function onChange(e) {
      return setValue8(e.target.value);
    },
    variant: "light"
  }))));
};

var TooltipBehaviour = function TooltipBehaviour() {
  var _React$useState31 = React.useState(20),
      _React$useState32 = _slicedToArray(_React$useState31, 2),
      value1 = _React$useState32[0],
      setValue1 = _React$useState32[1];

  var _React$useState33 = React.useState(50),
      _React$useState34 = _slicedToArray(_React$useState33, 2),
      value2 = _React$useState34[0],
      setValue2 = _React$useState34[1];

  var _React$useState35 = React.useState(80),
      _React$useState36 = _slicedToArray(_React$useState35, 2),
      value3 = _React$useState36[0],
      setValue3 = _React$useState36[1];

  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Group, {
    as: Row
  }, /*#__PURE__*/React.createElement(Col, {
    xs: "4"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value1,
    onChange: function onChange(e) {
      return setValue1(e.target.value);
    },
    tooltip: "auto"
  })), /*#__PURE__*/React.createElement(Col, {
    xs: "4"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value2,
    onChange: function onChange(e) {
      return setValue2(e.target.value);
    },
    tooltip: "on"
  })), /*#__PURE__*/React.createElement(Col, {
    xs: "4"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value3,
    onChange: function onChange(e) {
      return setValue3(e.target.value);
    },
    tooltip: "off"
  }))));
};

var TooltipPlacement = function TooltipPlacement() {
  var _React$useState37 = React.useState(25),
      _React$useState38 = _slicedToArray(_React$useState37, 2),
      value1 = _React$useState38[0],
      setValue1 = _React$useState38[1];

  var _React$useState39 = React.useState(75),
      _React$useState40 = _slicedToArray(_React$useState39, 2),
      value2 = _React$useState40[0],
      setValue2 = _React$useState40[1];

  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Group, {
    as: Row
  }, /*#__PURE__*/React.createElement(Col, {
    xs: "6"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value1,
    onChange: function onChange(e) {
      return setValue1(e.target.value);
    },
    tooltipPlacement: "top",
    tooltip: "on"
  })), /*#__PURE__*/React.createElement(Col, {
    xs: "6"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value2,
    onChange: function onChange(e) {
      return setValue2(e.target.value);
    },
    tooltipPlacement: "bottom",
    tooltip: "on"
  }))));
};

var TooltipLabel = function TooltipLabel() {
  var _React$useState41 = React.useState(25),
      _React$useState42 = _slicedToArray(_React$useState41, 2),
      value = _React$useState42[0],
      setValue = _React$useState42[1];

  return /*#__PURE__*/React.createElement(RangeSlider, {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    tooltipLabel: function tooltipLabel(currentValue) {
      return "".concat(currentValue, "%");
    },
    tooltip: "on"
  });
};

var Disabled = function Disabled() {
  var _React$useState43 = React.useState(50),
      _React$useState44 = _slicedToArray(_React$useState43, 2),
      value = _React$useState44[0],
      setValue = _React$useState44[1];

  return /*#__PURE__*/React.createElement(RangeSlider, {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    disabled: true
  });
};

var Step = function Step() {
  var _React$useState45 = React.useState(50),
      _React$useState46 = _slicedToArray(_React$useState45, 2),
      value = _React$useState46[0],
      setValue = _React$useState46[1];

  return /*#__PURE__*/React.createElement(RangeSlider, {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    step: 10
  });
};

var MinMax = function MinMax() {
  var _React$useState47 = React.useState(2),
      _React$useState48 = _slicedToArray(_React$useState47, 2),
      value1 = _React$useState48[0],
      setValue1 = _React$useState48[1];

  var _React$useState49 = React.useState(0),
      _React$useState50 = _slicedToArray(_React$useState49, 2),
      value2 = _React$useState50[0],
      setValue2 = _React$useState50[1];

  return /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Group, {
    as: Row
  }, /*#__PURE__*/React.createElement(Col, {
    xs: "6"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value1,
    onChange: function onChange(e) {
      return setValue1(e.target.value);
    },
    min: 1,
    max: 5
  })), /*#__PURE__*/React.createElement(Col, {
    xs: "6"
  }, /*#__PURE__*/React.createElement(RangeSlider, {
    value: value2,
    onChange: function onChange(e) {
      return setValue2(e.target.value);
    },
    min: -20,
    max: 50
  }))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(SimpleSlider, null), document.getElementById('simple-usage'));
ReactDOM.render( /*#__PURE__*/React.createElement(SliderWithLabel, null), document.getElementById('with-label'));
ReactDOM.render( /*#__PURE__*/React.createElement(SliderWithColumnLayoutLabel, null), document.getElementById('with-column-layout-label'));
ReactDOM.render( /*#__PURE__*/React.createElement(SliderWithInputFormControl, null), document.getElementById('with-form-control'));
ReactDOM.render( /*#__PURE__*/React.createElement(Sizes, null), document.getElementById('sizes'));
ReactDOM.render( /*#__PURE__*/React.createElement(Variants, null), document.getElementById('variants'));
ReactDOM.render( /*#__PURE__*/React.createElement(TooltipBehaviour, null), document.getElementById('tooltip-behaviour'));
ReactDOM.render( /*#__PURE__*/React.createElement(TooltipPlacement, null), document.getElementById('tooltip-placement'));
ReactDOM.render( /*#__PURE__*/React.createElement(TooltipLabel, null), document.getElementById('tooltip-label'));
ReactDOM.render( /*#__PURE__*/React.createElement(Disabled, null), document.getElementById('disabled'));
ReactDOM.render( /*#__PURE__*/React.createElement(Step, null), document.getElementById('step'));
ReactDOM.render( /*#__PURE__*/React.createElement(MinMax, null), document.getElementById('min-max'));
