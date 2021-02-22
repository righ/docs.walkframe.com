import * as React from "react";
import {
  GridSheet,
  Renderer,
  MatrixType,
} from "react-gridsheet";
import "./App.css";

const initialData: MatrixType = [];
for (let g = 255; g >= 0; g--) {
  const g16 = g.toString(16);
  const row: string[] = [];
  for (let b = 255; b >= 0; b--) {
    const b16 = b.toString(16);
    row.push(`#00${g16.length === 1 ? "0" + g16 : g16 }${b16.length === 1 ? "0" + b16 : b16}`);
  }
  initialData.push(row);
};

const initialHeight = 200;
const initialWidth = 300;

export default function App() {
  const wrapperRef = React.useRef<HTMLDivElement>(
    document.createElement("div")
  );
  const [height, setHeight] = React.useState(initialHeight);
  const [width, setWidth] = React.useState(initialWidth);
  const [data] = React.useState(initialData);

  return (
    <div className="App">
      <h1>Color code table (#00ffff ~ #000000)</h1>
      <div
        ref={wrapperRef} 
        onMouseEnter={(e) => {
          setHeight(e.currentTarget.clientHeight);
          setWidth(e.currentTarget.clientWidth);
        }}
        style={{
          width,
          height,
          resize: "both",
          overflow: "hidden",
          border: "solid 1px #000000",
        }}>
        <GridSheet
          data={data}
          options={{
            sheetHeight: wrapperRef.current.clientHeight || initialHeight,
            sheetWidth: wrapperRef.current.clientWidth || initialWidth,
            cells: {
              default: {
                style: {color: "#ffffff"},
                renderer: "coloring",
              }
            },
            renderers: {
              coloring: new ColoringRenderer(),
            }
          }}
        />
      </div>
      
      <div style={{margin: 20, fontSize: 30}}>
        Drag right-bottom of this table.
      </div>
      
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
