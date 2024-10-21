import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { CopyToClipboardButton } from "@/components/copy-to-clipboard-button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export default async function BrandBook() {
  return (
    <main
      className={cn(
        "col-span-1",
        "xs:col-span-2",
        "sm:col-span-3",
        "md:col-span-6",
        "lg:col-start-3 lg:col-span-8",
        "xl:col-start-3 xl:col-span-10",
      )}
    >
      <h1 className="headline-1">[page title]</h1>
      <ScrollArea>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec ipsum
          fringilla velit posuere accumsan. Pellentesque vestibulum elit sit
          amet purus ultricies tempor. Aliquam tincidunt, turpis sed sagittis
          dignissim, lectus tortor convallis tortor, ac elementum est ante at
          lacus. Phasellus sit amet magna hendrerit, dapibus velit vel,
          consectetur tellus. Nulla in vestibulum enim. Donec fringilla
          venenatis orci, id ullamcorper purus imperdiet ut. Mauris ipsum urna,
          euismod feugiat lectus sed, molestie cursus ipsum. Donec tellus
          tortor, condimentum non tempus in, aliquam nec sem. Integer id quam
          consequat, vestibulum diam non, suscipit arcu. Proin non tincidunt
          felis. Integer lorem diam, blandit ac ex eget, ultrices ultricies sem.
          Aenean commodo urna et ex auctor, quis eleifend metus facilisis. Etiam
          sed scelerisque quam, in cursus nulla.
        </p>

        <br />
        <p>
          Curabitur pharetra nulla ut ipsum venenatis tincidunt vitae a erat.
          Pellentesque imperdiet pretium fermentum. Duis ut feugiat eros, ut
          dapibus nulla. Aenean eu egestas tellus, quis dictum leo. Sed suscipit
          nunc sed faucibus pretium. Donec condimentum turpis id rhoncus tempor.
          Quisque laoreet, leo in lobortis finibus, leo nibh sagittis metus, in
          maximus ipsum ante in sapien. In sollicitudin fringilla lacus eget
          hendrerit. Cras ornare quam ac purus dignissim tincidunt. Nam sit amet
          purus eget nulla fermentum mattis ut sit amet velit. Pellentesque vel
          lorem a arcu eleifend semper. Duis vel eros eu ante porta viverra id
          quis metus. Vivamus volutpat, nibh eget vestibulum suscipit, nisl
          lorem ultrices eros, bibendum vehicula nulla lectus mattis eros.
          Praesent ut justo ut leo viverra placerat. Nulla accumsan leo vitae
          erat suscipit, non cursus mi sodales. Maecenas a nibh eros.
        </p>
        <br />
        <p>
          Phasellus efficitur urna faucibus aliquam accumsan. Sed sagittis sed
          nisi eu efficitur. Fusce placerat a nisl vehicula euismod. Cras
          aliquam congue felis, id semper augue pretium sit amet. Mauris congue
          id dui at rhoncus. Aenean sodales eros at lacus volutpat molestie eu
          nec nisl. Nullam laoreet a nibh at maximus. Proin vitae nibh
          fermentum, pulvinar ex quis, pretium felis. Nam magna sem, volutpat id
          finibus eu, eleifend a dolor. Vestibulum volutpat semper erat, id
          interdum justo suscipit vehicula. Curabitur vitae enim vitae nulla
          suscipit rutrum.
        </p>
        <br />
        <p>
          Donec tempus, velit venenatis vulputate commodo, sem mi posuere ante,
          semper euismod magna nunc nec quam. Praesent ac lobortis mi, eget
          fermentum turpis. Integer sit amet neque risus. Curabitur eleifend
          risus vitae mi laoreet, a tincidunt ligula ornare. Sed ac turpis
          molestie, molestie nunc non, maximus massa. Aenean faucibus ligula
          elit, elementum sollicitudin mauris ultricies vitae. Praesent aliquet
          porttitor mauris. Praesent dictum dolor orci, vitae elementum lectus
          suscipit ut. Vestibulum scelerisque nisl nulla, pretium mattis tortor
          tristique sed. Suspendisse potenti. Quisque rutrum nulla vel tempus
          tristique. In consequat ut libero non laoreet. Curabitur malesuada
          porttitor tincidunt. Morbi felis metus, hendrerit posuere eros ut,
          sagittis scelerisque augue. Pellentesque pulvinar mi non dui iaculis,
          eget pulvinar nisl tempor. Mauris id condimentum lectus.
        </p>
        <br />
        <p>
          Maecenas venenatis libero id mauris ultrices, vel luctus sem pretium.
          Nunc vitae gravida quam. Vestibulum non porta lorem, viverra dapibus
          massa. Etiam dignissim eleifend magna sed varius. Donec vel mollis ex.
          Curabitur euismod risus vitae sapien ornare, non elementum turpis
          rhoncus. Etiam lacinia eget mauris a maximus. Vivamus in leo quam.
          Quisque ultrices augue ac quam convallis vestibulum. Aenean bibendum
          egestas sem, id auctor urna laoreet nec. Vestibulum rhoncus cursus
          quam, a tincidunt urna gravida ut.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec ipsum
          fringilla velit posuere accumsan. Pellentesque vestibulum elit sit
          amet purus ultricies tempor. Aliquam tincidunt, turpis sed sagittis
          dignissim, lectus tortor convallis tortor, ac elementum est ante at
          lacus. Phasellus sit amet magna hendrerit, dapibus velit vel,
          consectetur tellus. Nulla in vestibulum enim. Donec fringilla
          venenatis orci, id ullamcorper purus imperdiet ut. Mauris ipsum urna,
          euismod feugiat lectus sed, molestie cursus ipsum. Donec tellus
          tortor, condimentum non tempus in, aliquam nec sem. Integer id quam
          consequat, vestibulum diam non, suscipit arcu. Proin non tincidunt
          felis. Integer lorem diam, blandit ac ex eget, ultrices ultricies sem.
          Aenean commodo urna et ex auctor, quis eleifend metus facilisis. Etiam
          sed scelerisque quam, in cursus nulla.
        </p>

        <br />
        <p>
          Curabitur pharetra nulla ut ipsum venenatis tincidunt vitae a erat.
          Pellentesque imperdiet pretium fermentum. Duis ut feugiat eros, ut
          dapibus nulla. Aenean eu egestas tellus, quis dictum leo. Sed suscipit
          nunc sed faucibus pretium. Donec condimentum turpis id rhoncus tempor.
          Quisque laoreet, leo in lobortis finibus, leo nibh sagittis metus, in
          maximus ipsum ante in sapien. In sollicitudin fringilla lacus eget
          hendrerit. Cras ornare quam ac purus dignissim tincidunt. Nam sit amet
          purus eget nulla fermentum mattis ut sit amet velit. Pellentesque vel
          lorem a arcu eleifend semper. Duis vel eros eu ante porta viverra id
          quis metus. Vivamus volutpat, nibh eget vestibulum suscipit, nisl
          lorem ultrices eros, bibendum vehicula nulla lectus mattis eros.
          Praesent ut justo ut leo viverra placerat. Nulla accumsan leo vitae
          erat suscipit, non cursus mi sodales. Maecenas a nibh eros.
        </p>
        <br />
        <p>
          Phasellus efficitur urna faucibus aliquam accumsan. Sed sagittis sed
          nisi eu efficitur. Fusce placerat a nisl vehicula euismod. Cras
          aliquam congue felis, id semper augue pretium sit amet. Mauris congue
          id dui at rhoncus. Aenean sodales eros at lacus volutpat molestie eu
          nec nisl. Nullam laoreet a nibh at maximus. Proin vitae nibh
          fermentum, pulvinar ex quis, pretium felis. Nam magna sem, volutpat id
          finibus eu, eleifend a dolor. Vestibulum volutpat semper erat, id
          interdum justo suscipit vehicula. Curabitur vitae enim vitae nulla
          suscipit rutrum.
        </p>
        <br />
        <p>
          Donec tempus, velit venenatis vulputate commodo, sem mi posuere ante,
          semper euismod magna nunc nec quam. Praesent ac lobortis mi, eget
          fermentum turpis. Integer sit amet neque risus. Curabitur eleifend
          risus vitae mi laoreet, a tincidunt ligula ornare. Sed ac turpis
          molestie, molestie nunc non, maximus massa. Aenean faucibus ligula
          elit, elementum sollicitudin mauris ultricies vitae. Praesent aliquet
          porttitor mauris. Praesent dictum dolor orci, vitae elementum lectus
          suscipit ut. Vestibulum scelerisque nisl nulla, pretium mattis tortor
          tristique sed. Suspendisse potenti. Quisque rutrum nulla vel tempus
          tristique. In consequat ut libero non laoreet. Curabitur malesuada
          porttitor tincidunt. Morbi felis metus, hendrerit posuere eros ut,
          sagittis scelerisque augue. Pellentesque pulvinar mi non dui iaculis,
          eget pulvinar nisl tempor. Mauris id condimentum lectus.
        </p>
        <br />
        <p>
          Maecenas venenatis libero id mauris ultrices, vel luctus sem pretium.
          Nunc vitae gravida quam. Vestibulum non porta lorem, viverra dapibus
          massa. Etiam dignissim eleifend magna sed varius. Donec vel mollis ex.
          Curabitur euismod risus vitae sapien ornare, non elementum turpis
          rhoncus. Etiam lacinia eget mauris a maximus. Vivamus in leo quam.
          Quisque ultrices augue ac quam convallis vestibulum. Aenean bibendum
          egestas sem, id auctor urna laoreet nec. Vestibulum rhoncus cursus
          quam, a tincidunt urna gravida ut.
        </p>
        <ScrollBar orientation={"vertical"} />
      </ScrollArea>
    </main>
  );
}
