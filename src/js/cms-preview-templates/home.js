import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
        <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>


        <div className="bg-gray-800 pt-8 pb-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-medium">{entry.getIn(["data", "video", "heading"])}</h2>
            <p className="">{entry.getIn(["data", "video", "text"])}</p>
            <img class="w-1/2 mx-auto" src={getAsset(entry.getIn(["data", "video", "image"]))}/>
            <p class="text-xs absolute -mt-10 left-0 right-0 text-gray-500">{entry.getIn(["data", "video", "vsrc"])}</p>
          </div>
        </div>

        <div className="bg-gray-200 py-24">
          <div className="flex">
          <div class="w-1/2">
            <h2 className="text-2xl pl-5">{entry.getIn(["data", "blurb", "heading"])}</h2>
          </div>
          <div class="w-1/2 pr-5">
          <p className="text-gray-600">{entry.getIn(["data", "blurb", "text"])}</p></div>
          </div>
        </div>

        <div className="pb-24">
          <div className="pt-10">
            <h2 className="text-xl">{entry.getIn(["data", "intro", "heading"])}</h2>
            <p className="text-lg text-gray-500 pb-8">{entry.getIn(["data", "intro", "text"])}</p>
            <div className="flex">
              {(entry.getIn(["data", "products"]) || []).map((product, i) => <div className="" key={i}>
                <img src={getAsset(product.get("image"))} alt="" className="px-3"/>
                <p class="pt-4 text-gray-500 text-sm">{product.get("text")}</p>
              </div>)}
            </div>
          </div>
        </div>

        <div className="bg-gray-300">
          <div className="flex content-center flex-wrap text-center">

              <div className="w-1/2">
                <img src="/img/home-about-section.jpg" alt="" className="mb3"/>
              </div>
              <div className="w-1/2 p-10">
                <h2 className="text-xl font-thin pb-2">{entry.getIn(["data", "values", "heading"])}</h2>
                <p className="text-xs leading-normal pb-2 text-gray-600">{entry.getIn(["data", "values", "text"])}</p>
                <a href="{{.buttonLink}}" className="bg-black text-white px-4 py-2">Read more</a>
              </div>
          </div>
        </div>


    </div>
  }
}