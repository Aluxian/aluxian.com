const MEDIUM_POSTS = [
  // todo: more
  "/slides-from-droidcon-london-2019-78c7b746170b",
];

/** @type {(url: URL) => boolean} */
export const match = (url) => MEDIUM_POSTS.includes(url.pathname);

/** @type {ExportedHandlerFetchHandler<{DB: KVNamespace}>} */
export async function fetch(request) {
  const url = new URL(request.url);
  return new Response(null, {
    headers: {
      Location: `https://medium.com/ar-blog${url.pathname}`,
    },
  });
}
