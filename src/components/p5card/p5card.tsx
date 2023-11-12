import { Slot, component$ } from "@builder.io/qwik";



export default component$(() => {
    
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
