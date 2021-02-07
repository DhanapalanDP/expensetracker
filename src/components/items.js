import React from 'react'

export default function Items({income, index,formItems, setFormItems}) {
    const removeHandle = (i) => {
        setFormItems(formItems.filter((val,index)=> (formItems[index].key!==income.key)));
       console.log(income.key);
       console.log(formItems[index].key);
    }
    
    return (
        <tbody>
            <tr className="columnadd">
                <td className="nameadd">{income.name1}</td>
                <td className="dateadd">{income.date1}</td>
                <td className="amountadd">{income.price}</td>
                <td className="remover">
                    <button onClick={removeHandle} className="delete">
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </td>
            </tr>
            </tbody>
    )
}
