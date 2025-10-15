let posts = [];
let idCounter = 1;

// Liste tous les posts
exports.getAllPosts = (req, res) => {
  res.render("index", { posts });
};

// Affiche un seul post
exports.getPostById = (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  res.render("post", { post });
};

// Formulaire de création
exports.getNewPostForm = (req, res) => {
  res.render("new-post");
};

// Crée un post
exports.createPost = (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: idCounter++,
    title,
    content,
    date: new Date().toLocaleString(),
  };
  posts.push(newPost);
  res.redirect("/");
};

// ➕ Formulaire d’édition
exports.getEditPostForm = (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  res.render("edit-post", { post });
};

// ➕ Mettre à jour un post
exports.updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const postIndex = posts.findIndex(p => p.id === parseInt(id));
  if (postIndex === -1) return res.status(404).send("Post not found");

  posts[postIndex].title = title;
  posts[postIndex].content = content;
  posts[postIndex].date = new Date().toLocaleString();
  res.redirect(`/post/${id}`);
};

// ➕ Supprimer un post
exports.deletePost = (req, res) => {
  const { id } = req.params;
  posts = posts.filter(p => p.id !== parseInt(id));
  res.redirect("/");
};
