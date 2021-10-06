const Post = require('./models/Post')

// Resolvers
const resolvers = {
    Query: {
        hello: () => {
            return "Hello world"
        },
        getAll: async () => {
            return await Post.find();
        },
    },
    Mutation: {
        createPost: async (parents, args, context, info) => {
            const {title, description} = args.post
            const post = await new Post({title, description}).save();
            return post;
        },
        updatePost: async (parents, args, context, info) => {
            const {id} = args
            const {title, description} = args.post
            const post = await Post.findByIdAndUpdate(id,{title, description}, {new: true});
            return post;
        },
    },
}

module.exports = resolvers;