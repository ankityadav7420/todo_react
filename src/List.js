import "./List.css";

export default function List({itemList , updateItemList}){

    const deleteItemFromList = key =>{
        const newList = itemList.filter( itemObj=>{
          return  itemObj.key !==key;
        });
        updateItemList(newList);
    };




   return(
       <div>
       {itemList.map(itemObj =>{
           return( 
               <div key={itemObj.key} className="item">
               <p>{itemObj.item}</p>
               <button onClick={() => deleteItemFromList(itemObj.key)}>x</button>
               </div>
            );
       })}
       </div>

   );
}