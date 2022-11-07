function Searchbar({setSearchTerm}) {
  return (
    <input type="text" placeholder="Search by Artist" onChange={(event) => {
      setSearchTerm(event.target.value)
    }} />
  )
}
  

export default Searchbar