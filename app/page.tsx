"use client";

import { useState, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/button";

const data = {
  anyone: {
    label: "For anyone",
    description:
      "Hello there, I’m an engineer who cares about making smart web interface solutions for giving people a comfortable experience.",
  },
  recruiters: {
    label: "Recruiters",
    description:
      "I’m an staff user interface engineer with over 15 years of web development experience across different large and small companies.",
  },
  engineers: {
    label: "Engineers",
    description:
      "I’m an {staff engineer} and while {you.role == me.role} we both share many common {...attributes}. I'm also a passionate open-source contributor.",
  },
  designers: {
    label: "Designers",
    description:
      "I'm a high design sensitive engineer. We can work closer sharing my tech foreground with your design needs, from wireframes to high-fidelity mockups.",
  },
  "project-managers": {
    label: "Project Managers",
    description:
      "I’m a systems thinker with a high bar for quality. From process to pixels, I’ll collaborate with you, learn from you, and help make something we’re proud of.",
  },
  "product-managers": {
    label: "Product Managers",
    description:
      "I bring end-to-end product acumen, from vision and strategy to discovery and delivery. I’ll partner closely with you to generate the highest impact possible.",
  },
};

export default function Home({}: { children: ReactNode; className?: string }) {
  const [role, setRole] = useState<
    | "anyone"
    | "recruiters"
    | "design-directors"
    | "product-designers"
    | "product-managers"
    | "engineers"
  >("anyone");
  const { description } = data[role];
  return (
    <>
      <div className="flex gap-2 flex-col">
        <div className="flex gap-2 w-full">
          <Button design="flat" intent="basic">
            a
          </Button>
          <Button design="outlined" intent="basic">
            b
          </Button>
          <Button design="tinted" intent="basic">
            b
          </Button>
          <Button design="ghost" intent="basic">
            b
          </Button>
        </div>
        <div className="flex gap-2 w-full">
          <Button design="flat" intent="main">
            a
          </Button>
          <Button design="outlined" intent="main">
            b
          </Button>
          <Button design="tinted" intent="main">
            b
          </Button>
          <Button design="ghost" intent="main">
            b
          </Button>
        </div>
        <div className="flex gap-2 w-full">
          <Button design="flat" intent="support">
            a
          </Button>
          <Button design="outlined" intent="support">
            b
          </Button>
          <Button design="tinted" intent="support">
            b
          </Button>
          <Button design="ghost" intent="support">
            b
          </Button>
        </div>
        <div className="flex gap-2 w-full">
          <Button design="flat" intent="accent">
            a
          </Button>
          <Button design="outlined" intent="accent">
            b
          </Button>
          <Button design="tinted" intent="accent">
            b
          </Button>
          <Button design="ghost" intent="accent">
            b
          </Button>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non
        erat in mi sagittis pellentesque non non dui. Ut quis arcu nec elit
        pellentesque lacinia. Aenean suscipit commodo neque faucibus semper.
        Aenean mattis lorem nec sem sodales, eu viverra nisi tincidunt. Morbi
        vitae pretium erat. Sed tincidunt purus sapien, vel commodo quam
        tristique sit amet. Maecenas tincidunt nisi non neque cursus, vitae
        rhoncus lectus pharetra. Nulla pretium pellentesque dignissim.
        Vestibulum erat sapien, tristique sed turpis hendrerit, vestibulum
        dignissim lectus. Donec tincidunt orci vel ex sodales, id aliquam justo
        fermentum. Phasellus gravida tincidunt arcu, nec egestas mi bibendum ac.
        Nam tincidunt nunc ante, at egestas nisi fringilla eu. Curabitur vitae
        egestas nisl. Morbi feugiat ligula id ipsum auctor dictum.
      </p>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sed tincidunt risus. Nullam molestie lacus
        id mi vulputate, vel euismod ipsum maximus. Pellentesque ac purus in
        risus commodo ultrices eget at turpis. In id posuere leo. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Pellentesque feugiat elementum leo eu feugiat. Curabitur
        tristique pretium quam, vel maximus purus placerat aliquet. Donec sapien
        magna, dictum ut sollicitudin in, cursus lacinia lectus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Proin quis rhoncus
        diam. Praesent interdum non tortor at feugiat. Cras volutpat tellus in
        magna condimentum suscipit. Donec non commodo ante. Duis laoreet quam in
        tincidunt blandit. Aliquam condimentum orci ac suscipit sagittis.
      </p>
      <p>
        Phasellus laoreet sem accumsan rhoncus blandit. Sed metus tortor, tempor
        ac lorem ut, faucibus hendrerit felis. Vestibulum pellentesque feugiat
        magna ac hendrerit. Pellentesque eget imperdiet diam. Sed sit amet neque
        a tortor porta blandit. Proin eu mattis sapien. Sed blandit ut nunc eget
        lacinia. Fusce suscipit urna sit amet lacus volutpat, et laoreet mauris
        semper. Nunc vulputate massa quis eleifend egestas. Aenean sit amet
        turpis justo. Fusce in ipsum nec risus aliquet bibendum. Nam leo eros,
        euismod ut finibus eget, bibendum sodales ligula. Vestibulum ac velit
        est. Suspendisse interdum justo vel dui euismod pharetra. Quisque
        commodo eget risus sodales iaculis. Phasellus egestas leo et quam
        hendrerit scelerisque.
      </p>
      <p>
        Ut et dui dolor. Donec finibus nunc sed vestibulum viverra. Donec dolor
        lorem, pulvinar vel blandit sit amet, semper a lectus. Sed auctor enim
        et augue aliquet placerat. Aliquam erat volutpat. Nam et dignissim erat.
        Suspendisse ut faucibus purus. Aliquam lacus nisl, pharetra in erat
        eget, facilisis viverra enim. Morbi faucibus massa sit amet nunc
        tristique suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Mauris imperdiet tortor sed dolor hendrerit, ac sollicitudin
        sapien tempor. Etiam condimentum ac odio et tincidunt.
      </p>
      <p>
        Mauris ex ante, varius eu ullamcorper a, venenatis at ante. Duis
        sagittis vehicula ligula ac consequat. Phasellus eget lacus convallis,
        commodo dolor vel, ultrices mauris. Vivamus vitae gravida velit. Sed
        aliquet magna sit amet ipsum pulvinar fermentum. Nulla cursus augue
        quam, at fermentum erat tempus eget. Donec a tortor sit amet velit
        facilisis pharetra a sit amet leo. Mauris maximus vestibulum orci, a
        ultricies metus euismod a. Donec porta quam sed imperdiet euismod. Nunc
        justo augue, eleifend nec vehicula ac, rhoncus ac nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non
        erat in mi sagittis pellentesque non non dui. Ut quis arcu nec elit
        pellentesque lacinia. Aenean suscipit commodo neque faucibus semper.
        Aenean mattis lorem nec sem sodales, eu viverra nisi tincidunt. Morbi
        vitae pretium erat. Sed tincidunt purus sapien, vel commodo quam
        tristique sit amet. Maecenas tincidunt nisi non neque cursus, vitae
        rhoncus lectus pharetra. Nulla pretium pellentesque dignissim.
        Vestibulum erat sapien, tristique sed turpis hendrerit, vestibulum
        dignissim lectus. Donec tincidunt orci vel ex sodales, id aliquam justo
        fermentum. Phasellus gravida tincidunt arcu, nec egestas mi bibendum ac.
        Nam tincidunt nunc ante, at egestas nisi fringilla eu. Curabitur vitae
        egestas nisl. Morbi feugiat ligula id ipsum auctor dictum.
      </p>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sed tincidunt risus. Nullam molestie lacus
        id mi vulputate, vel euismod ipsum maximus. Pellentesque ac purus in
        risus commodo ultrices eget at turpis. In id posuere leo. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Pellentesque feugiat elementum leo eu feugiat. Curabitur
        tristique pretium quam, vel maximus purus placerat aliquet. Donec sapien
        magna, dictum ut sollicitudin in, cursus lacinia lectus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Proin quis rhoncus
        diam. Praesent interdum non tortor at feugiat. Cras volutpat tellus in
        magna condimentum suscipit. Donec non commodo ante. Duis laoreet quam in
        tincidunt blandit. Aliquam condimentum orci ac suscipit sagittis.
      </p>
      <p>
        Phasellus laoreet sem accumsan rhoncus blandit. Sed metus tortor, tempor
        ac lorem ut, faucibus hendrerit felis. Vestibulum pellentesque feugiat
        magna ac hendrerit. Pellentesque eget imperdiet diam. Sed sit amet neque
        a tortor porta blandit. Proin eu mattis sapien. Sed blandit ut nunc eget
        lacinia. Fusce suscipit urna sit amet lacus volutpat, et laoreet mauris
        semper. Nunc vulputate massa quis eleifend egestas. Aenean sit amet
        turpis justo. Fusce in ipsum nec risus aliquet bibendum. Nam leo eros,
        euismod ut finibus eget, bibendum sodales ligula. Vestibulum ac velit
        est. Suspendisse interdum justo vel dui euismod pharetra. Quisque
        commodo eget risus sodales iaculis. Phasellus egestas leo et quam
        hendrerit scelerisque.
      </p>
      <p>
        Ut et dui dolor. Donec finibus nunc sed vestibulum viverra. Donec dolor
        lorem, pulvinar vel blandit sit amet, semper a lectus. Sed auctor enim
        et augue aliquet placerat. Aliquam erat volutpat. Nam et dignissim erat.
        Suspendisse ut faucibus purus. Aliquam lacus nisl, pharetra in erat
        eget, facilisis viverra enim. Morbi faucibus massa sit amet nunc
        tristique suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Mauris imperdiet tortor sed dolor hendrerit, ac sollicitudin
        sapien tempor. Etiam condimentum ac odio et tincidunt.
      </p>
      <p>
        Mauris ex ante, varius eu ullamcorper a, venenatis at ante. Duis
        sagittis vehicula ligula ac consequat. Phasellus eget lacus convallis,
        commodo dolor vel, ultrices mauris. Vivamus vitae gravida velit. Sed
        aliquet magna sit amet ipsum pulvinar fermentum. Nulla cursus augue
        quam, at fermentum erat tempus eget. Donec a tortor sit amet velit
        facilisis pharetra a sit amet leo. Mauris maximus vestibulum orci, a
        ultricies metus euismod a. Donec porta quam sed imperdiet euismod. Nunc
        justo augue, eleifend nec vehicula ac, rhoncus ac nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non
        erat in mi sagittis pellentesque non non dui. Ut quis arcu nec elit
        pellentesque lacinia. Aenean suscipit commodo neque faucibus semper.
        Aenean mattis lorem nec sem sodales, eu viverra nisi tincidunt. Morbi
        vitae pretium erat. Sed tincidunt purus sapien, vel commodo quam
        tristique sit amet. Maecenas tincidunt nisi non neque cursus, vitae
        rhoncus lectus pharetra. Nulla pretium pellentesque dignissim.
        Vestibulum erat sapien, tristique sed turpis hendrerit, vestibulum
        dignissim lectus. Donec tincidunt orci vel ex sodales, id aliquam justo
        fermentum. Phasellus gravida tincidunt arcu, nec egestas mi bibendum ac.
        Nam tincidunt nunc ante, at egestas nisi fringilla eu. Curabitur vitae
        egestas nisl. Morbi feugiat ligula id ipsum auctor dictum.
      </p>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sed tincidunt risus. Nullam molestie lacus
        id mi vulputate, vel euismod ipsum maximus. Pellentesque ac purus in
        risus commodo ultrices eget at turpis. In id posuere leo. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Pellentesque feugiat elementum leo eu feugiat. Curabitur
        tristique pretium quam, vel maximus purus placerat aliquet. Donec sapien
        magna, dictum ut sollicitudin in, cursus lacinia lectus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Proin quis rhoncus
        diam. Praesent interdum non tortor at feugiat. Cras volutpat tellus in
        magna condimentum suscipit. Donec non commodo ante. Duis laoreet quam in
        tincidunt blandit. Aliquam condimentum orci ac suscipit sagittis.
      </p>
      <p>
        Phasellus laoreet sem accumsan rhoncus blandit. Sed metus tortor, tempor
        ac lorem ut, faucibus hendrerit felis. Vestibulum pellentesque feugiat
        magna ac hendrerit. Pellentesque eget imperdiet diam. Sed sit amet neque
        a tortor porta blandit. Proin eu mattis sapien. Sed blandit ut nunc eget
        lacinia. Fusce suscipit urna sit amet lacus volutpat, et laoreet mauris
        semper. Nunc vulputate massa quis eleifend egestas. Aenean sit amet
        turpis justo. Fusce in ipsum nec risus aliquet bibendum. Nam leo eros,
        euismod ut finibus eget, bibendum sodales ligula. Vestibulum ac velit
        est. Suspendisse interdum justo vel dui euismod pharetra. Quisque
        commodo eget risus sodales iaculis. Phasellus egestas leo et quam
        hendrerit scelerisque.
      </p>
      <p>
        Ut et dui dolor. Donec finibus nunc sed vestibulum viverra. Donec dolor
        lorem, pulvinar vel blandit sit amet, semper a lectus. Sed auctor enim
        et augue aliquet placerat. Aliquam erat volutpat. Nam et dignissim erat.
        Suspendisse ut faucibus purus. Aliquam lacus nisl, pharetra in erat
        eget, facilisis viverra enim. Morbi faucibus massa sit amet nunc
        tristique suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Mauris imperdiet tortor sed dolor hendrerit, ac sollicitudin
        sapien tempor. Etiam condimentum ac odio et tincidunt.
      </p>
      <p>
        Mauris ex ante, varius eu ullamcorper a, venenatis at ante. Duis
        sagittis vehicula ligula ac consequat. Phasellus eget lacus convallis,
        commodo dolor vel, ultrices mauris. Vivamus vitae gravida velit. Sed
        aliquet magna sit amet ipsum pulvinar fermentum. Nulla cursus augue
        quam, at fermentum erat tempus eget. Donec a tortor sit amet velit
        facilisis pharetra a sit amet leo. Mauris maximus vestibulum orci, a
        ultricies metus euismod a. Donec porta quam sed imperdiet euismod. Nunc
        justo augue, eleifend nec vehicula ac, rhoncus ac nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non
        erat in mi sagittis pellentesque non non dui. Ut quis arcu nec elit
        pellentesque lacinia. Aenean suscipit commodo neque faucibus semper.
        Aenean mattis lorem nec sem sodales, eu viverra nisi tincidunt. Morbi
        vitae pretium erat. Sed tincidunt purus sapien, vel commodo quam
        tristique sit amet. Maecenas tincidunt nisi non neque cursus, vitae
        rhoncus lectus pharetra. Nulla pretium pellentesque dignissim.
        Vestibulum erat sapien, tristique sed turpis hendrerit, vestibulum
        dignissim lectus. Donec tincidunt orci vel ex sodales, id aliquam justo
        fermentum. Phasellus gravida tincidunt arcu, nec egestas mi bibendum ac.
        Nam tincidunt nunc ante, at egestas nisi fringilla eu. Curabitur vitae
        egestas nisl. Morbi feugiat ligula id ipsum auctor dictum.
      </p>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sed tincidunt risus. Nullam molestie lacus
        id mi vulputate, vel euismod ipsum maximus. Pellentesque ac purus in
        risus commodo ultrices eget at turpis. In id posuere leo. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Pellentesque feugiat elementum leo eu feugiat. Curabitur
        tristique pretium quam, vel maximus purus placerat aliquet. Donec sapien
        magna, dictum ut sollicitudin in, cursus lacinia lectus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Proin quis rhoncus
        diam. Praesent interdum non tortor at feugiat. Cras volutpat tellus in
        magna condimentum suscipit. Donec non commodo ante. Duis laoreet quam in
        tincidunt blandit. Aliquam condimentum orci ac suscipit sagittis.
      </p>
      <p>
        Phasellus laoreet sem accumsan rhoncus blandit. Sed metus tortor, tempor
        ac lorem ut, faucibus hendrerit felis. Vestibulum pellentesque feugiat
        magna ac hendrerit. Pellentesque eget imperdiet diam. Sed sit amet neque
        a tortor porta blandit. Proin eu mattis sapien. Sed blandit ut nunc eget
        lacinia. Fusce suscipit urna sit amet lacus volutpat, et laoreet mauris
        semper. Nunc vulputate massa quis eleifend egestas. Aenean sit amet
        turpis justo. Fusce in ipsum nec risus aliquet bibendum. Nam leo eros,
        euismod ut finibus eget, bibendum sodales ligula. Vestibulum ac velit
        est. Suspendisse interdum justo vel dui euismod pharetra. Quisque
        commodo eget risus sodales iaculis. Phasellus egestas leo et quam
        hendrerit scelerisque.
      </p>
      <p>
        Ut et dui dolor. Donec finibus nunc sed vestibulum viverra. Donec dolor
        lorem, pulvinar vel blandit sit amet, semper a lectus. Sed auctor enim
        et augue aliquet placerat. Aliquam erat volutpat. Nam et dignissim erat.
        Suspendisse ut faucibus purus. Aliquam lacus nisl, pharetra in erat
        eget, facilisis viverra enim. Morbi faucibus massa sit amet nunc
        tristique suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Mauris imperdiet tortor sed dolor hendrerit, ac sollicitudin
        sapien tempor. Etiam condimentum ac odio et tincidunt.
      </p>
      <p>
        Mauris ex ante, varius eu ullamcorper a, venenatis at ante. Duis
        sagittis vehicula ligula ac consequat. Phasellus eget lacus convallis,
        commodo dolor vel, ultrices mauris. Vivamus vitae gravida velit. Sed
        aliquet magna sit amet ipsum pulvinar fermentum. Nulla cursus augue
        quam, at fermentum erat tempus eget. Donec a tortor sit amet velit
        facilisis pharetra a sit amet leo. Mauris maximus vestibulum orci, a
        ultricies metus euismod a. Donec porta quam sed imperdiet euismod. Nunc
        justo augue, eleifend nec vehicula ac, rhoncus ac nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non
        erat in mi sagittis pellentesque non non dui. Ut quis arcu nec elit
        pellentesque lacinia. Aenean suscipit commodo neque faucibus semper.
        Aenean mattis lorem nec sem sodales, eu viverra nisi tincidunt. Morbi
        vitae pretium erat. Sed tincidunt purus sapien, vel commodo quam
        tristique sit amet. Maecenas tincidunt nisi non neque cursus, vitae
        rhoncus lectus pharetra. Nulla pretium pellentesque dignissim.
        Vestibulum erat sapien, tristique sed turpis hendrerit, vestibulum
        dignissim lectus. Donec tincidunt orci vel ex sodales, id aliquam justo
        fermentum. Phasellus gravida tincidunt arcu, nec egestas mi bibendum ac.
        Nam tincidunt nunc ante, at egestas nisi fringilla eu. Curabitur vitae
        egestas nisl. Morbi feugiat ligula id ipsum auctor dictum.
      </p>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sed tincidunt risus. Nullam molestie lacus
        id mi vulputate, vel euismod ipsum maximus. Pellentesque ac purus in
        risus commodo ultrices eget at turpis. In id posuere leo. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Pellentesque feugiat elementum leo eu feugiat. Curabitur
        tristique pretium quam, vel maximus purus placerat aliquet. Donec sapien
        magna, dictum ut sollicitudin in, cursus lacinia lectus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Proin quis rhoncus
        diam. Praesent interdum non tortor at feugiat. Cras volutpat tellus in
        magna condimentum suscipit. Donec non commodo ante. Duis laoreet quam in
        tincidunt blandit. Aliquam condimentum orci ac suscipit sagittis.
      </p>
      <p>
        Phasellus laoreet sem accumsan rhoncus blandit. Sed metus tortor, tempor
        ac lorem ut, faucibus hendrerit felis. Vestibulum pellentesque feugiat
        magna ac hendrerit. Pellentesque eget imperdiet diam. Sed sit amet neque
        a tortor porta blandit. Proin eu mattis sapien. Sed blandit ut nunc eget
        lacinia. Fusce suscipit urna sit amet lacus volutpat, et laoreet mauris
        semper. Nunc vulputate massa quis eleifend egestas. Aenean sit amet
        turpis justo. Fusce in ipsum nec risus aliquet bibendum. Nam leo eros,
        euismod ut finibus eget, bibendum sodales ligula. Vestibulum ac velit
        est. Suspendisse interdum justo vel dui euismod pharetra. Quisque
        commodo eget risus sodales iaculis. Phasellus egestas leo et quam
        hendrerit scelerisque.
      </p>
      <p>
        Ut et dui dolor. Donec finibus nunc sed vestibulum viverra. Donec dolor
        lorem, pulvinar vel blandit sit amet, semper a lectus. Sed auctor enim
        et augue aliquet placerat. Aliquam erat volutpat. Nam et dignissim erat.
        Suspendisse ut faucibus purus. Aliquam lacus nisl, pharetra in erat
        eget, facilisis viverra enim. Morbi faucibus massa sit amet nunc
        tristique suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Mauris imperdiet tortor sed dolor hendrerit, ac sollicitudin
        sapien tempor. Etiam condimentum ac odio et tincidunt.
      </p>
      <p>
        Mauris ex ante, varius eu ullamcorper a, venenatis at ante. Duis
        sagittis vehicula ligula ac consequat. Phasellus eget lacus convallis,
        commodo dolor vel, ultrices mauris. Vivamus vitae gravida velit. Sed
        aliquet magna sit amet ipsum pulvinar fermentum. Nulla cursus augue
        quam, at fermentum erat tempus eget. Donec a tortor sit amet velit
        facilisis pharetra a sit amet leo. Mauris maximus vestibulum orci, a
        ultricies metus euismod a. Donec porta quam sed imperdiet euismod. Nunc
        justo augue, eleifend nec vehicula ac, rhoncus ac nisl.
      </p>
    </>
    // <main
    //   className={cn(
    //     "col-span-10 -mx-4",
    //     "lg:col-start-3 lg:col-span-8 lg:-mx-4",
    //     "xl:col-start-5 xl:col-span-8",
    //   )}
    // >
    //   <div className={cn("flex flex-row gap-4 callout p-2", "lg:p-2")}>
    //     {Object.entries(data).map(([key, { label }]) => (
    //       <Button
    //         key={key}
    //         value={key}
    //         variant="ghost"
    //         className={cn("text-base justify-start font-black px-2 group")}
    //         onClick={(event, ...args) => {
    //           setRole(event.currentTarget.value);
    //         }}
    //       >
    //         <span
    //           className={cn(
    //             "group-hover:opacity-100",
    //             key === role ? "opacity-100" : "opacity-30",
    //           )}
    //         >
    //           {label}
    //         </span>
    //       </Button>
    //     ))}
    //   </div>
    //   <div className="display-1 px-4">{description}</div>
    // </main>
  );
}
