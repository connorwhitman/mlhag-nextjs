import { createClient, groq } from "next-sanity";

export async function getGlobalData() {
  const client = createClient({
    projectId: "8g9nl6xc",
    dataset: "production",
    apiVersion: "2024-08-20",
  });

  const query = groq`*[_type == "global"]{
    _id,
    _createdAt,
    address,
    contactEmail,
    housePhone,
    officePhone,
  }`;

  const globalData = await client.fetch(query);

  return globalData;
}
