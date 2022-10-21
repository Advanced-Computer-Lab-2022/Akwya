import axios from 'axios'

const url= 'http://localhost:5000/posts';  //url pointing to our backend route, returns all the posts we have in our DB

export const fetchPost=()=> axios.get(url);
