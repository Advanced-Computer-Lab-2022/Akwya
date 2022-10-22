export default (posts=[],action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload ;
        case 'CRREATE':
            return posts;
        default:
            return posts;


    }
}