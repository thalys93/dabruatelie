// import {React, useState} from 'react'
// import { ref , uploudBytesResumable, getDownloadURL} from 'firebase/storage'

// function ProdEdit() {
//     const [imgURL, setImgURL] = useState("")
//     const [progress, setProgress] = useState(0)

//     const handleUploud = (event) => {
//         event.preventDefault();
//         const file = event.target[0]?.files[0]
//         if(!file) return;

//         const storageRef = ref(storage, `produtos/${file.name}`)        
//         const uploudTask = uploudBytesResumable(storageRef, file)

//         uploudTask.on(
//             "state_changed",
//         snapshot =>{
//                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//                 setProgress(progress)
//         },
//         error => {
//             alert(error)
//         },
//         () => {
//             getDownloadURL(uploudTask.snapshot.ref).then(url => {
//                 setImgURL(url)
//             })
//         }
//         )
//     }


//   return (
//     <div >                
//             <form className='prodCard' onSubmit={handleUploud}>
//                 <h1> Cadastrar produto </h1>
//                     <input type='text' placeholder='Nome do Produto'/>                        
//                     <input type='text' placeholder='Descrição do Produto'/>                        
//                     <input type='number' placeholder='Valor em R$'/>                        
//                     <input type='file'/>

//                     <div>
//                         <button type="submit">Cadastrar Item</button>                        
//                     </div>
//             </form>        

//             {!imgURL && <progress value={progress} max="100" />}

//             {imgURL && <img src={imgURL} alt="imagem"/>}

//     </div>
//   )
// }

// export default ProdEdit

