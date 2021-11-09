export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618a9d8dc37f4c09bb96bc98',
                  title: 'Sanity Studio',
                  name: 'gommit-blog-studio',
                  apiId: '1db1d7b3-a112-4ab7-a33e-a3499989fa2e'
                },
                {
                  buildHookId: '618a9d8c1cfd400bb98e25c5',
                  title: 'Blog Website',
                  name: 'gommit-blog',
                  apiId: 'e9200e84-7ddf-444a-9b78-38616656303e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gommit/gommit-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://gommit-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
