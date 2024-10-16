import {Order} from "@/tools/orders.model";



export default function OrderCom({id, name,address,city,size,delivered,toppings,notes}:Order) {
    return (
        <div className="pt-5">
            <div className="text-accent text-ordrFontSize font-bold pb-2">Order #{id}: </div>
            <div className="pb-4">
                <div className="font-bold"><i className="fas fa-info-circle"></i> Customer information</div>
                <p className="text-sm">
                    {name} <br/>
                    {address} <br/>
                    {city}
                </p>
            </div>
            <div className="pb-4">
                <div className="font-bold"><i className="fas fa-pizza-slice"></i> Pizza Size</div>
                <p className="text-sm">
                {size}
                </p>
            </div>
            <div className="pb-4">
                <div className="font-bold"><i className="fas fa-list-ul"></i> Order Details</div>
                <ul className="text-sm">
                    {toppings.map((topping, index) => (
                        <li key={index}>{topping.topping}</li>
                    ))}
                </ul>
                
            </div>
            <div className="pb-4">
                <div className="font-bold"><i className="fas fa-sticky-note"></i> Order Notes</div>
                
                <ul className="text-sm">
                    {notes.map((note, index) => (
                        <li key={index}>{note.note}</li>
                    ))}
                </ul>
                
            </div>
        </div>
    );
}