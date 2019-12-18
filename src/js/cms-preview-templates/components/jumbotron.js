import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title, subtitle} = this.props;
    return <div>
      <div className="bg-cover text-white text-center" style={{
        backgroundImage: image && `url(${image})`
      }}>
        <div className="py-48">
          <div className="">
              <h1 className="text-5xl">{ title }</h1>
            <div className="">
              {subtitle && <p className="b f4 di lh-title mb3 white mw6 bg-primary">{ subtitle }</p>}
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
