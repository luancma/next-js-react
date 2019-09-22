const routes = require('next-routes');

module.exports = routes()
.add('/', 'home')
.add('/posts', 'posts')
.add('/posts/detail/:postId', 'detail')
.add('/product', 'product')

