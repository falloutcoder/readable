import * as ReadableAPI from './ReadableAPI';

ReadableAPI.getAllCategories().then(val => console.log(val))
ReadableAPI.getAllPostsForCategory('react').then(val => console.log(val))
ReadableAPI.getAllPosts().then(val => console.log(val))
ReadableAPI.getPost("8xf0y6ziyjabvozdd253nd").then(val => console.log(val))
ReadableAPI.addPost({title: 'My World 2.0', body: 'I have no words', category: 'react', owner: 'mike'}
  ).then(val => console.log(val))
ReadableAPI.castVoteToPost("bbcaa031-093a-43fb-97a2-67da0511884c", 'upVote').then(val => console.log(val))
ReadableAPI.updatePost("bbcaa031-093a-43fb-97a2-67da0511884c", 'Ninja', 'turtule').then(val => console.log(val))
ReadableAPI.deletePost("96539282-6f5c-4cc3-a552-02c1555eeb82").then(val => console.log(val))
ReadableAPI.addCommentToPost("8xf0y6ziyjabvozdd253nd", {body:'Ninja Patinja'}).then(val => console.log(val))
ReadableAPI.getAllCommentsForPost("8xf0y6ziyjabvozdd253nd").then(val => console.log(val))
ReadableAPI.getComment("8tu4bsun805n8un48ve89").then(val => console.log(val))
ReadableAPI.castVoteToComment("8tu4bsun805n8un48ve89", 'downVote').then(val => console.log(val))
ReadableAPI.updateComment("8tu4bsun805n8un48ve89", {body: 'Comments are not cool'}).then(val => console.log(val))
ReadableAPI.deleteComment("10f9c715-c981-4582-92e7-5981e5f9af69").then(val => console.log(val))