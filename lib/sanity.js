import sanityClient from "@sanity/client";

export default sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: "2nbiz509",
  dataset: "production",
  useCdn: true
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
});

export let sanityPreviewClient = sanityClient({
  projectId: "2nbiz509",
  dataset: "production",
  useCdn: false,
  withCredentials: true
});

export let queries = {
  jobAd: `*[_type == "jobAd" && _id==$id]{
    _id,
    title,
    subtitle,
    body,
    "imageUrl": mainImage.asset->url,
    "contact":author -> {name},
    externalLink
    }[0]`,
  person: `*[_type == "person" && _id==$id]{
    _id,
    bio,
    "image": image.asset->url,
    email,
    name,
    phone,
    title,
    }[0]`
};
