import { notFound } from "next/navigation";
import { getLandingPageEntry } from "@/lib/methods";
import LandingPageComponentLoop from "@/components/Layouts/LandingPageComponentLoop";

async function LandingPage({ searchParams, params, pathname = "/" }) {
  const isPreviewMode = searchParams?.live_preview;
  try {
    const result = await getLandingPageEntry({
      isPreviewMode,
      pathname,
      searchParams,
    });
    if (result.response && result.status === 200) {
      return (
        <>
          <LandingPageComponentLoop pageEntry={result.response} />
        </>
      );
    }
    return null;
  } catch (ex) {
    return notFound(404);
  }
}

export default LandingPage;
