export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f3bcb719f8cc7e91657681d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-64wfvjo6',
                  apiId: '7b6e2b0b-9c4c-4b2a-b9a7-cd9d605ed938'
                },
                {
                  buildHookId: '5f3bcb718036aec3633c39fd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wonwb9wi',
                  apiId: '9e0a8630-4d93-4fdf-92a3-34d69d837a2b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/URPRaymond/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-wonwb9wi.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
