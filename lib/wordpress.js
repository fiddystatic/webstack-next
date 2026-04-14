const WORDPRESS_API_URL = "http://localhost:8080/webstack-assessment/graphql";

export async function fetchGraphQL(query, variables = {}) {
  const response = await fetch(WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: "no-store",
  });

  const json = await response.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch GraphQL data");
  }

  return json.data;
}

export async function getPosts() {
  const query = `
    query GetPosts {
      posts(first: 10) {
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
              avatar {
                 url
              }
            }
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  return data.posts.nodes;
}

export async function getPostBySlug(slug) {
  if (!slug) {
    throw new Error("Slug is required");
  }

  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        slug
        content
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query, { slug });
  return data.post;
}