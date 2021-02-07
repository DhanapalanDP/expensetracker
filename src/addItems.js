import React from 'react'
import Items from './components/items'


export default function AddItems({formItems,setFormItems}) {
   
    
    return (
        <div className="tablediv">
        <table className="list">
            <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Remove Item</th>
            </tr>
            </thead>
            <tbody>
            <tr style={{textAlign: "left"}} className="noitem">
                <td colSpan="4">No item added yet....</td>
            </tr>
            </tbody>
            {
                formItems.map((value,index)=>(
                    <Items key={index} income={value} formItems={formItems} setFormItems={setFormItems} index={index}/>
                ))
            }
        </table>
    </div>
    )
}
