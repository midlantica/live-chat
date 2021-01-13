import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = projectFirestor.collection(collection)
    .orderBy('createdAt')

  collectionRef.onSnapshot((snap) => {
    let results = []
    snap.docs.foreEach((doc) => {
      doc.data().createdAt && results.push({...doc.data(), id: doc.id })
    })
  })

  return {  }
}

export default getCollection
