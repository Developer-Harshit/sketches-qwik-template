import { component$ } from "@builder.io/qwik";


export default component$(() => {
  return (
    <header class="bg-white">
      <h2>Examples</h2>
        <ul class="flex gap-4 p-5">
          <li >
          <a 
          class="bg-slate-900 text-green-400 p-2 font-bold hover:bg-transparent transition ease-in" href="/examples/three"
          >Three</a>
          </li>
          <li >
            <a class="bg-slate-900 text-red-500 p-2 font-bold hover:bg-transparent transition ease-in"  href="/examples/p5">P5</a>
          </li>
          
        </ul>
    </header>
  );
});
