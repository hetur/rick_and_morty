export default function Card(name, species, image, gender, onClose) {
   
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt="not found" />

         </div>
   );
}
