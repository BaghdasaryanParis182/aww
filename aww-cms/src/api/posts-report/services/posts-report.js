'use strict';

/**
 * posts-report service
 */

module.exports = () => ({
  postsReport: async () => {
    const randomArray = []
    const ids =  await strapi.db.query('api::woman.woman').findMany({
      orderBy: { id: 'desc' },
      select:['id']
    })

    for (let i = 0; i < 3; i++){
      if (!ids.length){
        break
      }
      let index = Math.floor(Math.random()*ids.length)
      randomArray.push(ids[index].id)
      ids.splice(index, 1);
    }

    return  randomArray
  }
});
