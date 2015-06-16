var postsData = [
    {
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    },
    {
        title: 'dota2shop',
        url: 'http://www.dota2shop.cn'
    }
];
Template.postsList.helpers({
    posts: postsData
});