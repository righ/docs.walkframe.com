
.. toctree::
   :maxdepth: 2

Examples
========
Here are `react-gridsheet <https://www.npmjs.com/package/react-gridsheet>`__ examples in demo.

.. note::

  - It seems that dragging cells does not work well over iframe (embedded codesandbox) in Chrome browser.
    
    - Go see the example directly.

  - `GitHub <https://github.com/righ/react-gridsheet>`__
  - `Document </products/react-gridsheet/>`__

Example1 - Simple example
-----------------------------------------

.. raw:: html

  <iframe src="/_static/examples/react-gridsheet-example1/build/"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-gridsheet example simple"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>

- Cell config:

  - ``options.cells[column].label``: Column label.
  - ``options.cells[column].width``: Column width.
  - ``options.cells[column].style``: Cell style in the column.

Example2 - Custom renderers with dark mode
------------------------------------------

.. raw:: html

  <iframe src="/_static/examples/react-gridsheet-example2/build/"
     style="width:100%; height:600px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-gridsheet with api response in dark mode"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
     loading="lazy"
   ></iframe>

- Dark mode:

  - ``options.mode = 'dark'``: Set mode dark

- API response format:

  - ``oa2aa(response.data)``: converts ``object in array`` to ``array in array``

- Custom renderer:

  - IdRenderer: renders a number without comma.
  - ImageRenderer: renders an image related to the string as a link.
  - LinkRenderer: renders a string as a link.

Example3 - Event handling
------------------------------

.. raw:: html

  <iframe src="/_static/examples/react-gridsheet-example3/build/"
     style="width:100%; height:600px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-gridsheet sample with parser and feedback method"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

- Custom parser:

  - ListParser: parses a newline delimited string as a (string) list.

- Feedback functions:

  - onSave: ``setTsv`` is set to render TSV.
  - onChange: ``console.log`` is set to show the changes.

Example4 - Multiple sheets
-------------------------------

.. raw:: html

  <iframe src="/_static/examples/react-gridsheet-example4/build/"
     style="width:100%; height:700px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-gridsheet sample with parser and feedback method"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>