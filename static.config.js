import glob from 'glob';
import _map from 'lodash/map';
import matter from 'gray-matter';

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const posts = _map(glob.sync('src/posts/**/*.md'), md => matter.read(md));

    return [
      {
        path: '/',
        component: 'src/containers/Home'
      },
      {
        path: '/about',
        component: 'src/containers/About'
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.data.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
