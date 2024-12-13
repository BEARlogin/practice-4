function GridComponent({records}) {
    return (
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            {records.map((record) => <tr key={record.id}>
                <td>{record.firstName}</td> 
                <td>{record.lastName}</td>
                <td><input type="checkbox" checked={record.active} /></td>
            </tr>)}  
        </tbody>
      </table>
    );
}
 
export { GridComponent } 

