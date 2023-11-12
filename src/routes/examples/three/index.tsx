import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ThreeCard from "~/components/threecard/threecard";

export default component$(() => {
  return (
    <>
    <h1 class="bg-white">hi</h1>
    <ThreeCard>
    <span q: slot = "links">
      <script type="module" src="/js/main.js"></script>
    </span>
      
    </ThreeCard>
    
    
    </>
  )
});

export const head: DocumentHead = {
  title: "Sketch templates",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
