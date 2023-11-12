import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import P5card from "~/components/p5card/p5card";



export default component$(() => {
  return (
    <>
    <h1 class="bg-white">hi</h1>
    <P5card>
      <span q: slot = "links">
      <script src="/js/sketch.js"></script>
      </span>
    </P5card>
    
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
