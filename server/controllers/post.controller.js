const Post = require('../models/post.model');
const uuid = require('uuid');

// get all posts

exports.getPosts = async (req, res) => {
	try {
		res.status(200).json(await Post.find());
	} catch(err) {
		res.status(500).json(err);
	}
};

exports.getSinglePost = async (req, res) => {
	try {
		res.status(200).json(await Post.findOne({id: req.params.id}));
	} catch(err) {
		res.status(500).json(err);
	}
};

exports.addPost = async function (req, res) {

  try {
    const { title, author, content } = req.body;

    let newPost = new Post();
    newPost.title = title;
    newPost.author = author;
    newPost.content = content;//shorter version: let newPost = new Post(req.body);
    newPost.id = uuid();

    postSaved = await newPost.save();
    res.status(200).json(postSaved);

  } catch(err) {
    res.status(500).json(err);
  }

}