import React from "react";
import Title from "../atoms/Title";

interface IProps {
  title?: string;
  name?: string;
  changeTitle?: any;
}

class Header extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    /**
     * Default properties.
     */
  }
  public static defaultProps: IProps = {
    title: "sample",
    name: "sampleName",
  };
  handleChange(e: any) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    console.log(this.props);
    return (
      <header>
        {/* <Title title={this.props.title} /> */}
        <input
          value={this.props.title}
          onChange={this.handleChange.bind(this)}
        />
      </header>
    );
  }
}

export default Header;
