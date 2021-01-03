
.. toctree::
   :maxdepth: 2

Examples
========
Here are `react-gridsheet` examples in demo.

.. note::

  - It seems that dragging cells does not work well over iframe (embedded codesandbox) in Chrome browser.
    
    - Go see the example directly.

Example1
--------------

.. raw:: html

  <iframe src="https://codesandbox.io/embed/react-gridsheet-example-simple-dhpok?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-gridsheet example simple"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>

- Cell config:

  :``options.cells[column].label``: Column label.
  :``options.cells[column].width``: Column width.
  :``options.cells[column].style``: Cell style in the column.

Example2
--------------

.. raw:: html

  <iframe src="https://codesandbox.io/embed/react-gridsheet-with-api-response-in-dark-mode-e4gpn?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-gridsheet with api response in dark mode"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

- Dark mode: ``options.mode = 'dark'``
- API response formatter: ``oa2aa(response.data)`` (Converting *object in array* to *array in array*)
- Custom renderer:

  - You can create a new Renderer inheriting ``Renderer`` class.

    - It has to be registered to ``options.renderers`` object. The key identifies the renderer.

  - To use the renderer, you have to specify the renderer's identity to ``options.cells[column].renderer``.



Example3
--------------

.. raw:: html

  <iframe src="https://codesandbox.io/embed/react-gridsheet-sample-with-parser-and-feedback-method-hhlnn?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-gridsheet sample with parser and feedback method"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

- Custom parser:

  - You can create a new Parser inheriting ``Parser`` class.

    - It has to be registered to ``options.parsers`` object. The key identifies the parser.

  - To use the parser, you have to specify the parser's identity to ``options.cells[column].parser``.

- Feedback functions:

  - onSave: A callback function on you saving (`Ctrl + s` or `Command + s`).

  - onChange: A callback function on ``matrix`` or ``options.cells`` changed.
