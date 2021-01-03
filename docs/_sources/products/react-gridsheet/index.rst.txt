.. toctree::
   :maxdepth: 2

ReactGridsheet
==========================

.. note::

  - `Examples </products/react-gridsheet/examples>`__
  - `GitHub <https://github.com/righ/react-gridsheet>`__

Installation
-------------------------

.. code-block:: shell

  $ npm install react-gridsheet --save

.. code-block:: shell

  $ yarn add react-gridsheet


How to use
-------------------------

.. code-block:: jsx

  import GridSheet from "react-gridsheet";

  export default function App() {
    return (<div>
      <GridSheet
        data={[ // Required: any[][]
           ["a", 1, true],
           ["b", 2, false],
           ["c", 3, null],
        ]}
        options={{ // Optional
          // all options are optional
        }}
      />
    </div>);
  }

.. note::

  More examples are `here </products/react-gridsheet/examples>`__.


options prop
-------------------------

:options.cells:

  ``options.cells`` affects the cells matching the keys.

  - `default` (lowercase) field matches all rows, columns and cells.

  - An upppercase letter field means a config for a column.

    - e.g. **A**: 1st column, **B**: 2nd column

  - A number Fields means a config for a row.

    - e.g. **1**: 1st row, **2**: 2nd column

  - An upppercase letter + A number field means a unique cell.

    - e.g. **A1**: Most top left cell.
    - If a cell matches multiple cell configs, it applys the configs in the following order: `cell` > `column` > `row` > `default`.

  :label: Header's label instead of Column ID. Only row and column configs work.
  :width: Horizontal header's width. (px)
  :height: Vertical header's height. (px)
  :style: Cell style object. (React.CSSProperties)
  :verticalAlign: This field equals css `vertical-align` property.
  :render: Renderer identity. (string)
  :parser: Parser identity. (string)

:options.historySize:

  - History (undo, redo) size.
  - default: ``10``

:options.headerHeight:

  - Vertical header height.
  - default: ``"20px"``

:options.headerWidth:

  - Horizontal header width.
  - default: ``"50px"``

:options.defaultHeight:
  
  - Default cell height.
  - default: ``"20px"``

:options.defaultWidth:

  - Default cell width.
  - default: ``"90px"``

:options.editingOnEnter:

  - Whether `ENTER` key gets down and set the cell editing.
  - default: ``true``

:options.cellLabel: 

  - Whether cell labels (navigator) show.
  - default: ``true``

:options.stickyHeaders:

  - Header fixing specification.

    - ``"both"``: horizontal and vertical headers are both fixed.
    - ``"horizontal"``: Only horizontal header is fixed.
    - ``"vertical"``: Only vertical header is fixed.
    - ``"none"``: Neither headers are fixed.

  - default: ``"both"``

:options.mode: 

  - color mode. It allows ``"light"`` or ``"dark"``.
  - default: ``"light"``

:options.renderers: 

  - You can create a new Renderer inheriting ``Renderer`` class.

    - It has to be registered here. The key identifies the renderer.

  - To use the renderer, you have to specify the renderer's identity to ``options.cells[column].renderer``.
  - default: ``{}``

  .. code-block:: jsx

    import {
      GridSheet,
      Renderer,
    } from "react-gridsheet";

    class QuoteRenderer extends Renderer {
      string(value) {
        return `"${value}"`;
      }
    }

    return (<GridSheet
      data={[ // any[][]
        ["a", 1, true],
        ["b", 2, false],
        ["c", 3, null],
      ]}
      options={{
        renderers: {
          quote: QuoteRenderer,
        },
        cells: {
          A: { renderer: "quote" },
        },
      }}
    />)

:options.parsers: 

  - You can create a new Parser inheriting ``Parser`` class.

    - It has to be registered here. The key identifies the parser.

  - To use the parser, you have to specify the parser's identity to ``options.cells[column].parser``.

  - default: ``{}``

  .. code-block:: jsx

    import {
      GridSheet,
      Parser,
    } from "react-gridsheet";

    class EvalParser extends Parser {
      parseFunctions = [
        this.evaluate,
      ];

      evaluate(value) {
        return eval(value);
      }
    }

    return (<GridSheet
      data={[ // any[][]
        ["a", 1, true],
        ["b", 2, false],
        ["c", 3, null],
      ]}
      options={{
        parsers: {
          eval: EvalParser,
        },
        cells: {
          C: { parser: "eval" },
        },
      }}
    />)


:options.onSave: 

  - A callback function on you saving.

    - Saving events are emitted by `Ctrl + s` or `Command + s`.

  - ``(matrix, cellsOption) => void``


:options.onChange:

  - A callback function on ``matrix`` or ``options.cells`` changed.
  - ``(matrix, cellsOption) => void``
