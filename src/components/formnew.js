import React, { useRef, useState } from 'react' 

export default function Form({name,setName,date,setDate,amount,setEmpty,setAmount,addName,setAddName,addDate,setAddDate,addAmount,setAddAmount,formItems,setFormItems}) {
    const name1 = useRef(null)
    const date1 = useRef(null)
    const price = useRef(null)
    const [nameip, setnameip] = useState('')
    const [dateip, setdateip] = useState('')
    const [priceip, setpriceip] = useState('')

    const buttonHandle = (e)=>{
        e.preventDefault();
        
        if(nameip!==""&&dateip!==""&&priceip!==""){
                setFormItems([...formItems,{
                    "name1": name1.current.value,
                    "date1": date1.current.value,
                    "price": price.current.value,
                    "key": Math.random()*1000
        }])}
        else{
            alert("please fill all the fields")
        }
        
        name1.current.value = null
        date1.current.value = null
        price.current.value = null
        setnameip("")
        setdateip("")
        setpriceip("")
        

    }


    return (
        <form>
    <div className="form">
        Name: <input value={name} onChange={(e)=>setnameip(e.target.value)} ref={name1} type="text" name="" placeholder="Where was the expense made?" size="150" id="name" /><br></br>
        Date: <input value={date} onChange={(e)=>setdateip(e.target.value)} ref={date1} style={{width: "350px"}}  type="Date" name="" id="date" />
        Amount: <input value={amount} onChange={(e)=>setpriceip(e.target.value)} ref={price} type="text" size="73"placeholder="Rs." pattern="([0-9]*|[0-9]*.[0-9]*)" name="" id="amount" /><br></br>
        <button onClick={buttonHandle} className="add" type="submit">Add Expense</button>
     </div>
     </form>
    
    )
}
