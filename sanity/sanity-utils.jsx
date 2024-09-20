import { createClient, groq } from "next-sanity";

export async function getGlobalData() {
  const query = createClient({
    projectId: "8g9nl6xc",
    dataset: "production",
    apiVersion: "2024-08-20",
  });

  return query.fetch(
    groq`*[_type == "global"]{
      _id,
      _createdAt,
      address,
      contactEmail,
      housePhone,
      officePhone,
    }`
  )
}
