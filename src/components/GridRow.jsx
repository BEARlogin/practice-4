export function GridRow({record}) {
    return (
        <tr key={record.id}>
        <td>{record.firstName}</td> 
        <td>{record.lastName}</td>
        <td><input type="checkbox" checked={record.active} /></td>
    </tr>  
    ) 
} 