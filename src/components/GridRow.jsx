import PropTypes from "prop-types";
function GridRow({record, toggleActive}) {
    return (
        <tr key={record.id}>
        <td>{record.firstName}</td> 
        <td>{record.lastName}</td>
        <td><input type="checkbox" checked={record.active} onChange={(e) => toggleActive(e.target.checked)} /></td>
    </tr>  
    ) 
} 

GridRow.propTypes = {
    record: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }), 
}

export { GridRow }