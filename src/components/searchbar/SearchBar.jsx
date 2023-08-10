export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={()=>props.onSearch("recibi un id")} >Agregar</button>
      </div>
   );
}
