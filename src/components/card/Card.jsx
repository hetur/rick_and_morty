import styles from "./Car.module.css"

export default function Card(name, species, image, gender, onClose) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
         <button onClick={onClose}>
         X
         </button>
         </div>
         <div className={styles.imageContainer}>
         <img src={image} alt="not found" />
         <h2 className={styles.name}>{name}</h2>
         </div>

         <h2>{species}</h2>
         <h2>{gender}</h2>

         </div>
   );
}
