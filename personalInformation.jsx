


function juan({
   firstName,
   MiddleName,
   LastName,
   Address,
   Birthday,
}){
   return(
      <div>
         <h2>Personal Information</h2>
        <p><strong>firstName</strong> {firstName}</p>
        <p><strong>MiddleName</strong> {MiddleName}</p>
        <p><strong>LastName</strong> {LastName}</p>
        <p><strong>Address</strong> {Address}</p>
        <p><strong>Birthday</strong> {Birthday}</p>
      </div>
   )
}
export default personalInformation