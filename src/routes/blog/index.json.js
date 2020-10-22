import { posts } from './_posts.js';

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      title: post.title,
      slug: post.slug,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(posts));
}

export function post(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  console.log('Got new blog post', req.body);
  posts.push(req.body);
  res.end(JSON.stringify(posts));
}
