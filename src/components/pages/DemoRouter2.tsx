import React from "react";

interface IProps {
  title?: string;
}

class DemoRouter2 extends React.Component<IProps, {}> {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href={`/`}>Root</a>
            </li>
            <li>
              <a href={`/demo1`}>Demo1</a>
            </li>
            <li>
              <a href={`/todo`}>todo</a>
            </li>
          </ul>
        </nav>
        <h1>Demo2</h1>
      </div>
    );
  }
}

export default DemoRouter2;
