import React, {useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { Grid } from 'semantic-ui-react'
export function Title({children, className}){
    const ref = useRef (null);
    const isInView = useInView(ref,{once:true});
    return(
      <div ref={ref} style={{
        transform: isInView ? "translateY(0px)" : "translateY(40px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s ease-in-out 0s"
      }}>
        <h1 className={className}>{ children }</h1>
      </div>
    )
}

export function BoxFromTop({children, className, delayProp}){
    const ref = useRef (null);
    const isInView = useInView(ref,{once:true});
    return(
      <div ref={ref} style={{
        transform: isInView ? "translateY(0px)" : "translateY(40px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s ease-in-out "+delayProp+"s"
      }} className={className}>
        {children}
      </div>
    )
}

export function FadeInBox ({children, className, delayProp}) {
    const ref = useRef (null);
    const isInView = useInView(ref,{once:true});
    return(
      <div className={className} ref={ref} style={{ 
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s ease-in-out "+delayProp+"s"
       }}>
        { children }
      </div>
    ) 
  }

export function ImageFromRight({children, className}){
    const ref = useRef (null);
    const isInView = useInView(ref,{once:true});
    return(
      <div className={className} ref={ref} style={{ 
        transform: isInView ? "translateX(0px)" : "translateX(40px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s ease-in-out 0.3s"
       }}>
        { children }
      </div>
    )
}

export function ImageFromLeft({children, className, delayProp}){
  const ref = useRef (null);
  const isInView = useInView(ref,{once:true});
  return(
    <div className={className} ref={ref} style={{ 
      transform: isInView ? "translateX(0px)" : "translateX(-100px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s ease-in-out "+delayProp+"s"
     }}>
      { children }
    </div>
  )
}


export function AboutSections ({ sectionClass, sectionTitle, sectionTitleClass, gridClass, data, columnClass, perObjectClass, iconClass, textClass}){
    const ref = useRef (null);
    const isInView = useInView(ref,{once:true});
  
    return(  
      <BoxFromTop className={sectionClass} ref={ref} delayProp="0.6">
        <h2 className={sectionTitleClass}>{sectionTitle}</h2>
        <Grid columns={5} className={gridClass} centered doubling>
          {
            data.map((item, index)=>(
              <Grid.Column key={index} className={columnClass}>
                <BoxFromTop className={perObjectClass} delayProp={(index * 0.3 + 1)}>
                  <p className={iconClass}>{item.icon}</p>
                  <p className={textClass}>{item.name}</p>
                </BoxFromTop>
              </Grid.Column>
            ))
          }
        </Grid>
      </BoxFromTop>
    )
}