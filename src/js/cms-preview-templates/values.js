import React from "react";
import { List } from 'immutable';

import Jumbotron from "./components/jumbotron";

const MediaBlock = ({heading, text, imageUrl, reverse}) => {
  const imageContainerClassName = reverse
    ? "flex"
    : "flex flex-row-reverse";
  return <div className="mt-5">
    <div className={imageContainerClassName}>
      <div className="w-1/2">
        <img src={imageUrl} alt="" className="" />
      </div>
      <div className="w-1/2 bg-gray-300 p-5">
        <h3 className="text-lg">{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  </div>;
};

export default class ValuesPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }
    
    const entryValues = entry.getIn(["data", "values"]);
    const values = entryValues ? entryValues.toJS() : [];
    
    return <div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} />
      <div className="">
        <div className="">
          {values.map(({text, heading, imageUrl}, i) =>
            <MediaBlock key={i} text={text} heading={heading} imageUrl={imageUrl} reverse={i % 2 === 0} />
          )}
        </div>
      </div>
    </div>;
  }
}
