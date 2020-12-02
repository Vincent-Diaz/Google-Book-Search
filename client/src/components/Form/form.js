import React from "react";
// import Button from 'react-bootstrap/Button'

function Form(props) {
    return (
        <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"><h2>Search for a Book</h2></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search Book"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
        Search
        </button>
    </div>
  </form>
  </div>

    )
}
export default Form;