import { GridRow } from "./GridRow";

function GridComponent({records}) {
    return (
        <>
            <input type="text" placeholder="Search" /> 
            <table className="table table-condensed">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    {records.map((record) => <GridRow record={record} key={record.id} />)}  
                </tbody>
            </table> 
        </> 
    );
}
 
export { GridComponent } 

