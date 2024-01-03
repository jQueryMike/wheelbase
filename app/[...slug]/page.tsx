import { PageProps } from ".next/types/app/[...slug]/page";
import { Button, ButtonGroup, GlobalStyles, Heading } from "@components";
import { buildConfig } from "@utils";
import { getPage } from "@utils/getPage";
import { Suspense } from "react";

export default async function Page({ params }: PageProps) {
  const pageData = await getPage(params.slug);
  // buildConfig(pageData);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalStyles />
      </Suspense>
      <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <Heading text={params.slug} />
        <div style={{ display: "flex", flexDirection: "row", gap: "4px" }}>
          <Button size="sm">Click Me</Button>
          <Button variant="secondary" size="sm">
            Click Me
          </Button>
          <Button variant="tertiary" size="sm">
            Click Me
          </Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <div>
            <ButtonGroup
              orientation="vertical"
              size="md"
              items={[
                { id: "1", variant: "primary", children: <>Button 1</> },
                { id: "2", variant: "primary", children: <>Button 2</> },
                { id: "3", variant: "primary", children: <>Button 3</> },
              ]}
            />
          </div>
          <div></div>
          <div></div>
        </div>
        <pre>{JSON.stringify({ pageData }, null, 2)}</pre>
      </span>
    </>
  );
}
