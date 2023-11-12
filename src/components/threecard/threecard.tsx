import { Slot, component$, useStyles$, useStylesScoped$ } from "@builder.io/qwik";

import CardStyles from "./style.css?inline"

export default component$(() => {
 useStyles$(CardStyles)
  return (
    <>
   
     
   
   
    <div  id="sketch-container"  class="absolute top-0 left-0 z-[-100]">
      
     
    </div>
    <Slot name="links"/>
    </>
    
  );
});
