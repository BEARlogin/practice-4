export function GridRow({record, toggleActive}) {
    return (
        <tr key={record.id}>
        <td>{record.firstName}</td> 
        <td>{record.lastName}</td>
        <td><input type="checkbox" checked={record.active} onChange={(e) => toggleActive(e.target.checked)} /></td>
    </tr>  
    ) 
} 