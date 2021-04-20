import _get from 'lodash/get';

const map = {
  mapPosts: (posts) => {
    return posts.map(post => {
      console.log(post);
      return {
        id: _get(post, 'id'),
        title: _get(post, 'title.rendered'),
        content: _get(post, 'content.rendered'),
        image: _get(post, 'acf.project_title_image')
      }
    });
  },
  mapPage: (pages) => {
    return pages.map(page => {
      return {
        id: _get(page, 'id'),
        slug: _get(page, 'slug'),
        title: _get(page, 'title.rendered'),
        content: _get(page, 'content.rendered')
      }
    })
  },
  mapMenu: (payload) => {
    return payload.map(menuItem => {
      return {
        id: _get(menuItem, 'ID'),
        title: _get(menuItem, 'title'),
        url: _get(menuItem, 'url'),
        path: getUrlPath(_get(menuItem, 'url')),
      }
    });
  }
}

const getUrlPath = (absoluteLink) => {
  const url = new URL(absoluteLink);
  return url.pathname;
}

export default {
  posts: map.mapPosts,
  page: map.mapPage,
  menu: map.mapMenu
}