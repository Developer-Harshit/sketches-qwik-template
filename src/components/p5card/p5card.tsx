import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";

import CardStyles from "./style.css?inline"

export default component$(() => {
    useStylesScoped$(CardStyles)
  return (
    <>
    <script src="/js/libraries/p5.js"></script>
    <Slot name="links"/>
   
    <div  id="sketch-container"  class="absolute top-0 left-0 z-[-100]">
      
        {/* canvas supposed to be created here */}
    </div>
    </>
    
  );
});
