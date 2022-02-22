const _ = require('lodash');


export const SortDate = (emailList) =>{
   return _.sortBy(emailList, 'date');
}