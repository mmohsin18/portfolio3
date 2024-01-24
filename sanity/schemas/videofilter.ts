import { Pages } from '@/types/Page';
import client from '@sanity/client';
import { createClient, groq } from 'next-sanity';
import clientConfig from '../config/client-config';

// // const sanityClient = client({
// //   projectId: 'your-project-id',
// //   dataset: 'your-dataset',
// //   apiVersion: '2022-01-29', // Use the latest API version
// //   useCdn: false, // Set to true for production to use the Content Delivery Network
// // });

// const searchTerm = 'client';

// // sanityClient.fetch(`*[_type == 'videos' && category match $searchTerm]`, { searchTerm })
// //   .then(posts => {
// //     console.log(posts);
// //   })
// //   .catch(error => {
// //     console.error('Error fetching posts:', error);
// //   });


//   export async function getVids(): Promise<Pages> {
//     return createClient(clientConfig).fetch(
//       groq`*[_type == "videos" && category match $searchTerm]`, { searchTerm }

//     )
//   }


// 

const searchTerm = 'category'

export default videos(){
    createClient(clientConfig).fetch(`*[_type == 'post' && title match $searchTerm] { _id, title }`, { searchTerm })
  .then(posts => {
    console.log(posts);
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
  });

}

function videos() {
    throw new Error('Function not implemented.');
}

