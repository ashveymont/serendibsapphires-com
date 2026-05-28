import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "your-project-id",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});
