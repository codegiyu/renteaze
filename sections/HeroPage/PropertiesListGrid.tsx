"use client";
import { useEffect } from "react";
import Isotope from "isotope-layout";
import { allProperties } from "@/constants/allProperties";
import PropertyCardPortrait from "@/components/PropertyCardPortrait";

const PropertiesListGrid: React.FC = () => {
    // useEffect(() => {
    //   new Isotope(".masonry-container",{
    //     itemSelector : ".masonry-item",
    //     percentPosition: true,
    //     masonry: {
    //       columnWidth: '.grid-sizer'
    //     }
    //   })
    // }, [])

    return (
      <section className="container-120">
        <div id="masonry" className="w-full masonry-container columns-3">
          {allProperties.map((item, idx) => (
            <PropertyCardPortrait 
              key={idx}
              id={item.id}
              grade={item.grade}
              acquisitionType={item.acquisitionType}
              image={item.image}
              price={item.price}
              name={item.name}
              rating={item.rating}
              intro={item.intro}
              features={item.features}
              condition={item.condition}
            />
          ))}
          <div className='grid-sizer'></div>
        </div>
      </section>
    )
}

export default PropertiesListGrid