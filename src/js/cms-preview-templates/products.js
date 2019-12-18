import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>




<section class="text-white p-8 bg-black">
    <div class="container mx-auto">
        <div class="flex-grow flex flex-col justify-center text-center ">
          <div class="overlay opacity-50"></div>
          <iframe width="100%" height="100%"
            src="https://www.youtube.com/embed/QyQ_6qbsvnY?&autoplay=1&loop=1&rel=0&showinfo=0&controls=0&color=white&iv_load_policy=3&mute=1&playlist=QyQ_6qbsvnY" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
         <div class="absolute pin z-10 flex-grow flex flex-col justify-center text-center">
              <div class="w-full py-48">
                <h3 class="text-5xl font-serif tracking-wide">{entry.getIn(["data", "hero", "heading"])}</h3>
            </div>
          </div>

        </div>
    </div>
  </section>


      <div className="pt-24 pb-24">
        <div className="text-center">
          <h2 className="font-bold uppercase tracking-wide text-sm leading-loose">{entry.getIn(["data", "intro", "heading"])}</h2>
          <p className="pb-10">{entry.getIn(["data", "intro", "description"])}</p>

          <div className="flex">
            {(entry.getIn(["data", "intro", "blurbs"]) || []).map((blurb, index) => <div className="w-1/4" key={index}>
              <img src={blurb.get("image") && getAsset(blurb.get("image"))} alt="" className="px-1"/>
              <p class="text-xs">{blurb.get("text")}</p>
            </div>)}
          </div>
        </div>
      </div>

      <div className="">
        <div className="">
          <h3 className="bold">{entry.getIn(["data", "main", "heading"])}</h3>
          <p className="pt-4">{entry.getIn(["data", "main", "description"])}</p>
        </div>
      </div>

      <div className="p-10">
        <div className="flex">
          <div className="w-1/2 p-1">
            <img src={getAsset(entry.getIn(["data", "main", "image1", "image"]))}/>
          </div>

          <div className="w-1/2 p-1">
            <img src={getAsset(entry.getIn(["data", "main", "image2", "image"]))}/>
          </div>
          </div>
          <div className="w-full p-1">
            <img src={getAsset(entry.getIn(["data", "main", "image3", "image"]))}/>
          </div>
      </div>

      <div className="p-8">
        {(entry.getIn(['data', 'testimonials']) || []).map((testimonial, index) => <div className="center mb3 ph3" key={index}>
        	<blockquote className="pb-8">
        		<p className="text-xl font-medium">“{testimonial.get('quote')}”</p>
        		<cite className="font-medium text-grey-800">{testimonial.get('author')}</cite>
        	</blockquote>
        </div>)}
      </div>

      <img src={getAsset(entry.getIn(['data', 'full_image']))} alt="" className="db w-100"/>

      <div className="">

      	<div className="text-center py-10 px-4">
      		  <h2 className="block uppercase tracking-wide text-grey-dark text-sm leading-loose">{entry.getIn(['data', 'pricing', 'heading'])}</h2>
      		  <p className="pb-8">{entry.getIn(['data', 'pricing', 'description'])}</p>
          </div>

      		<div className="flex py-24">
            {(entry.getIn(['data', 'pricing', 'plans']) || []).map((plan, index) => <div className="w-1/3" key={index}>
              <div className="text-center">

              	<h3 className="block uppercase text-grey-dark tracking-wide text-xs">{plan.get('plan')}</h3>

              	<p className="text-3xl">
              		<span className="">$</span>{plan.get('price')}
              	</p>

                	<p className="text-center text-sm">{plan.get('description')}</p>

              	<ul>
                  {(plan.get('items') || []).map((item, index) => <li key={index}>
                    <p className="text-sm border-t py-2">{item}</p>
                  </li>)}
              	</ul>

              </div>

            </div>)}
      		</div>

      </div>
    </div>;
  }
}
