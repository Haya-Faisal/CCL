/*! p5.js v1.11.0 September 25, 2024 */
(function (f) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = f()
  } else if (typeof define === 'function' && define.amd) {
    define([], f)
  } else {
    var g;
    if (typeof window !== 'undefined') {
      g = window
    } else if (typeof global !== 'undefined') {
      g = global
    } else if (typeof self !== 'undefined') {
      g = self
    } else {
      g = this
    }
    g.p5 = f()
  }
}) (function () {
  var define,
  module,
  exports;
  return (function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = 'function' == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error('Cannot find module \'' + i + '\'');
            throw a.code = 'MODULE_NOT_FOUND',
            a
          }
          var p = n[i] = {
            exports: {
            }
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r)
          }, p, p.exports, r, e, n, t)
        }
        return n[i].exports
      }
      for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
      return o
    }
    return r
  }) () ({
    1: [
      function (_dereq_, module, exports) {
        module.exports = {
          'p5': {
            'describe': {
              'name': 'describe',
              'params': [
                {
                  'name': 'text',
                  'description': '<p>description of the canvas.</p>\n',
                  'type': 'String'
                },
                {
                  'name': 'display',
                  'description': '<p>either LABEL or FALLBACK.</p>\n',
                  'type': 'Constant',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Environment'
            },
            'describeElement': {
              'name': 'describeElement',
              'params': [
                {
                  'name': 'name',
                  'description': '<p>name of the element.</p>\n',
                  'type': 'String'
                },
                {
                  'name': 'text',
                  'description': '<p>description of the element.</p>\n',
                  'type': 'String'
                },
                {
                  'name': 'display',
                  'description': '<p>either LABEL or FALLBACK.</p>\n',
                  'type': 'Constant',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Environment'
            },
            'textOutput': {
              'name': 'textOutput',
              'params': [
                {
                  'name': 'display',
                  'description': '<p>either FALLBACK or LABEL.</p>\n',
                  'type': 'Constant',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Environment'
            },
            'gridOutput': {
              'name': 'gridOutput',
              'params': [
                {
                  'name': 'display',
                  'description': '<p>either FALLBACK or LABEL.</p>\n',
                  'type': 'Constant',
                  'optional': true
                }
              ],
              'class': 'p5',
              'module': 'Environment'
            },
            'alpha': {
              'name': 'alpha',
              'params': [
                {
                  'name': 'color',
                  'description': '<p><a href="#/p5.Color">p5.Color</a> object, array of\n                                        color components, or CSS color string.</p>\n',
                  'type': 'p5.Color|Number[]|String'
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'blue': {
              'name': 'blue',
              'params': [
                {
                  'name': 'color',
                  'description': '<p><a href="#/p5.Color">p5.Color</a> object, array of\n                                        color components, or CSS color string.</p>\n',
                  'type': 'p5.Color|Number[]|String'
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'brightness': {
              'name': 'brightness',
              'params': [
                {
                  'name': 'color',
                  'description': '<p><a href="#/p5.Color">p5.Color</a> object, array of\n                                        color components, or CSS color string.</p>\n',
                  'type': 'p5.Color|Number[]|String'
                }
              ],
              'class': 'p5',
              'module': 'Color'
            },
            'color': {
              'name': 'color',
              'class': 'p5',
              'module': 'Color',
              'overloads': [
                {
                  'params': [
                    {
                      'name': 'gray',
                      'description': '<p>number specifying value between white and black.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'alpha',
                      'description': '<p>alpha value relative to current color range\n                                (default is 0-255).</p>\n',
                      'type': 'Number',
                      'optional': true
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'v1',
                      'description': '<p>red or hue value relative to\n                                the current color range.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'v2',
                      'description': '<p>green or saturation value\n                                relative to the current color range.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'v3',
                      'description': '<p>blue or brightness value\n                                relative to the current color range.</p>\n',
                      'type': 'Number'
                    },
                    {
                      'name': 'alpha',
                      'description': '',
                      'type': 'Number',
                      'optional': true
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'value',
                      'description': '<p>a color string.</p>\n',
                      'type': 'String'
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'values',
                      'description': '<p>an array containing the red, green, blue,\n                                and alpha components of the color.</p>\n',
                      'type': 'Number[]'
                    }
                  ]
                },
                {
                  'params': [
                    {
                      'name': 'color',
                      'description': '',
                      'type': 'p5.Color'
                    }
                  ]
                }
              ]
            },
            'green': {
              'name': 'green',
              'params': [
                {
                  'name': 'color',
                  'description': '<p><a href="#/p5.Color">p5.Color</a> object, array of\n                                        color components, or CSS color string.</p>\n',
                  'type': 'p5.Color|Number[]|String'
                }
              ],