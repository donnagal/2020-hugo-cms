import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return <div className="p-10">
      <h1 className="text-3xl font-thin pb-1">{ entry.getIn(["data", "title"])}</h1>
      
      <div className="text-gray-600 text-xs pb-8">
        <p class="text-gray-800 text-sm pb-1">{ entry.getIn(["data", "description"]) }</p>
        <p>
          { format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") } | Read in x minutes
        </p>
      </div>

      <div className="text-gray-700">
        { image && <img className="pb-10" src={ image } alt={ entry.getIn(["data", "title"])} /> }
        { widgetFor("body") }
      </div>
    </div>;
  }
}
