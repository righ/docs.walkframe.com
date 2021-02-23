import * as React from "react";
import {
  GridSheet,
  Renderer,
} from "react-gridsheet";
import "./App.css";



export default function App() {
  return (
    <div className="App">
      <h1>Drag right bottom of the sheets</h1>
      <table style={{tableLayout: "fixed", width: "100%", borderCollapse: "collapse"}}>
        <tbody>
          <tr>
            <td>
              <h2>Resize: both</h2>
              <GridSheet
                data={Array.from({length: 256}, (i, c) => Array.from({length: 100}, (j, t) => `rgba(${c},${c},${c},${(100-t) / 100})`))}
                style={{ maxWidth: "100%" }}
                options={{
                  cells: {
                    default: {
                      style: {color: "#ffffff", fontSize: 9},
                      renderer: "coloring",
                    }
                  },
                  renderers: {
                    coloring: new ColoringRenderer(),
                  },
                  sheetResize: "both",
                }}
              />
            </td>
            <td>
              <h2>Resize: vertical</h2>
              <GridSheet
                data={Array.from({length: 256}, (i, r) => Array.from({length: 256}, (j, g) => `#${(255-r).toString(16).padStart(2, "0")}${(255-g).toString(16).padStart(2, "0")}00`))}
                style={{ maxWidth: "100%"}}
                options={{
                  cells: {
                    default: {
                      style: {color: "#ffffff"},
                      renderer: "coloring",
                    }
                  },
                  renderers: {
                    coloring: new ColoringRenderer(),
                  },
                  sheetResize: "vertical",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h2>Resize: horizontal</h2>
              <GridSheet
                data={Array.from({length: 256}, (i, r) => Array.from({length: 256}, (j, b) => `#${(255-r).toString(16).padStart(2, "0")}00${(255-b).toString(16).padStart(2, "0")}`))}
                style={{ maxWidth: "100%"}}
                options={{
                  cells: {
                    default: {
                      style: {color: "#ffffff"},
                      renderer: "coloring",
                    }
                  },
                  renderers: {
                    coloring: new ColoringRenderer(),
                  },
                  sheetResize: "horizontal",
                }}
              />
            </td>
            <td>
              <h2>Resize: none</h2>
              <GridSheet
                data={Array.from({length: 256}, (i, g) => Array.from({length: 256}, (j, b) => `#00${(255-g).toString(16).padStart(2, "0")}${(255-b).toString(16).padStart(2, "0")}`))}
                style={{ maxWidth: "100%"}}
                options={{
                  cells: {
                    default: {
                      style: {color: "#ffffff"},
                      renderer: "coloring",
                    }
                  },
                  renderers: {
                    coloring: new ColoringRenderer(),
                  },
                  sheetResize: "none",
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

class ColoringRenderer extends Renderer {
  string(value: string) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: value,
        }}
      >{value}</div>
    );
  }
}
