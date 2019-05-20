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
  withCredentials: true,
  token:
    "skNV0cONof4MmAMx4QEXRbyXbRoMKSSIw4SLXmsBHGaaqs73vihoztx6YvARiNfeAHYowtjdwl3hsdlXzGhhPXezt40gHntWwDiSRr5oI3LYn8Hj0lcVKxwXHoKrvoM4xmMNjXQEwNtqMjgFG9IylX6kao4zPB2WphlWVvaYCaayvg6zPElT"
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
    image,
    email,
    name,
    phone,
    title,
    }[0]`
};
