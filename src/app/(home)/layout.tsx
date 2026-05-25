import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions, linkItems } from "@/lib/layout.shared";
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";
import Link from "fumadocs-core/link";
import Image from "next/image";
import Preview from "@/public/banner.png";
import {
  Book,
  ComponentIcon,
  IndianRupee,
  Pencil,
  PlusIcon,
  Server,
} from "lucide-react";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          type: "menu",
          on: "menu",
          text: "Documentation",
          items: [
            {
              text: "Getting Started",
              url: "/docs",
              icon: <Book />,
            },
            {
              text: "Admission",
              url: "/docs/admission",
              icon: <ComponentIcon />,
            },
          ],
        },
        {
          type: "custom",
          on: "nav",
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href="/docs">Documentation</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink href="/docs" className="md:row-span-2">
                  <div className="-mx-3 -mt-3">
                    <Image
                      src={Preview}
                      alt="Preview"
                      className="rounded-t-lg object-cover"
                      style={{
                        maskImage:
                          "linear-gradient(to bottom,white 60%,transparent)",
                      }}
                    />
                  </div>
                  <p className="font-medium">Getting Started</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Start here to understand NIOS, eligibility, subjects, and
                    how everything works.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/admission"
                  className="lg:col-start-2"
                >
                  <ComponentIcon className="bg-white text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Admission</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Learn about the admission process, eligibility criteria, and
                    required documents.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/academics"
                  className="lg:col-start-2"
                >
                  <Server className="bg-white text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Study Material</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Access study materials, notes, and resources for your
                    courses.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/fees"
                  className="lg:col-start-3 lg:row-start-1"
                >
                  <IndianRupee className="bg-white text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Fees</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Learn about the fee structure, payment methods, and
                    deadlines.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/help"
                  className="lg:col-start-3 lg:row-start-2"
                >
                  <PlusIcon className="bg-white text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">e-Services</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Explore various e-Services available for students.
                  </p>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        ...linkItems,
      ]}
      className="dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)] [--color-fd-primary:var(--color-brand)]"
    >
      {children}
    </HomeLayout>
  );
}
